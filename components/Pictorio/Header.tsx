import React from "react";
import { StyleSheet, View, Text, SafeAreaView } from 'react-native'
import Constants from "expo-constants";

const Header = () => {
  return (
      <SafeAreaView>
        <View style={styles.header}>
          <Text style={styles.headerText}>Photos</Text>
        </View>
      </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    paddingVertical: 10,
    alignItems: "center",
    // paddingTop: Constants.statusBarHeight,
    backgroundColor: 'blue',
  },
  headerText: {
    fontSize: 22
  }
});
