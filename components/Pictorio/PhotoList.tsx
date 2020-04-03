import React, { useEffect, Dispatch } from "react";
import { FlatList } from "react-native";
import { useDispatch, useSelector } from 'react-redux';

import Item, { ItemT } from "./Item";

import { fetchPhotos, PhotosActionT } from "../../store/actionCreators/photos";
import { StoreT } from "../../store/reducer";

const Pictorio = () => {
  const dispatch = useDispatch<Dispatch<PhotosActionT>>();

  useEffect(() => {
    dispatch(fetchPhotos())
  }, []);

  return (
    <FlatList
      data={useSelector<StoreT, ReadonlyArray<ItemT>>(state => state.photos)}
      renderItem={({ item }: { item: ItemT }) => (
        <Item author={item.author} download_url={item.download_url} />
      )}
      keyExtractor={(item: ItemT, key) => item.id || key.toString()}
    />
  );
};

export default Pictorio;
