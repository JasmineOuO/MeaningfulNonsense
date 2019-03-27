/* eslint-disable */
import React, { Component } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import classes from './Comments.module.css';

import Loader from '../Loader/Loader';

class Comments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
      nameError: 'Please enter a name',
      messageError: 'Please enter a message',
      isValid: false,
      notRobot: false,
      isSubmitted: false
    };
  }

  onChange = event => {
    const target = event.target;
    this.setState({
      [target.id]: target.value,
      [`${target.id}Error`]: !!target.value ? '' : `Please enter a ${target.id}`
    });
    this.setState(prevState => ({
      isValid: !!prevState.name && !!prevState.message
    }));
  };

  handleSubmit = () => {
    if (!alert('Thanks! Your comment has been submitted for approval.')) {
      this.setState({ isSubmitted: true });
    }
  };

  onReCAPTCHA = () => {
    this.setState({ notRobot: true });
  };

  render() {
    const { allCommentsYaml, slug } = this.props;
    const {
      name,
      email,
      message,
      nameError,
      messageError,
      isValid,
      notRobot,
      isSubmitted
    } = this.state;
    const comments = allCommentsYaml && allCommentsYaml.edges;
    return (
      <>
        {isSubmitted && <Loader />}
        <div className={classes.Header}>Comments</div>
        <div className={classes.Block}>
          <div>
            {comments &&
              comments.length > 0 &&
              comments.map(({ node: comment }) => (
                <div key={comment.id} className={classes.Comment}>
                  <div className={classes.Name}>{comment.name}</div>
                  <div className={classes.Date}>{comment.date}</div>
                  <div className={classes.Message}>{comment.message}</div>
                </div>
              ))}
          </div>
          <div className={classes.Form}>
            <form
              autoComplete="off"
              onSubmit={this.handleSubmit}
              method="POST"
              action="https://meaningfulnonsense-comments.herokuapp.com/v2/entry/JasmineOuO/MeaningfulNonsense/master/comments"
            >
              <input
                name="options[redirect]"
                type="hidden"
                value={`https://meaningfulnonsense.ca${slug}`}
              />
              <input name="options[slug]" type="hidden" value={slug} />
              <input name="fields[slug]" type="hidden" value={slug} />
              <input
                type="hidden"
                name="options[reCaptcha][siteKey]"
                value="6LdOf5gUAAAAAGzyIGRA_VGpVh_tjGK1E7opk3PP"
              />
              <input
                type="hidden"
                name="options[reCaptcha][secret]"
                value="Qsvfflvo4CI509L3fCQnZ40EKzRjjpl7fUee0fTEUomJmHKIhekxYPMYfolmkcY7Av6EiSkCsbwg+y0MaLSZTU76d7BlZabfWeqQ1Fj2NH5HA3Z7tQSbnVdiiKqcSSx+f7SspfKd/Vt988AkzFM2dcae7kHun/BWhcaOpUHAoyBt/qLDThOxVlG4Ke9CnDbLJIPaIbb5WnWSD1PaD0yQI6Ynjm4FtvbrZBfWrips7uLo9Pjk2Z6JzNk4dlOrKxNoSaXWZaJJlCAElzXhJ+vxSAP+7AEPRFGzfKu4/6QPvFFEX3H7TuF+/ZimXanFNbh8hNBRKFPj9OWhjwj0HyzoFQ=="
              />
              <label htmlFor="name">Name*</label>
              <span className={classes.Error}>{nameError}</span>
              <input
                type="text"
                id="name"
                name="fields[name]"
                value={name}
                onChange={this.onChange}
              />
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                id="email"
                name="fields[email]"
                value={email}
                onChange={this.onChange}
              />
              <label htmlFor="message">Message*</label>
              <span className={classes.Error}>{messageError}</span>
              <textarea
                type="text"
                id="message"
                name="fields[message]"
                value={message}
                onChange={this.onChange}
              />
              <ReCAPTCHA
                className={classes.ReCAPTCHA}
                sitekey="6LdOf5gUAAAAAGzyIGRA_VGpVh_tjGK1E7opk3PP"
                onChange={this.onReCAPTCHA}
              />
              <button type="submit" disabled={!isValid || !notRobot}>
                Comment
              </button>
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default Comments;
