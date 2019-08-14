import React, { Component } from "react";
import { StyleSheet, View, Image } from "react-native";
import {
  Container,
  Header,
  Title,
  Button,
  Left,
  Right,
  Body,
  Picker,
  Icon,
  Text
} from "native-base";
import { Actions } from "react-native-router-flux";
let calc = require("../dimensions/dimension").calcFromPercentage;

export default class Dashboard extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Left />
          <Body>
            <Title>Star Me</Title>
          </Body>
          <Right />
        </Header>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Image source={require("../assets/logo.png")} />
          <Text
            style={{
              fontFamily: "Roboto",
              fontWeight: "600",
              fontSize: calc(5, "width")
            }}
          >
            Welcome to Star Me
          </Text>
        </View>
        <View>
          <Button iconRight rounded warning block style={{ marginTop: 5 }}>
            <Text>Registration</Text>
            <Icon name="person-add" />
          </Button>

          <Button
            iconRight
            rounded
            warning
            block
            style={{ marginTop: 5 }}
            onPress={() => Actions.dashboard()}
          >
            <Text>Search Person</Text>
            <Icon name="people" />
          </Button>
        </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  pickerStyle: {
    width: calc(45, "width"),
    height: calc(9, "height")
  }
});
