import { Image, ImageContentFit } from 'expo-image';
import React, { useState } from 'react';
import { StyleProp, ImageStyle } from 'react-native';

type ImageListProps = {
  imageUrl: string;
  style?: StyleProp<ImageStyle>;
  transition?: number;
  contentFit?: ImageContentFit;
};

const placeholder = require('../../assets/images/placeholder.png');

const CachedImage: React.FC<ImageListProps> = ({
  imageUrl,
  style,
  contentFit = 'cover',
  transition = 200,
}) => {
  const [imgError, setImgError] = useState(false);

  return (
    <Image
      source={imgError ? placeholder : { uri: imageUrl }}
      style={style}
      contentFit={contentFit}
      transition={transition}
      cachePolicy="memory-disk"
      placeholder={placeholder}
      onError={() => setImgError(true)}
    />
  );
};

export default CachedImage;