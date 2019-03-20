import React from 'react';
import CMS from 'netlify-cms';

export const AuthorNoteControl = props => {
  const MarkdownControl = CMS.getWidget('markdown').control;
  return <MarkdownControl {...props} />;
};

export const AuthorNotePreview = props => {
  const MarkdownPreview = CMS.getWidget('markdown').preview;
  return (
    <div>
      <hr />
      <MarkdownPreview {...props} />
    </div>
  );
};
