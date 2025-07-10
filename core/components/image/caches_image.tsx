import { Image, ImageContentFit } from 'expo-image';
import React, { useState } from 'react';
import { StyleProp, ImageStyle } from 'react-native';
import ImageAssets from '../../constant/image/Image';

type ImageListProps = {
  imageUrl: string;
  style?: StyleProp<ImageStyle>;
  transition?: number;
  contentFit?: ImageContentFit;
  isAssest: boolean;
};

const placeholder = ImageAssets.placeHolder;

const CachedImage: React.FC<ImageListProps> = ({
  imageUrl,
  style,
  contentFit = 'cover',
  transition = 200,
  isAssest = false
}) => {
  const [imgError, setImgError] = useState(false);

  return (
    <Image
      source={imgError ? placeholder : isAssest ? imageUrl : { uri: imageUrl }}
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