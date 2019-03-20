import React from 'react';
import { PhotographyPageTemplate } from '../../templates/photography';

const PhotographyPagePreview = ({ entry }) => {
  return <PhotographyPageTemplate photos={entry.getIn(['data', 'photos'])} />;
};

export default PhotographyPagePreview;
