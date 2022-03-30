import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {NoDataIcon} from '../../../utils/svgAssests';

export default class NoData extends React.Component {
  constructor(props) {
    super(props);
  }

  async componentDidMount() {}

  componentWillUnmount() {}

  render() {
    return (
      <View style={styles.containerStyle}>
        <NoDataIcon width={57} height={55} viewbox={'0 0 57 55'} />

        <Text
          style={styles.sorryText}
          allowFontScaling={false}
          maxFontSizeMultiplier={1}>
          Sorry
        </Text>

        <Text
          style={styles.messageStyle}
          allowFontScaling={false}
          maxFontSizeMultiplier={1}>
          No content to display!
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    width: '100%',
    height: '100%',
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },

  sorryText: {
    width: '100%',
    fontFamily: 'Roboto-Bold',
    fontSize: 16,
    textAlign: 'center',
    color: '#6E59A0',
    marginTop: 15,
  },
  messageStyle: {
    width: '100%',
    fontFamily: 'Roboto-Regular',
    fontSize: 12,
    textAlign: 'center',
    color: '#000000',
    marginTop: 5,
  },
});
