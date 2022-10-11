import React, { Component } from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";

class Search extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerImage}>
          <Image
            style={styles.red}
            source={{
              uri:
                "https://images.unsplash.com/photo-1633409361618-c73427e4e206?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
            }}
          />
        </View>
        <View style={styles.headerBlockText}>
          <Text style={styles.headertext}>The Merchant Empowering Bank</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    height: 500
  },
  red: {
    color: "red",
    height: "100%",
    width: "100%"
  },
  header: {
    width: "50%"
  },
  headertext: {
    textAlign: "center",
    fontSize: 30
  },
  headerImage: {
    width: "50%"
  },
  headerText: {},
  headerBlockText: {
    top: "45%",
    width: "50%"
  }
});

export default Search;
