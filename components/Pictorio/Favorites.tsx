import React, { useEffect, Dispatch } from "react";
import { StyleSheet, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { PhotosActionT, fetchPhotos } from "../../store/actionCreators/photos";
import { StoreT } from "../../store/reducer";

import Header from "./Header";
import PhotoList from "./PhotoList";
import { ItemT } from "./Item";

/**
 * Fetch and display random photos
 */
const Favorites = () => {
  const dispatch = useDispatch<Dispatch<PhotosActionT>>();

  const data = useSelector<StoreT, ReadonlyArray<ItemT>>(
    state => state.photos.filter(photo => photo.isFavorite)
  );

  return (
    <View style={styles.container}>
      <View style={{ alignItems: "center" }}>
        <PhotoList data={data} />
      </View>
    </View>
  );
};

export default Favorites;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff"
  }
});
