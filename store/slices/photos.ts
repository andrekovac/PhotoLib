import {
  createSlice,
  ThunkAction,
  ThunkDispatch,
  PayloadAction,
  Action,
} from "@reduxjs/toolkit";

import { RootStateT } from "./index";
import { ItemT } from "../../components/Pictorio/Item";


export type PhotosT = ReadonlyArray<ItemT>;
export type AddPhotosAction = PayloadAction<ReadonlyArray<ItemT>>;
export type ToggleFavoritesAction = PayloadAction<string>;
export type PhotosThunkAction = ThunkAction<
Promise<void>,
RootStateT,
undefined,
AddPhotosAction
>;
export type PhotosThunkDispatch = ThunkDispatch<
RootStateT,
undefined,
AddPhotosAction
>;

const initialState: PhotosT = [];

const photosSlice = createSlice({
  name: "photos",
  initialState,
  reducers: {
    addPhotos: (state, { payload }: AddPhotosAction) => {
      state = payload.map((photo) => ({
        ...photo,
        isFavorite: false,
      }));
      return state;
    },
    toggleFavorite: (state, { payload }: ToggleFavoritesAction) => {
      state = state.map((photo) =>
        photo.id === payload
          ? {
              ...photo,
              isFavorite: !photo.isFavorite,
            }
          : photo
      );
      return state;
    },
  },
});

// Two actions generated from the slice
export const { addPhotos, toggleFavorite } = photosSlice.actions;

const fetchData = async (): Promise<PhotosT> => {
  const response = await fetch(
    "https://picsum.photos/v2/list?page=3&limit=100"
  );
  return response.json();
};

export const fetchPhotos = (): PhotosThunkAction => {
  return async (dispatch: PhotosThunkDispatch) => {
    try {
      const photos = await fetchData();
      dispatch(addPhotos(photos));
    } catch (error) {
      console.error("Error fetching photos", error);
    }
  };
};

// A selector
export const photosSelector = (state: RootStateT) => state.photos;
export const favoritesSelector = (state: RootStateT) =>
  state.photos.filter((photo) => photo.isFavorite);

// The reducer
export default photosSlice.reducer;
