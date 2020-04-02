import { ItemT } from "../../components/Pictorio/Item";

import { PhotosActionT, FavoriteActionT } from "../actionCreators/photos";
import { ADD_PHOTOS, TOGGLE_FAVORITE } from "../actionTypes/photos";

const defaultState: ReadonlyArray<ItemT> = [];

const photosReducer = (
  state = defaultState,
  action: PhotosActionT | FavoriteActionT
) => {
  switch (action.type) {
    case ADD_PHOTOS:
      state = action.photos.map(photo => ({ ...photo, isFavorite: false }));
      break;
    case TOGGLE_FAVORITE:
      state = state.map(photo =>
        photo.id === action.id
          ? { ...photo, isFavorite: !photo.isFavorite }
          : photo
      );
      break;
  }
  return state;
};

export default photosReducer;
