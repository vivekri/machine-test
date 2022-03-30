import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity, FlatList} from 'react-native';

export default class AlphabeticFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFilterLetter: '',
    };
  }

  async componentDidMount() {}

  componentWillUnmount() {}

  setSelectedLetter(item) {
    console.log('itttt', item);
    let result = [];

    if (this.state.selectedFilterLetter === item && this.state.keyword === '') {
      this.setState({
        selectedFilterLetter: '',
      });
    } else if (
      this.state.selectedFilterLetter === item &&
      this.state.keyword != ''
    ) {
      this.setState({selectedFilterLetter: ''});
    } else {
      this.setState({selectedFilterLetter: item});
    }
    this.props.onClickItem(item);
  }

  render() {
    return (
      <View
        style={{
          width: '95%',
          height: 40,
          marginTop: 30,
          marginLeft: '5%',
        }}>
        <FlatList
          horizontal={true}
          data={this.props.filterByLetter}
          extraData={this.state}
          keyExtractor={(item, index) => index.toString()}
          showsHorizontalScrollIndicator={false}
          renderItem={({item, index}) => (
            <TouchableOpacity
              style={{
                width: 30,
                height: 30,
                borderRadius: 6,
                borderColor: 'transparent',
                backgroundColor:
                  item === this.state.selectedFilterLetter
                    ? '#6E59A0'
                    : '#F1F3F6',
                alignItems: 'center',
                justifyContent: 'center',
                marginLeft: index === 0 ? 10 : 5,
                marginRight: 5,
              }}
              onPress={() => this.setSelectedLetter(item)}>
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: 'Roboto-Regular',
                  letterSpacing: 0,
                  textAlign: 'center',
                  color:
                    item === this.state.selectedFilterLetter
                      ? '#FFFFFF'
                      : '#000000',
                  lineHeight: 24,
                }}
                allowFontScaling={false}
                maxFontSizeMultiplier={1}>
                {item}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    width: '100%',
    height: 59,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
  },
  mainCard: {
    width: '100%',
    height: 59,
    backgroundColor: '#FFFFFF',
    borderColor: '#E0DFE9',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 10,
    borderWidth: 0,
    paddingHorizontal: 20,
    flexDirection: 'row',
  },
  titleStyle: {
    textAlign: 'left',
    fontFamily: 'Roboto-Medium',
    fontSize: 14,
    color: '#000000',
  },
});
