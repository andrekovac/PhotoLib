import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";

import Item, { ItemT } from "./Item";

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
