/*eslint-disable */
import CMS from 'netlify-cms';

import AboutPagePreview from './preview-templates/AboutPagePreview';
import BlogPostPreview from './preview-templates/BlogPostPreview';
import IndexPagePreview from './preview-templates/IndexPagePreview';
import PhotographyPagePreview from './preview-templates/PhotographyPagePreview';

CMS.registerPreviewTemplate('index', IndexPagePreview);
CMS.registerPreviewTemplate('about', AboutPagePreview);
CMS.registerPreviewTemplate('photography', PhotographyPagePreview);
CMS.registerPreviewTemplate('blog', BlogPostPreview);
