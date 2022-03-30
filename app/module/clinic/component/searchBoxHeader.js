import React from 'react';
import {StyleSheet, View, TouchableOpacity, TextInput} from 'react-native';

import {SearchBarIcon, CloseIcon} from '../../../utils/svgAssests';
export default class SearchBoxHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: '',
    };
  }

  async componentDidMount() {}

  componentWillUnmount() {}

  render() {
    return (
      <View style={styles.containerStyle}>
        <TouchableOpacity
          style={{
            width: '12%',
            height: 40,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          disabled={true}>
          <SearchBarIcon
            width={16}
            height={16}
            color={'#522360'}
            viewbox={'0 0 16 16'}
          />
        </TouchableOpacity>

        <View style={{width: '76%', height: 40}}>
          <TextInput
            placeholder="Search by name"
            placeholderTextColor={'#E0DFE9'}
            secureTextEntry={false}
            value={this.state.keyword}
            returnKeyType="search"
            underlineColorAndroid="transparent"
            onChangeText={value => {
              this.setState({keyword: value}), this.props.searchKey(value);
            }}
            onSubmitEditing={() => this.props.searchKey(this.state.keyword)}
            style={styles.textInputTextStyle}
            maxFontSizeMultiplier={1}
          />
        </View>

        <TouchableOpacity
          style={{
            width: '12%',
            height: 40,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => this.props.onClickCloseSearchBox()}>
          <CloseIcon
            width={12}
            height={12}
            color={'#97979A'}
            viewbox={'0 0 20 20'}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#E0DFE9',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
  },
  textInputTextStyle: {
    width: '100%',
    height: '100%',
    fontSize: 14,
    fontFamily: 'Roboto-Regular',
    letterSpacing: 0.05,
    textAlign: 'left',
    color: '#522360',
    paddingHorizontal: 5,
  },

  toolbarStyle: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    // marginHorizontal: '4%',
  },
  titleStyle: {
    width: '100%',
    fontFamily: 'Roboto-Medium',
    fontSize: 14,
    textAlign: 'center',
    color: '#522360',
  },
});
