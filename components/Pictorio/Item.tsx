import React from "react";
import { StyleSheet, Image, TouchableOpacity, Alert } from "react-native";

import TabBarIcon from "../TabBarIcon";
import { useFavorites } from "../../store/hooks";

export type ItemT = {
  id: string;
  author: string;
  download_url: string;
  isFavorite: boolean;
}

/**
 * A single image
 */
const Item = ({ id, author, download_url, isFavorite }: ItemT) => {
  const [_, toggleFavorites] = useFavorites();

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
        onPress={() => toggleFavorites(id)}
      >
        <TabBarIcon name={`md-star${isFavorite ? "" : "-outline"}`} isFavoritesIcon />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default Item;

const styles = StyleSheet.create({
  item: {
    marginVertical: 8,
    marginHorizontal: 16,
  },
  favoriteButton: {
    position: "absolute",
    right: 0,
    padding: 10,
  },
});
