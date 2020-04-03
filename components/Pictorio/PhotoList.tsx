import React from "react";
import { FlatList } from "react-native";

import Item, { ItemT } from "./Item";

interface PropsT {
  data: ReadonlyArray<any>,
}

const PhotoList = ({ data }: PropsT) => {
  return (
    <FlatList
      data={data}
      renderItem={({ item }: { item: ItemT }) => (
        <Item
          id={item.id}
          author={item.author}
          download_url={item.download_url}
          isFavorite={item.isFavorite}
        />
      )}
      keyExtractor={(item: ItemT, key) => item.id || key.toString()}
    />
  );
};

export default PhotoList;
