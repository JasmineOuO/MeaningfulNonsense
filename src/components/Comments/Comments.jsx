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
      errors: {},
      isValid: false
    };
  }

  handleSubmit = event => {
    if (isValid) {
      return;
    } else {
      event.preventDefault();
    }
    const { name, message, errors } = this.state;
    this.setState({ isValid: true });
    if (!name) {
      this.setState({ isValid: false });
      errors.name = 'Please enter a name';
    } else {
      errors.name = '';
    }
    if (!message) {
      this.setState({ isValid: false });
      errors.message = 'Please add a comment';
    } else {
      errors.message = '';
    }
  };

  onChange = event => {
    const target = event.target;
    this.setState({
      [target.name]: target.value
    });
  };

  render() {
    const { allCommentsYaml, slug } = this.props;
    const { name, email, message, errors, isValid } = this.state;
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
          <div className={classes.Form} onSubmit={this.handleSubmit}>
            <form
              id="comment-form"
              autoComplete="off"
              method="POST"
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
              <span className={classes.Error}>{errors.name}</span>
              <input type="text" id="name" name="fields[name]" value={name} onChange={onChange} />
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                id="email"
                name="fields[email]"
                value={email}
                onChange={onChange}
              />
              <label htmlFor="message">Message*</label>
              <span className={classes.Error}>{errors.message}</span>
              <textarea
                type="text"
                id="message"
                name="fields[message]"
                value={message}
                onChange={onChange}
              />
              <button type="submit">Comment</button>
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default Comments;
