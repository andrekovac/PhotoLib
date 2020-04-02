import { ItemT } from "../../components/Pictorio/Item";

import { ADD_PHOTOS, FETCH_START, FETCH_ERROR } from "../actionTypes/photos";
import { ThunkResult } from "./index";

export type PhotosActionT =
  | {
      type: typeof ADD_PHOTOS;
      photos: ReadonlyArray<ItemT>;
    }
  | { type: typeof FETCH_START }
  | { type: typeof FETCH_ERROR; error: Error };

export const fetchStart = (): PhotosActionT => {
  return {
    type: FETCH_START
  };
};

export const fetchError = (error: Error): PhotosActionT => {
  return {
    type: FETCH_ERROR,
    error
  };
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

export const addPhotos = (photos: ReadonlyArray<ItemT>): PhotosActionT => {
  return {
    type: ADD_PHOTOS,
    photos
  };
};

export const fetchPhotos = (): ThunkResult<void> => {
  return dispatch => {
    Promise.resolve()
      // Uncomment next line when using thunks
      // .then(() => dispatch(fetchStart()))
      .then(fetchData)
      .then(photos => dispatch(addPhotos(photos)))
      .catch(error => dispatch(fetchError(error)));
  };
};
