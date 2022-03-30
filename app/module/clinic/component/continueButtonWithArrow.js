import React, { Component } from "react";
import { View, TouchableOpacity, Text } from "react-native";

import { FrontArrowIcon } from "../../../utils/svgAssests";

class ContinueButtonWithArrow extends Component {
  state = {};
  render() {
    return (
      
        <View
          style={{
            width: "100%",
            height:92,
            backgroundColor: '#F1F3F6',
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
            borderRadius: 0,
          }}
        >
          <TouchableOpacity
            style={{
              width: "50%",
              height: 40,
              borderRadius: 24,
              borderColor: "transparent",
              backgroundColor: this.state.showAllCenter
                ? "transparent"
                : "#532E6E",
              alignItems: "center",
              justifyContent: "center",
              marginHorizontal: "11%",
              marginTop: 0,
              flexDirection:'row'
            }}
            disabled={false}
            onPress={() => {this.props.onPressContinue()}}
          >
            <Text
              style={{
                fontFamily: "Roboto-Medium",
                fontSize: 14,
                textAlign: "center",
                color: "#FFFFFF",
                lineHeight: 24,
              }}
              allowFontScaling={false}
              maxFontSizeMultiplier={1}
            >
              {" "}
              Continue{" "}
            </Text>
            <View
                style={{
                    width:20
                }}
            />

            <FrontArrowIcon
            width={11}
            height={11}
            color={"#FFFFFF"}
            viewbox={"0 0 11 11"}
          />
          </TouchableOpacity>
        </View>
      
    );
  }
}

export default ContinueButtonWithArrow;
