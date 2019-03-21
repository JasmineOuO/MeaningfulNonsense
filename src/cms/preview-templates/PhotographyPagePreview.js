import React from 'react';
import { PhotographyPageTemplate } from '../../templates/photography';

const PhotographyPagePreview = ({ entry }) => {
  return (
    <PhotographyPageTemplate
      photos={entry.getIn(['data', 'photos']).map(photo => ({
        image: photo.getIn(['image']),
        title: photo.getIn(['title']),
        date: photo.getIn(['date']),
        location: photo.getIn(['location'])
      }))}
    />
  );
};

export default PhotographyPagePreview;
