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
const cities = [
  {
    id: 1,
    label: "Bagalkot",
    value: 1
  },
  {
    id: 2,
    label: "Ballari",
    value: 2
  },
  {
    id: 3,
    label: "Belagavi",
    value: 3
  },
  {
    id: 4,
    label: "Bengaluru",
    value: 4
  },
  {
    id: 5,
    label: "Mangalore",
    value: 5
  }
];

const location = [
  {
    id: 1,
    name: "Hebbal"
  },
  {
    id: 2,
    name: "Koramangala"
  },
  {
    id: 3,
    name: "Malleswaram"
  },
  {
    id: 4,
    name: "Marathahalli"
  },
  {
    id: 5,
    name: "Indira Nagar"
  }
];

const type_of_business = [
  {
    id: 1,
    name: "Food"
  },
  {
    id: 2,
    name: "Company"
  },
  {
    id: 3,
    name: "Health Care"
  },
  {
    id: 4,
    name: "Industry"
  },
  {
    id: 5,
    name: "Parlour"
  },
  {
    id: 6,
    name: "Normal Venders"
  }
];

export default class Dashboard extends Component {
  state = {
    cityList: null,
    cityId: undefined,
    locationList: undefined,
    locationId: undefined,
    type_of_businessList: undefined,
    tobId: undefined,
    message: undefined
  };
  async componentDidMount() {
    let allCities = await this.getAllCities();
    let allLocations = await this.getAllLocations();
    let allTypeOfBusiness = await this.getAllTypeOfBusiness();
    this.setState({
      cityList: allCities,
      locationList: allLocations,
      type_of_businessList: allTypeOfBusiness
    });
  }
  getAllCities = () => {
    return cities;
  };
  getAllLocations = () => {
    return location;
  };
  getAllTypeOfBusiness = () => {
    return type_of_business;
  };
  onCitySelected = cityId => {
    this.setState({
      cityId: cityId
    });
  };

  onLocationSelected = locationId => {
    this.setState({
      locationId: locationId
    });
  };
  onTOBSelected = tobId => {
    this.setState({
      tobId: tobId
    });
  };

  onSearch = () => {
    let { cityId, locationId, tobId } = this.state;
    if (cityId === 4 && locationId === 3 && tobId === 5) {
      this.setState({
        message: undefined
      });
      Actions.ListOfItems({ header: "List of Barber" });
    } else {
      this.setState({
        message: "No results"
      });
    }
  };

  onReset = () => {
    this.setState({
      cityId: undefined,
      locationId: undefined,
      tobId: undefined
    });
  };
  render() {
    let {
      cityList,
      locationList,
      type_of_businessList,
      cityId,
      locationId,
      tobId,
      message
    } = this.state;
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={() => Actions.pop()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
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
            Check the rating of people
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 5,
            marginTop: calc(2, "height")
          }}
        >
          <Picker
            mode="dropdown"
            iosHeader="Select City"
            placeholder="Select City"
            placeholderStyle={{ color: "#000000" }}
            placeholderIconColor="#e5e5e5"
            iosIcon={<Icon name="arrow-down" />}
            style={{
              borderWidth: 2,
              borderColor: "#000"
            }}
            selectedValue={this.state.cityId}
            onValueChange={this.onCitySelected}
          >
            {cityList &&
              cityList.map((item, index) => (
                <Picker.Item
                  key={index}
                  label={item.label}
                  value={item.value}
                />
              ))}
          </Picker>
          <Picker
            mode="dropdown"
            iosHeader="Select Location"
            placeholder="Select Location"
            placeholderStyle={{ color: "#000000" }}
            placeholderIconColor="#e5e5e5"
            iosIcon={<Icon name="arrow-down" />}
            style={{
              borderWidth: 2,
              borderColor: "#000"
            }}
            selectedValue={this.state.locationId}
            onValueChange={this.onLocationSelected}
          >
            {locationList &&
              locationList.map((item, index) => (
                <Picker.Item key={index} label={item.name} value={item.id} />
              ))}
          </Picker>
        </View>
        <View
          style={{
            flexDirection: "row",
            padding: 5
          }}
        >
          <Picker
            mode="dropdown"
            iosHeader="Select Type Of Business"
            placeholder="Select Type Of Business"
            placeholderStyle={{ color: "#000000" }}
            placeholderIconColor="#e5e5e5"
            iosIcon={<Icon name="arrow-down" />}
            style={{
              borderWidth: 2,
              borderColor: "#000",
              width: calc(98, "width")
            }}
            selectedValue={this.state.tobId}
            onValueChange={this.onTOBSelected}
          >
            {type_of_businessList &&
              type_of_businessList.map((item, index) => (
                <Picker.Item key={index} label={item.name} value={item.id} />
              ))}
          </Picker>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 5
          }}
        >
          {cityId && locationId && tobId && (
            <Button iconRight rounded warning onPress={() => this.onReset()}>
              <Text>Reset</Text>
              <Icon name="refresh" />
            </Button>
          )}
          {cityId && locationId && tobId && (
            <Button iconRight rounded warning onPress={() => this.onSearch()}>
              <Text>Search</Text>
              <Icon name="search" />
            </Button>
          )}
        </View>
        {message && (
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              padding: 10
            }}
          >
            <Icon name="jet" style={{ color: "#B22222", fontSize: 20 }} />
            <Text style={{ color: "#B22222", fontSize: 18 }}> {message} </Text>
            <Icon name="jet" style={{ color: "#B22222", fontSize: 20 }} />
          </View>
        )}
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
