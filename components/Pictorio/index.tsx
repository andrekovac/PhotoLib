import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";

import Header from "./Header";
import PhotoList from "./PhotoList";

const Pictorio = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const response = await fetch(
      "https://picsum.photos/v2/list?page=1&limit=100"
    );
    const data = await response.json();
    setData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

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
  header: {
    paddingVertical: 10,
    alignItems: "center"
  },
  headerText: {
    fontSize: 22
  },
  item: {
    marginVertical: 8,
    marginHorizontal: 16
  },
  title: {
    fontSize: 32
  }
});
