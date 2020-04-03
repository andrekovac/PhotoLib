import React, { useEffect, Dispatch } from "react";
import { StyleSheet, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { PhotosActionT, fetchPhotos } from "../../store/actionCreators/photos";
import { StoreT } from "../../store/reducer";
import { useFavorites } from '../../store/hooks';

import Header from "./Header";
import PhotoList from "./PhotoList";
import { ItemT } from "./Item";

/**
 * Fetch and display random photos
 */
const Favorites = () => {
  const [favorites, toggleFavorites] = useFavorites();

  return (
    <View style={styles.container}>
      <View style={{ alignItems: "center" }}>
        <PhotoList data={favorites} />
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
