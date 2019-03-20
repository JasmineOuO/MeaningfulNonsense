import React from 'react';
import { BlogPostLayout } from '../../templates/post';

const BlogPostPreview = ({ entry, widgetFor }) => (
  <BlogPostLayout
    content={widgetFor('body')}
    description={entry.getIn(['data', 'description'])}
    tags={entry.getIn(['data', 'tags'])}
    title={entry.getIn(['data', 'title'])}
    authorNote={entry.getIn(['data', 'authornote'])}
  />
);

export default BlogPostPreview;
