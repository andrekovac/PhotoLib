import React from "react";
import { StyleSheet, View } from "react-native";

import Header from "./Header";
import PhotoList from "./PhotoList";

/**
 * Fetch and display random photos
 */
const Pictorio = () => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={{ alignItems: "center" }}>
        <PhotoList />
      </View>
    </View>
  );
};

export default Pictorio;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff"
  },
});
