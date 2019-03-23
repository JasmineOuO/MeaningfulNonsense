/*eslint-disable */
import CMS from 'netlify-cms';

import AboutPagePreview from './preview-templates/AboutPagePreview';
import BlogPostPreview from './preview-templates/BlogPostPreview';
import IndexPagePreview from './preview-templates/IndexPagePreview';
import PhotographyPagePreview from './preview-templates/PhotographyPagePreview';

import { AuthorNoteControl, AuthorNotePreview } from './widgets/AuthorNote';
import { MdxControl, setupPreview } from 'netlify-cms-widget-mdx';

CMS.registerPreviewTemplate('index', IndexPagePreview);
CMS.registerPreviewTemplate('about', AboutPagePreview);
CMS.registerPreviewTemplate('photography', PhotographyPagePreview);
CMS.registerPreviewTemplate('blog', BlogPostPreview);

CMS.registerWidget(
  'mdx',
  MdxControl,
  setupPreview({
    components: {
      h1: ({ children, ...props }) => (
        <h1 style={{ color: 'tomato' }} {...props}>
          {children}
        </h1>
      )
    },
    scope: {
      Layout: props => (
        <div
          style={{ padding: '10px', border: '1px solid green', borderRadius: '5px' }}
          {...props}
        />
      )
    },
    allowedImports: {},
    mdPlugins: []
  })
);

// CMS.registerWidget('authorNote', AuthorNoteControl, AuthorNotePreview);

// CMS.registerEditorComponent({
//   id: 'separator',
//   label: '---',
//   // A bogus field so that the component doesn't look weird when rendered:
//   fields: [{ label: 'Separator', widget: 'select', options: ['---'], default: '---' }],
//   // Never match anything so that the separator will be recognized as a horizontal rule when the document is reloaded:
//   pattern: /.^/,
//   toBlock: () => '---',
//   toPreview: () => '<hr>'
// });

// CMS.registerEditorComponent({
//   id: 'quote',
//   label: 'Quote',
//   fields: [
//     { name: 'quote', label: 'quote', widget: 'text' },
//     { name: 'cite', label: 'cite', widget: 'string' }
//   ],
//   pattern: /^<blockquote>([^<]*)<\/blockquote><cite>([^<]*)<\/cite>/,
//   fromBlock: match => ({
//     quote: match[1],
//     cite: match[2]
//   }),
//   toBlock: obj => `<blockquote>${obj.quote}</blockquote><cite>${obj.cite}</cite>`,
//   toPreview: obj => `<blockquote>${obj.quote}</blockquote><cite>${obj.cite}</cite>`
// });

// CMS.registerEditorComponent({
//   id: 'photograph',
//   label: 'Photograph',
//   fields: [
//     { name: 'photo', label: 'photo', widget: 'image' },
//     { name: 'photographer', label: 'photographer', widget: 'string' },
//     { name: 'date', label: 'date', widget: 'datetime' },
//     { name: 'location', label: 'location', widget: 'string' }
//   ],
//   pattern: /^<figure><img src="([^<]*)" ([^<]*) \/><figcaption>Photographed in ([^<]*) on ([^<]*) by ([^<]*)<\/figcaption><\/figure>/,
//   fromBlock: match => ({
//     photo: match[1],
//     location: match[3],
//     date: match[4],
//     photographer: match[5]
//   }),
//   toBlock: obj =>
//     `<figure><img src="${obj.photo}" alt="${obj.location}" title="${
//       obj.location
//     }" /><figcaption>Photographed in ${obj.location} on ${obj.date} by ${
//       obj.photographer
//     }<\/figcaption><\/figure>`,
//   toPreview: obj =>
//     `<figure><img src="${obj.photo}" alt="${obj.location}" title="${
//       obj.location
//     }" /><figcaption>Photographed in ${obj.location} on ${obj.date} by ${
//       obj.photographer
//     }<\/figcaption><\/figure>`
// });
