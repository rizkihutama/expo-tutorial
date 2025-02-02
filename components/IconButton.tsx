import { MaterialIcons } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text } from 'react-native';

type Props = {
  icon: keyof typeof MaterialIcons.glyphMap;
  label: string;
  onPress: () => void;
};

export default function IconButton({ icon, label, onPress }: Props) {
  return (
    <Pressable style={style.iconButton} onPress={onPress}>
      <MaterialIcons name={icon} size={24} color='#FEFEFE' />
      <Text style={style.iconButtonLabel}>{label}</Text>
    </Pressable>
  );
}

const style = StyleSheet.create({
  iconButton: {
    marginHorizontal: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconButtonLabel: {
    color: '#FEFEFE',
    marginTop: 12,
  },
});
