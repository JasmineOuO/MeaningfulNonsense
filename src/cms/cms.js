/*eslint-disable */
import CMS from 'netlify-cms';

import AboutPagePreview from './preview-templates/AboutPagePreview';
import BlogPostPreview from './preview-templates/BlogPostPreview';
import IndexPagePreview from './preview-templates/IndexPagePreview';
import PhotographyPagePreview from './preview-templates/PhotographyPagePreview';

import { AuthorNoteControl, AuthorNotePreview } from './widgets/AuthorNote';

CMS.registerPreviewTemplate('index', IndexPagePreview);
CMS.registerPreviewTemplate('about', AboutPagePreview);
CMS.registerPreviewTemplate('photography', PhotographyPagePreview);
CMS.registerPreviewTemplate('blog', BlogPostPreview);

CMS.registerWidget('authorNote', AuthorNoteControl, AuthorNotePreview);

CMS.registerEditorComponent({
  id: 'separator',
  label: '---',
  // A bogus field so that the component doesn't look weird when rendered:
  fields: [{ label: 'Separator', widget: 'select', options: ['---'], default: '---' }],
  // Never match anything so that the separator will be recognized as a horizontal rule when the document is reloaded:
  pattern: /.^/,
  toBlock() {
    return '---';
  },
  toPreview() {
    return '<hr>';
  }
});

CMS.registerEditorComponent({
  id: 'quote',
  label: 'Quote',
  fields: [
    { name: 'quote', label: 'quote', widget: 'text' },
    { name: 'cite', label: 'cite', widget: 'string' }
  ],
  pattern: /^quote ([^<]*) cite ([^<]*)/,
  fromBlock: function(match) {
    return {
      quote: match[1],
      cite: match[2]
    };
  },
  toBlock: function(obj) {
    return 'quote ' + obj.quote + ' cite ' + obj.cite;
  },
  toPreview: function(obj) {
    return '<blockquote>' + obj.quote + '</blockquote><cite>' + obj.cite + '</cite>';
  }
});
