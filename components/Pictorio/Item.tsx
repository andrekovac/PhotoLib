import React from "react";
import {
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert
} from "react-native";

export interface ItemT {
  id?: string;
  author: string;
  download_url: string;
}

/**
 * A single image
 */
const Item = ({ author, download_url }: ItemT) => {
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
    </TouchableOpacity>
  );
};

export default Item;

const styles = StyleSheet.create({
  item: {
    marginVertical: 8,
    marginHorizontal: 16
  },
});
