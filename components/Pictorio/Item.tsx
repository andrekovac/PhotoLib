import React, {Dispatch} from "react";
import { StyleSheet, Image, TouchableOpacity, Alert } from "react-native";
import { useSelector, useDispatch } from 'react-redux';

import TabBarIcon from "../TabBarIcon";
import { toggleFavorite, FavoriteActionT } from "../../store/actionCreators/photos";

export interface ItemT {
  id: string;
  author: string;
  download_url: string;
  isFavorite: boolean;
}

/**
 * A single image
 */
const Item = ({ id, author, download_url, isFavorite }: ItemT) => {
  const dispatch = useDispatch<Dispatch<FavoriteActionT>>();

  return (
    <TouchableOpacity
      style={styles.item}
      onPress={() => {
        Alert.alert("Author", author, [{ text: "OK" }], { cancelable: false });
      }}
    >
      <Image
        style={{ width: 300, height: 300 }}
        source={{ uri: download_url }}
      />
      <TouchableOpacity
      style={styles.favoriteButton}
        onPress={() => dispatch(toggleFavorite(id))}
      >
        <TabBarIcon name={`md-star${isFavorite ? "" : "-outline"}`} />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default Item;

const styles = StyleSheet.create({
  item: {
    marginVertical: 8,
    marginHorizontal: 16
  },
  favoriteButton: {
    position: "absolute",
    right: 0,
    color: "white",
    padding: 10
  }
});
