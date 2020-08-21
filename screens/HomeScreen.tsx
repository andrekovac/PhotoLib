import React, { useEffect, Dispatch } from "react";
import { StyleSheet, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { PhotosActionT, fetchPhotos } from "../store/actionCreators/photos";
import { StoreT } from "../store/reducer";

import PhotoList from "../components/Pictorio/PhotoList";
import { ItemT } from "../components/Pictorio/Item";

/**
 * Fetch and display random photos
 */
const HomeScreen = () => {
  const dispatch = useDispatch<Dispatch<PhotosActionT>>();

  useEffect(() => {
    dispatch(fetchPhotos());
  }, []);

  const data = useSelector<StoreT, ReadonlyArray<ItemT>>(
    (state) => state.photos
  );

  return (
    <View style={styles.container}>
      <View style={{ alignItems: "center" }}>
        <PhotoList data={data} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
});

export default HomeScreen;
