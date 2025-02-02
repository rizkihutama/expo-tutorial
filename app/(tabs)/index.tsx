import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { type ImageSource } from 'expo-image';

import GlobalStyles from '../GlobalStyles';
import Button from '@/components/Button';
import CircleAddButton from '@/components/CircleAddButton';
import IconButton from '@/components/IconButton';
import ImageViewer from '@/components/ImageViewer';
import EmojiPicker from '@/components/EmojiPicker';
import EmojiList from '@/components/EmojiList';
import EmojiSticker from '@/components/EmojiSticker';

const PlaceholderImage = require('@/assets/images/background-image.png');

export default function Index() {
  const [selectedImage, setSelectedImage] = useState<string | undefined>(
    undefined
  );
  const [showAppOption, setShowAppOption] = useState<boolean>(false);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [selectedEmoji, setSelectedEmoji] = useState<ImageSource | undefined>(
    undefined
  );

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      setShowAppOption(true);
    } else {
      alert('You did not select any image.');
    }
  };

  const onReset = () => {
    setShowAppOption(false);
    setSelectedEmoji(undefined);
  };

  const onAddSticker = () => {
    setIsModalVisible(true);
  };

  const onModalClose = () => {
    setIsModalVisible(false);
  };

  const onSaveImage = async () => {
    // save edited image
  };

  return (
    <View style={GlobalStyles.container}>
      <View style={GlobalStyles.imageContainer}>
        <ImageViewer imgSrc={PlaceholderImage} selectedImage={selectedImage} />
        {selectedEmoji && (
          <EmojiSticker
            stickerSource={selectedEmoji}
            imageSize={selectedEmoji?.height || 40}
          />
        )}
      </View>

      {showAppOption ? (
        <View style={style.optionContainer}>
          <View style={style.optionRow}>
            <IconButton icon='refresh' label='Reset' onPress={onReset} />
            {!selectedEmoji && <CircleAddButton onPress={onAddSticker} />}
            <IconButton icon='save-alt' label='Save' onPress={onSaveImage} />
          </View>
        </View>
      ) : (
        <View style={GlobalStyles.footerContainer}>
          <Button
            label='Choose photo from camera roll'
            theme='primary'
            onPress={pickImage}
          />
          <Button
            label='Choose this photo'
            onPress={() => setShowAppOption(true)}
          />
        </View>
      )}
      <EmojiPicker isVisible={isModalVisible} onClose={onModalClose}>
        <EmojiList onSelect={setSelectedEmoji} onCloseModal={onModalClose} />
      </EmojiPicker>
    </View>
  );
}

const style = StyleSheet.create({
  container: {},
  optionContainer: {
    position: 'absolute',
    bottom: 80,
  },
  optionRow: {
    alignItems: 'center',
    flexDirection: 'row',
  },
});
