import { Image } from 'expo-image';
import { StyleSheet } from 'react-native';

type ImageType = {
  imgSrc: string;
};

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});

export default function ImageViewer({ imgSrc }: ImageType) {
  return <Image source={imgSrc} style={styles.image} />;
}
