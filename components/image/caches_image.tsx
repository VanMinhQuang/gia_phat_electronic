import {Image, ImageContentFit} from 'expo-image';
import React, { useState } from 'react';
import { StyleProp, ImageStyle } from 'react-native';

type ImageListProps = {
  imageUrl: string;
  styles: StyleProp<ImageStyle>;
  transition: number;
  contentFit: ImageContentFit;
};


const CachedImage : React.FC<ImageListProps> = ({imageUrl, styles, contentFit, transition}) => {
  const [imgError, setImgError] = useState(false);

  return (
    <Image
      source={
        imgError
          ? require('../../../../assets/images/placeholder.png')
          : { uri: imageUrl}
      }
      style={styles}
      contentFit= {contentFit}
      transition={transition}
      cachePolicy="memory-disk"
      placeholder={require('../../../../assets/images/placeholder.png')}
      onError={(error) => {
        console.error("Image loading error:", error);
        setImgError(true);
      }}
    />
  );
}

export default CachedImage;