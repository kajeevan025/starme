import Dimensions from "Dimensions";

var { height, width } = Dimensions.get("window");

module.exports = {
  calcFromPercentage: function(percentage: number, dimension: string): number {
    return dimension == "width"
      ? (percentage * width) / 100
      : (percentage * height) / 100;
  }
};
