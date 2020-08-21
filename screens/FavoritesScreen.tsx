import React from "react";
import { StyleSheet, View, Text } from "react-native";

import { useFavorites } from "../store/hooks";
import PhotoList from "../components/Pictorio/PhotoList";

/**
 * Fetch and display random photos
 */
const FavoritesScreen = () => {
  const [favorites] = useFavorites();

  return (
    <View style={styles.container}>
      {favorites.length > 0 ? (
          <PhotoList data={favorites} />
      ) : (
        <View style={{ flex: 1, justifyContent: "center" }}>
          <Text>No favorites yet</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center"
  },
});

export default FavoritesScreen;
