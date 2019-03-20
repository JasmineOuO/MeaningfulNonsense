import React from 'react';
import { PhotographyPageTemplate } from '../../templates/photography';

const PhotographyPagePreview = ({ widgetsFor }) => {
  return <PhotographyPageTemplate photos={widgetsFor('photos').map(photo => photo.data)} />;
};

export default PhotographyPagePreview;
