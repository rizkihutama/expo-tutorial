import { Text, View } from 'react-native';
import GlobalStyles from '../GlobalStyles';

export default function AboutScreen() {
  return (
    <View style={GlobalStyles.container}>
      <Text style={GlobalStyles.text}>About screen.</Text>
    </View>
  );
}
