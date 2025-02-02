import React, { useState } from 'react';
import { View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

import GlobalStyles from '../GlobalStyles';
import ImageViewer from '@/components/ImageViewer';
import Button from '@/components/Button';

const PlaceholderImage = require('@/assets/images/background-image.png');

export default function Index() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      console.log(result.assets);
    } else {
      alert('You did not select any image.');
    }
  };

  return (
    <View style={GlobalStyles.container}>
      <View style={GlobalStyles.imageContainer}>
        <ImageViewer imgSrc={selectedImage || PlaceholderImage} />
      </View>

      <View style={GlobalStyles.footerContainer}>
        <Button
          label='Choose photo from camera roll'
          theme='primary'
          onPress={pickImage}
        />
        <Button
          label='Choose this photo'
          onPress={() => alert('Button Pressed')}
        />
      </View>
    </View>
  );
}
