import { ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES, ActionTypes } from '../types/types';

export const addToFavorites = (imageUrl: string): ActionTypes => {
  return {
    type: ADD_TO_FAVORITES,
    payload: imageUrl,
  };
};

export const removeFromFavorites = (imageUrl: string): ActionTypes => {
  return {
    type: REMOVE_FROM_FAVORITES,
    payload: imageUrl,
  };
};