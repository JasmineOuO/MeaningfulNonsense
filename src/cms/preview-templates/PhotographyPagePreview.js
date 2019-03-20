import React from 'react';
import { PhotographyPageTemplate } from '../../templates/photography';

const PhotographyPagePreview = ({ widgetsFor }) => {
  return (
    <PhotographyPageTemplate
      photos={widgetsFor('photos').map(photo => ({
        image: photo.getIn(['data', 'image']),
        title: photo.getIn(['data', 'title']),
        date: photo.getIn(['data', 'date']),
        location: photo.getIn(['data', 'location'])
      }))}
    />
  );
};

export default PhotographyPagePreview;
