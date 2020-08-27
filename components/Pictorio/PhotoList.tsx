import React, { FunctionComponent } from "react";
import { FlatList } from "react-native";

import Item, { ItemT } from "./Item";

interface PropsT {
  data: ReadonlyArray<ItemT>,
}

const PhotoList: FunctionComponent<PropsT> = ({ data }) => {
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
