import { ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES, ActionTypes, RootState } from '../types/types';

const initialState: RootState = {
  galleryItems: [
    'https://example.com/image1.jpg',
    'https://example.com/image2.jpg',
    'https://example.com/image3.jpg',
    'https://example.com/image4.jpg',
    'https://example.com/image5.jpg',
    'https://example.com/image6.jpg',
  ],
  favoriteItems: [],
};

const rootReducer = (state = initialState, action: ActionTypes): RootState => {
  switch (action.type) {
    case ADD_TO_FAVORITES:
      return {
        ...state,
        favoriteItems: [...state.favoriteItems, action.payload],
      };
    case REMOVE_FROM_FAVORITES:
      return {
        ...state,
        favoriteItems: state.favoriteItems.filter((item) => item !== action.payload),
      };
    default:
      return state;
  }
};

export default rootReducer;