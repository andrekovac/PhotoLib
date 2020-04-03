import { ItemT } from "../../components/Pictorio/Item";

import { ADD_PHOTOS } from "../actionTypes/photos";
import { ThunkResult } from "./index";

export type PhotosActionT = {
  type: typeof ADD_PHOTOS;
  photos: ReadonlyArray<ItemT>;
};

// // Alternative:
// fetch('https://picsum.photos/v2/list?page=1&limit=100')
//   .then(response => response.json())
//   .then(data => setData(data));
const fetchData = async (): Promise<ReadonlyArray<ItemT>> => {
  const response = await fetch(
    "https://picsum.photos/v2/list?page=1&limit=100"
  );
  return response.json();
};

const addPhotos = (photos: ReadonlyArray<ItemT>): PhotosActionT => {
  return {
    type: ADD_PHOTOS,
    photos
  };
};

export const fetchPhotos = (): ThunkResult<void> => {
  return dispatch => {
    fetchData().then(photos => dispatch(addPhotos(photos)));
  };
};
