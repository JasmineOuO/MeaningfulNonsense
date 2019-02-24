import CMS from 'netlify-cms';

import '../templates/blog-post.module.css';
import '../components/Footer/Footer.module.css';
import '../components/Gallery/Gallery.module.css';
import '../components/Header/Header.module.css';
import '../components/Layout/Layout.module.css';
import '../components/Navbar/Navbar.module.css';
import '../components/Polaroid/Polaroid.module.css';
import '../components/SocialButton/SocialButton.module.css';


import AboutPagePreview from './preview-templates/AboutPagePreview';
import BlogPostPreview from './preview-templates/BlogPostPreview';
import IndexPagePreview from './preview-templates/IndexPagePreview';

CMS.registerPreviewTemplate('index', IndexPagePreview);
CMS.registerPreviewTemplate('about', AboutPagePreview);
CMS.registerPreviewTemplate('blog', BlogPostPreview);
