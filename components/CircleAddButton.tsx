import { MaterialIcons } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text, View } from 'react-native';

type Props = {
  onPress: () => void;
};

export default function CircleAddButton({ onPress }: Props) {
  return (
    <View style={style.circleButtonContainer}>
      <Pressable style={style.circleButton} onPress={onPress}>
        <MaterialIcons name='add' size={38} color='#25292E' />
      </Pressable>
    </View>
  );
}

const style = StyleSheet.create({
  circleButtonContainer: {
    width: 84,
    height: 84,
    borderWidth: 4,
    borderColor: '#FFD33D',
    borderRadius: 42,
    padding: 3,
  },
  circleButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 42,
    backgroundColor: '#FEFEFE',
  },
});
