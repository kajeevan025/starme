/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from "react";
import { Platform, StyleSheet } from "react-native";
import { Router, Scene } from "react-native-router-flux";
import Dashboard from "./home/dashboard";
import ListOfItems from "./deatils/listOfItems";
import OnBoard from "./onboard/onBoard";
let calc = require("./dimensions/dimension").calcFromPercentage;

export default class App extends Component {
  render() {
    return (
      <Router
        sceneStyle={{ backgroundColor: "#F7F7F7" }}
        navigationBarStyle={styles.navBar}
        titleStyle={styles.navBarTitle}
        barButtonTextStyle={styles.barButtonTextStyle}
        barButtonIconStyle={styles.barButtonIconStyle}
      >
        <Scene key="root">
          <Scene
            key="onboard"
            duration={1}
            component={OnBoard}
            initial={true}
            hideNavBar={true}
          />
          <Scene
            key="dashboard"
            duration={1}
            component={Dashboard}
            hideNavBar={true}
          />
          <Scene
            key="ListOfItems"
            duration={1}
            component={ListOfItems}
            hideNavBar={true}
          />
        </Scene>
      </Router>
    );
  }
}

const styles = StyleSheet.create({
  navBar: {
    ...Platform.select({
      ios: {
        height: 50
      },
      android: {
        height: 50
      }
    }),
    backgroundColor: "#484547",
    borderColor: "transparent"
  },
  navBarTitle: {
    color: "#FFFFFF",

    fontSize: 15
  },
  barButtonTextStyle: {
    color: "#FFFFFF"
  },
  barButtonIconStyle: {
    tintColor: "rgb(255,255,255)"
  },
  container: {
    flex: 1,
    width: null,
    height: null
  },
  wrapper: {
    borderRadius: 5,
    marginBottom: 5
  },
  rightButton: {
    width: 100,
    height: 37,
    position: "absolute",
    ...Platform.select({
      ios: {
        top: 22
      },
      android: {
        top: 10
      }
    }),
    right: 2,
    padding: 8
  },
  logo: {
    width: calc(40, "width"),
    height: calc(5, "height")
  },
  leftButton: {
    width: 100,
    height: 37,
    position: "absolute",
    ...Platform.select({
      ios: {
        top: 20
      },
      android: {
        top: 8
      }
    }),
    left: 2,
    padding: 8
  },
  textStyle: { color: "#00C497" }
});
