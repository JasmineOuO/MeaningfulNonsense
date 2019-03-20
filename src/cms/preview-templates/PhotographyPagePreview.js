import React from 'react';
import { PhotographyPageTemplate } from '../../templates/photography';

const PhotographyPagePreview = ({ entry }) => {
  const entryPhotos = entry.getIn(['data', 'photos']);
  const photos = entryPhotos ? entryPhotos.toJS() : [];

  return <PhotographyPageTemplate photos={{ photos }} />;
};

export default PhotographyPagePreview;
