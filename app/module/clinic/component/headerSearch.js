import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {
  BackwardIcon,
  SearchBarIcon,
} from '../../../utils/svgAssests';
import SearchBoxHeader from './searchBoxHeader';

export default class HeaderSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowSearchFrame: false,
      regionName: '',
      isOfficeView: false,
      role: '',
    };
  }

  async componentDidMount() {
    // this.state.isOfficeView = await SharedPreferenceManager.SharedPreference.getSharedPreferenceValues(SharedPreferenceManager.view) === 'Office_manager' ? true : false

    // this.state.role = await SharedPreferenceManager.SharedPreference.getSharedPreferenceValues(SharedPreferenceManager.view) === 'Office_manager' ? true : false

    // this.state.regionName = await SharedPreferenceManager.SharedPreference.getSharedPreferenceValues(SharedPreferenceManager.leadership_region_name)
    this.setState({});
  }

  componentWillUnmount() {}

  render() {
    return (
      <View style={styles.containerStyle}>
        <View style={styles.toolbarStyle}>
          <View
            style={{
              width: '15%',
              height: '100%',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <TouchableOpacity
              style={{
                height: 40,
                width: 40,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={() => this.props.onClickBack()}>
              <BackwardIcon width={16} height={16} viewbox={'0 0 16 16'} />
            </TouchableOpacity>
          </View>

          {this.state.isShowSearchFrame === false ? (
            <View
              style={{
                width: '70%',
                height: '100%',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={styles.titleStyle}
                allowFontScaling={false}
                maxFontSizeMultiplier={1}>
                {this.props.toolbarTitle}
              </Text>
              {this.state.isOfficeView && this.state.role ? (
                <Text
                  style={styles.regionStyle}
                  allowFontScaling={false}
                  maxFontSizeMultiplier={1}>
                  {this.state.regionName}
                </Text>
              ) : null}
            </View>
          ) : null}

          {this.state.isShowSearchFrame === false ? (
            <View
              style={{
                width: '15%',
                height: '100%',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <TouchableOpacity
                style={{
                  height: 40,
                  width: 40,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                onPress={() => this.setState({isShowSearchFrame: true})}>
                <SearchBarIcon
                  width={16}
                  height={16}
                  color={'#522360'}
                  viewbox={'0 0 16 16'}
                />
              </TouchableOpacity>
            </View>
          ) : null}

          {this.state.isShowSearchFrame === true ? (
            <View
              style={{
                width: '85%',
                height: '100%',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <View
                style={{
                  width: '95%',
                  height: '100%',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: '5%',
                }}>
                <SearchBoxHeader
                  //  clearSearch={()=>this.props.clearSearch}
                  //  clearSearchBox={()=>this.props.clearSearchBox}
                  searchKey={value => this.props.searchKey(value)}
                  onClickCloseSearchBox={() => {
                    this.setState({isShowSearchFrame: false}),
                      this.props.onClickCloseSearchBox();
                  }}
                />
              </View>
            </View>
          ) : null}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    width: '100%',
    height: 57,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
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
  regionStyle: {
    width: '100%',
    fontFamily: 'Roboto-Regular',
    fontSize: 12,
    textAlign: 'center',
    color: '#989899',
  },
});
