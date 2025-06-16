import {Image, ImageContentFit} from 'expo-image';
import React from 'react';

type ImageListProps = {
  imageUrl: string;
  styles: any;
  transition: number;
  contentFit: ImageContentFit;
};


const CachedImage : React.FC<ImageListProps> = ({imageUrl, styles, contentFit, transition}) => {
  return (
    <Image
      source={{ uri: imageUrl }}
      style={styles}
      contentFit= {contentFit}
      transition={transition}
      cachePolicy="memory-disk"
      placeholder={require('../../../../assets/images/placeholder.png')}
    />
  );
}

export default CachedImage;