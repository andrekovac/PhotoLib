import { Ionicons } from "@expo/vector-icons";
import * as React from "react";

import Colors from "../constants/Colors";

type TabBarPropsT = {
  name: string;
  focused?: boolean;
  isFavoritesIcon?: boolean;
};

export default function TabBarIcon({
  name,
  focused,
  isFavoritesIcon,
}: TabBarPropsT) {
  return (
    <Ionicons
      name={name}
      size={30}
      style={{ marginBottom: -3 }}
      color={focused ? Colors.tabIconSelected : (isFavoritesIcon ? "white" : Colors.tabIconDefault)}
    />
  );
}
