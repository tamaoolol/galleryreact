import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface GalleryTileProps {
  imageUrl: string;
  isFavorite: boolean;
  onPress: () => void;
}

const GalleryTile: React.FC<GalleryTileProps> = ({ imageUrl, isFavorite, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      {/* {isFavorite && <Icon name="star" size={24} color="yellow" style={styles.favoriteIcon} />} */}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  favoriteIcon: {
    position: 'absolute',
    top: 5,
    right: 5,
    backgroundColor: 'transparent',
  },
});

export default GalleryTile;