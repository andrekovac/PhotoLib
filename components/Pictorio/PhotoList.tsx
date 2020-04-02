import React, { useEffect, useState, Dispatch } from "react";
import { StyleSheet, FlatList } from "react-native";
import { useDispatch, useSelector } from 'react-redux';

import { fetchPhotos, PhotosActionT } from "../../store/actionCreators/photos";

import Item from "./Item";
import { StoreT } from "../../store/reducer";

interface ItemT {
  id?: string;
  author: string;
  download_url: string;
}

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

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff"
  },
  header: {
    paddingVertical: 10,
    alignItems: "center"
  },
  headerText: {
    fontSize: 22
  },
  item: {
    marginVertical: 8,
    marginHorizontal: 16
  },
  title: {
    fontSize: 32
  }
});
