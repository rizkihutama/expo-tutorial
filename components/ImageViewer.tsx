import { Image } from 'expo-image';
import { StyleSheet } from 'react-native';

type Props = {
  imgSrc: string;
  selectedImage?: string;
};

export default function ImageViewer({ imgSrc, selectedImage }: Props) {
  const imageSource = selectedImage ? { uri: selectedImage } : imgSrc;

  return <Image source={imageSource} style={styles.image} />;
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});
