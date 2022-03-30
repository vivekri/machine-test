import React, { Component } from "react";
import { View, Text } from "react-native";

class SelectionCenterList extends Component {
  state = {};
  render() {
    return (
      <View
        style={{
          width: "90%",
          minHeight: 68,
          marginHorizontal: "5%",
          backgroundColor: "#FFFFFF",
          marginTop: 15,
          alignItems: "flex-start",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <View
          style={{
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
            borderRadius: 14,
          }}
        >
          <View
            style={{
              width: "80%",
              justifyContent: "center",
              alignItems: "flex-start",
              flexDirection: "column",
            }}
          >
            <Text
              style={{
                textAlign: "left",
                marginTop: 0,
                color: "#000000",
                fontFamily: "Roboto-Medium",
                fontSize: 14,
              }}
              allowFontScaling={false}
              maxFontSizeMultiplier={1}
            >
              {this.props.heading}
            </Text>

            <Text
              style={{
                textAlign: "left",
                color: "#9A9B9F",
                fontFamily: "Roboto-Regular",
                fontSize: 12,
              }}
              allowFontScaling={false}
              maxFontSizeMultiplier={1}
            >
            {this.props.details}
            </Text>
          </View>

          <View
            style={{
              width: "20%",
              backgroundColor: "#FFFFFF",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {this.props.isSelected ? (
              <View
                style={{
                  width: 18,
                  height: 18,
                  backgroundColor: "#FF7F40",
                  borderRadius: 15,
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "row",
                }}
              >
                <View
                  style={{
                    width: 6,
                    height: 6,
                    backgroundColor: "#FFFFFF",
                    borderRadius: 5,
                  }}
                />
              </View>
            ) : (
              <View
                style={{
                  width: 18,
                  height: 18,
                  backgroundColor: "#FFFFFF",
                  borderRadius: 15,
                  borderWidth: 1,
                  borderColor: "#E0DFE9",
                }}
              />
            )}
          </View>
        </View>

        <View
          style={{
            width: "100%",
            borderBottomColor: "#F1F3F6",
            borderBottomWidth: 1,
            marginTop: 17,
          }}
        />
      </View>
    );
  }
}

export default SelectionCenterList;
