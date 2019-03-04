/* eslint-disable */
import React from 'react';
import classes from './Comments.module.css';

const Comments = ({ allCommentsYaml, slug }) => {
  const comments = allCommentsYaml && allCommentsYaml.edges;
  return (
    <>
     <div className={classes.Header}>
        Comments
      </div>
      <div className={classes.Block}>
        <div>
          { comments && comments.length && (
            comments.map(({ node: comment }) => (
              <div key={comment.id} className={classes.Comment}>
                <div className={classes.Name}>{comment.name}</div>
                <div className={classes.Date}>{comment.date}</div>
                <div className={classes.Message}>{comment.message}</div>
              </div>
            ))
          )}
        </div>
        <div className={classes.Form}>
          <form id="comment-form" autoComplete="off" method="POST" action="https://dev.staticman.net/v3/entry/github/JasmineOuO/MeaningfulNonsense/master/comments">
            <input name="options[redirect]" type="hidden" value={`https://meaningfulnonsense.ca${slug}`} />
            <input name="options[slug]" type="hidden" value={slug} />
            <input name="fields[slug]" type="hidden" value={slug} />
            <label htmlFor="comment-form-name">Name*</label>
            <input type="text" id="comment-form-name" name="fields[name]" />
            <label htmlFor="comment-form-email">E-mail</label>
            <input type="email" id="comment-form-email" name="fields[email]" />
            <label htmlFor="comment-form-message">Message*</label>
            <textarea type="text" id="comment-form-message" name="fields[message]" />
            <p className="hidden js-notice" style={{display: 'none'}}>
              <span className="js-notice-text" />
            </p>
            <button type="submit" id="comment-form-submit">Comment</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Comments;
