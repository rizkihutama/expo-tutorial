import { FontAwesome } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text, View } from 'react-native';

type ButtonType = {
  label: string;
  theme?: 'primary';
  onPress?: () => void;
};

const style = StyleSheet.create({
  buttonContainer: {
    width: 320,
    height: 68,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
  },
  button: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    // padding: 10,
    borderRadius: 10,
    // backgroundColor: '#FFD33D',
  },
  buttonIcon: {
    paddingRight: 8,
  },
  buttonLabel: {
    color: '#FEFEFE',
    fontSize: 16,
  },
});

export default function Button({ label, theme, onPress }: ButtonType) {
  if (theme === 'primary') {
    return (
      <View
        style={[
          style.buttonContainer,
          { borderWidth: 4, borderColor: '#FFD33D', borderRadius: 18 },
        ]}
      >
        <Pressable
          style={[style.button, { backgroundColor: '#fff' }]}
          onPress={onPress}
        >
          <FontAwesome
            name='picture-o'
            size={18}
            color='#25292E'
            style={style.buttonIcon}
          />
          <Text style={[style.buttonLabel, { color: '#25292E' }]}>{label}</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View style={style.buttonContainer}>
      <Pressable style={style.button} onPress={onPress}>
        <Text style={style.buttonLabel}>{label}</Text>
      </Pressable>
    </View>
  );
}
