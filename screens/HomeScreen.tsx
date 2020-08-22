import React, { useEffect, Dispatch } from "react";
import { StyleSheet, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { fetchPhotos, photosSelector } from "../store/slices/photos";

import PhotoList from "../components/Pictorio/PhotoList";
import { RootStateT } from "../store/slices";
import { ItemT } from "../components/Pictorio/Item";

/**
 * Fetch and display random photos
 */
const HomeScreen = () => {
  const dispatch = useDispatch<Dispatch<any>>();

  useEffect(() => {
    dispatch(fetchPhotos());
  }, []);

  const data = useSelector<RootStateT, ReadonlyArray<ItemT>>(photosSelector);

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
