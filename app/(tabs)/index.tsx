import { Text, View } from 'react-native';
import GlobalStyles from '../GlobalStyles';

export default function Index() {
  return (
    <View style={GlobalStyles.container}>
      <Text style={GlobalStyles.text}>Hello World.</Text>
    </View>
  );
}
