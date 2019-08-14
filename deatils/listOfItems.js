import React, { Component } from "react";
import { Image, Modal, View } from "react-native";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Title,
  Right
} from "native-base";
import { Row, Col } from "react-native-easy-grid";
import { Actions } from "react-native-router-flux";
const items = [
  {
    id: 200,
    name: "Raju",
    occupation: "Barber",
    name_of_business: "Ravi New Look Saloon",
    address: "Shop No. 27, 4th Cross,Malleshwaram Bangalore-565001",
    time: "9:30 AM to 8:00 PM",
    phone: "9876543210",
    email: "ravisaloon@gmail.com",
    profile_pic: "base64Image",
    rate: [1, 2, 3, 4]
  },
  {
    id: 201,
    name: "Arun",
    occupation: "Barber",
    name_of_business: "Arun Saloon",
    address: "5th Cross,Centrall Park,Malleshwaram Bangalore-565001",
    time: "7:30 AM to 8:30 PM",
    phone: "789012345",
    email: "arunsaloon@gmail.com",
    profile_pic: "base64Image",
    rate: [1, 2, 3]
  },
  {
    id: 202,
    name: "Jeevan",
    occupation: "Barber",
    name_of_business: "G1 Saloon",
    address: "Sony signal,Malleshwaram Bangalore-565001",
    time: "9:30 AM to 8:00 PM",
    phone: "7685940321",
    email: "jeevsaloon@gmail.com",
    profile_pic: "base64Image",
    rate: [1]
  },
  {
    id: 203,
    name: "Sunu",
    occupation: "Barber",
    name_of_business: "Sunnu Styles for Men",
    address: "6th Cross,BDA complex,Malleshwaram Bangalore-565001",
    time: "6:30 AM to 8:00 PM",
    phone: "1234567890",
    email: "sunu@gmail.com",
    profile_pic: "base64Image",
    rate: [1, 2, 3, 4]
  }
];

const ItemList = ({ item, conditon, onStarClick }) => {
  return (
    <Card style={{ flex: 0 }}>
      <CardItem>
        <Left>
          <Thumbnail
            source={
              conditon
                ? require("../assets/user1.png")
                : require("../assets/user2.jpg")
            }
          />
          <Body>
            <Text>{item.name}</Text>
            <Text note style={{ color: "#000000" }}>
              {item.phone}, {item.email}
            </Text>
          </Body>
        </Left>
      </CardItem>
      <CardItem>
        <Body>
          <Row>
            <Col>
              <Image
                source={
                  conditon
                    ? require("../assets/user1.png")
                    : require("../assets/user2.jpg")
                }
                style={{ height: 100, width: 100, flex: 1 }}
              />
            </Col>
            <Col>
              <Text>{item.occupation}</Text>
              <Text>{item.name_of_business}</Text>
              <Text>{item.address}</Text>
            </Col>
          </Row>
        </Body>
      </CardItem>
      <CardItem>
        <Left>
          <Button transparent textStyle={{ color: "#87838B" }}>
            <Icon name="time" style={{ color: "#000" }} />
            <Text style={{ color: "#000" }}>{item.time}</Text>
          </Button>
          <Button
            transparent
            textStyle={{ color: "#87838B" }}
            onPress={onStarClick}
          >
            {item.rate.map(i => (
              <Icon key={i} name="star" style={{ color: "#FFDF00" }} />
            ))}
            <Text style={{ color: "#FFDF00" }}>{item.rate.length}</Text>
          </Button>
        </Left>
      </CardItem>
    </Card>
  );
};
export default class CardShowcaseExample extends Component {
  state = {
    modalVisible: false,
    item: undefined
  };

  setModalVisible(visible, item) {
    this.setState({
      modalVisible: visible,
      item: item
    });
  }
  render() {
    let { item } = this.state;
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={() => Actions.pop()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>{this.props.header}</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          {items.map((i, index) => {
            return (
              <ItemList
                item={i}
                key={index}
                conditon={index % 2 == 0}
                onStarClick={() => this.setModalVisible(true, i)}
              />
            );
          })}
          <Modal
            animationType="slide"
            transparent={false}
            visible={this.state.modalVisible}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
            }}
          >
            <Header>
              <Left />
              <Body>
                <Title>Rate a Person</Title>
              </Body>
              <Right>
                <Button transparent onPress={() => this.setModalVisible(false)}>
                  <Icon name="close" />
                </Button>
              </Right>
            </Header>
            <Card>
              <CardItem>
                <Left>
                  <Thumbnail source={require("../assets/user1.png")} />
                  <Body>
                    <Text>{item && item.name}</Text>
                    <Text note>
                      {item && item.phone}, {item && item.email}
                    </Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem
                cardBody
                style={{
                  justifyContent: "center"
                }}
              >
                <Image
                  source={require("../assets/user1.png")}
                  style={{
                    height: 100,
                    width: 100,
                    flex: 1,
                    resizeMode: "contain"
                  }}
                />
              </CardItem>
              <CardItem
                style={{
                  justifyContent: "center"
                }}
              >
                {[1, 2, 3, 4, 5].map(i => (
                  <Button key={i} transparent>
                    <Icon active name="star" style={{ color: "#000000" }} />
                  </Button>
                ))}
              </CardItem>
            </Card>
          </Modal>
        </Content>
      </Container>
    );
  }
}
