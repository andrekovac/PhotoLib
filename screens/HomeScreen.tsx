import React, { useEffect, Dispatch } from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { fetchPhotos, photosSelector, PhotosT } from "../store/slices/photos";

import PhotoList from "../components/Pictorio/PhotoList";
import { RootStateT } from "../store/slices";

/**
 * Fetch and display random photos
 */
const HomeScreen = () => {
  const dispatch = useDispatch<Dispatch<any>>();

  useEffect(() => {
    dispatch(fetchPhotos());
  }, []);

  const { data, isLoading } = useSelector<RootStateT, PhotosT>(photosSelector);

  return isLoading ? (
    <View style={styles.centered}>
      <ActivityIndicator size="large" />
    </View>
  ) : (
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
  centered: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default HomeScreen;
