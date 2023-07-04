export const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES';
export const REMOVE_FROM_FAVORITES = 'REMOVE_FROM_FAVORITES';

export interface RootState {
  galleryItems: string[];
  favoriteItems: string[];
}

interface AddToFavoritesAction {
  type: typeof ADD_TO_FAVORITES;
  payload: string;
}

interface RemoveFromFavoritesAction {
  type: typeof REMOVE_FROM_FAVORITES;
  payload: string;
}

export type ActionTypes = AddToFavoritesAction | RemoveFromFavoritesAction;