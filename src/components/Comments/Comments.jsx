/* eslint-disable */
import React, { Component } from 'react';
import classes from './Comments.module.css';

class Comments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
      nameError: 'Please enter a name',
      messageError: 'Please enter a message',
      isValid: false
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

  render() {
    const { allCommentsYaml, slug } = this.props;
    const { name, email, message, nameError, messageError, isValid } = this.state;
    const comments = allCommentsYaml && allCommentsYaml.edges;
    return (
      <>
        <div className={classes.Header}>Comments</div>
        <div className={classes.Block}>
          <div>
            {comments &&
              comments.length &&
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
              onSubmit={() => alert('Thanks! Your comment has been submitted for approval.')}
              action="https://dev.staticman.net/v3/entry/github/JasmineOuO/MeaningfulNonsense/master/comments"
            >
              <input
                name="options[redirect]"
                type="hidden"
                value={`https://meaningfulnonsense.ca${slug}`}
              />
              <input name="options[slug]" type="hidden" value={slug} />
              <input name="fields[slug]" type="hidden" value={slug} />
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
              <button type="submit" disabled={!isValid}>
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
