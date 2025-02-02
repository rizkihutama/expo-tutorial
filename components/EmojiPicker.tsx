import { MaterialIcons } from '@expo/vector-icons';
import { Modal, Pressable, StyleSheet, Text, View } from 'react-native';

type Props = {
  isVisible: boolean;
  children: React.ReactNode;
  onClose?: () => void;
};

export default function EmojiPicker({ isVisible, children, onClose }: Props) {
  return (
    <Modal animationType='slide' transparent={true} visible={isVisible}>
      <View style={style.modalContent}>
        <View style={style.titleContainer}>
          <Text style={style.title}>Chose a sticker</Text>
          <Pressable onPress={onClose} hitSlop={20}>
            <MaterialIcons name='close' color='#FEFEFE' size={22} />
          </Pressable>
        </View>
        {children}
      </View>
    </Modal>
  );
}

const style = StyleSheet.create({
  modalContent: {
    height: '25%',
    width: '100%',
    backgroundColor: '#25292E',
    borderTopRightRadius: 18,
    borderTopLeftRadius: 18,
    position: 'absolute',
    bottom: 0,
  },
  titleContainer: {
    height: '16%',
    backgroundColor: '#464C55',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    color: '#FEFEFE',
    fontSize: 16,
  },
});
