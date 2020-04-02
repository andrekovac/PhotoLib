import { ItemT } from '../../components/Pictorio/Item';

import { PhotosActionT } from "../actionCreators/photos";
import { ADD_PHOTOS } from '../actionTypes/photos';

const defaultState: ReadonlyArray<ItemT> = [];

const photosReducer = (state = defaultState, action: PhotosActionT) => {
  switch (action.type) {
    case ADD_PHOTOS:
      state = action.photos;
      break;
  }
  return state;
};

export default photosReducer;
