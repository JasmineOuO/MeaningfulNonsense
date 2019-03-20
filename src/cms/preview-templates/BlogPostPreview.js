import React from 'react';
import { BlogPostLayout } from '../../templates/post';

const BlogPostPreview = ({ entry, widgetFor }) => (
  <BlogPostLayout
    title={entry.getIn(['data', 'title'])}
    date={widgetFor('date')}
    content={widgetFor('body')}
    description={entry.getIn(['data', 'description'])}
    tags={entry.getIn(['data', 'tags'])}
    authorNote={entry.getIn(['data', 'authornote'])}
  />
);

export default BlogPostPreview;
