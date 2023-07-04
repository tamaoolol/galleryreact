import React from 'react';
import { View, FlatList, TouchableOpacity, Image, Dimensions } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/types/types';
import { addToFavorites } from '../redux/actions/actions';
import GalleryTile from '../components/GalleryTile';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { StackParamList } from '../navigation/AppNavigator';
import { MainStackParamList } from '../navigation/StackParamList';

type MainScreenNavigationProp = StackNavigationProp<MainStackParamList, 'Main'>;

type MainScreenProps = {
  navigation: MainScreenNavigationProp;
};

const MainScreen: React.FC<MainScreenProps> = ({ navigation }) => {
  const dispatch = useDispatch();
  const galleryItems = useSelector((state: RootState) => state.galleryItems);

  const handleAddToFavorites = (imageUrl: string) => {
    dispatch(addToFavorites(imageUrl));
  };

  const handleOpenImage = (imageUrl: string) => {
    navigation.navigate('Image', { imageUrl });
  };

  return (
    <View>
      <FlatList
        data={galleryItems}
        keyExtractor={(item) => item}
        numColumns={3}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleOpenImage(item)}>
            <GalleryTile
              imageUrl={item}
              isFavorite={false}
              onPress={() => handleAddToFavorites(item)}
            />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default MainScreen;