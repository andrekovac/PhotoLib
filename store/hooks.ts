import { useDispatch, useSelector } from "react-redux";

import { RootStateT } from "./slices/index";
import {
  favoritesSelector,
  toggleFavorite as toggleFavoriteAction,
  ToggleFavoritesAction,
  PhotosT,
} from "./slices/photos";

export const useFavorites = (): [PhotosT, (id: string) => ToggleFavoritesAction] => {
  const dispatch = useDispatch();

  const favorites = useSelector<RootStateT, PhotosT>(favoritesSelector);
  const toggleFavorite = (id: string) => dispatch(toggleFavoriteAction(id));

  return [favorites, toggleFavorite];
};
