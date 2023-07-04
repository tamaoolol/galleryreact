import React from 'react';
import { View, FlatList, TouchableOpacity, Image, Dimensions } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/types/types';
import { removeFromFavorites } from '../redux/actions/actions';
import GalleryTile from '../components/GalleryTile';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { FavoriteStackParamList } from '../navigation/StackParamList';

type FavoriteScreenNavigationProp = StackNavigationProp<FavoriteStackParamList, 'Favorites'>;

type FavoriteScreenProps = {
  navigation: FavoriteScreenNavigationProp;
};

const FavoriteScreen: React.FC<FavoriteScreenProps> = ({ navigation }) => {
  const dispatch = useDispatch();
  const favoriteItems = useSelector((state: RootState) => state.favoriteItems);

  const handleRemoveFromFavorites = (imageUrl: string) => {
    dispatch(removeFromFavorites(imageUrl));
  };

  const handleOpenImage = (imageUrl: string) => {
    navigation.navigate('Image', { imageUrl });
  };

  return (
    <View>
      <FlatList
        data={favoriteItems}
        keyExtractor={(item) => item}
        numColumns={3}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleOpenImage(item)}>
            <GalleryTile
              imageUrl={item}
              isFavorite={true}
              onPress={() => handleRemoveFromFavorites(item)}
            />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default FavoriteScreen;