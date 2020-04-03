import { useDispatch, useSelector } from "react-redux";

import { ItemT } from "../components/Pictorio/Item";

import { StoreT } from "./reducer";
import { toggleFavorite } from "./actionCreators/photos";

export const useFavorites = () => {
  const dispatch = useDispatch();

  const favorites = useSelector<StoreT, ReadonlyArray<ItemT>>(state =>
    state.photos.filter(photo => photo.isFavorite)
  );
  const setToggleFavorite = (id: string) => dispatch(toggleFavorite(id));

  return [favorites, setToggleFavorite];
};
