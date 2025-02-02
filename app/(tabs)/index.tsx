import { View } from 'react-native';
import GlobalStyles from '../GlobalStyles';
import ImageViewer from '@/components/ImageViewer';
import Button from '@/components/Button';

const PlaceholderImage = require('@/assets/images/background-image.png');

export default function Index() {
  return (
    <View style={GlobalStyles.container}>
      <View style={GlobalStyles.imageContainer}>
        <ImageViewer imgSrc={PlaceholderImage} />
      </View>

      <View style={GlobalStyles.footerContainer}>
        <Button
          label='Choose a photo'
          theme='primary'
          onPress={() => alert('Button Pressed')}
        />
        <Button
          label='Choose this photo'
          onPress={() => alert('Button Pressed')}
        />
      </View>
    </View>
  );
}
