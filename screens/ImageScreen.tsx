import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import ZoomableView from '@dudigital/react-native-zoomable-view/src/ReactNativeZoomableView';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { StackParamList } from '../navigation/AppNavigator';

type ImageScreenNavigationProp = StackNavigationProp<StackParamList, 'Image'>;
type ImageScreenRouteProp = RouteProp<StackParamList, 'Image'>;

interface ImageScreenProps {
  navigation: ImageScreenNavigationProp;
  route: ImageScreenRouteProp;
}

const ImageScreen: React.FC<ImageScreenProps> = ({ route }) => {
  const imageUrl = route.params.imageUrl;

  return (
    <View style={styles.container}>
      <ZoomableView maxZoom={1.5} minZoom={0.5} zoomStep={0.5}>
        <Image source={{ uri: imageUrl }} style={styles.image} resizeMode="contain" />
      </ZoomableView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export default ImageScreen;