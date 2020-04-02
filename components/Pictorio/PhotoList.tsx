import React, { useEffect, useState } from "react";
import { StyleSheet, FlatList } from "react-native";

import Item from "./Item";

interface ItemT {
  id?: string;
  author: string;
  download_url: string;
}

// // Alternative:
// fetch('https://picsum.photos/v2/list?page=1&limit=100')
//   .then(response => response.json())
//   .then(data => setData(data));

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
    <FlatList
      data={data}
      renderItem={({ item }: { item: ItemT }) => (
        <Item author={item.author} download_url={item.download_url} />
      )}
      keyExtractor={(item: ItemT, key) => item.id || key.toString()}
    />
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
