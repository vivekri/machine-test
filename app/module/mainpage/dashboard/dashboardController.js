import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {Colors} from '../../../utils/colors';
import * as Responsive from '../../responsive';
import DashBoard from './dashBoard';

export default class DashBoardController extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  async componentDidMount() {}

  componentWillUnmount() {}

  render() {
    return (
      <View styles={styles.container}>
        {Responsive.isMobile() ? <DashBoard /> : <View />}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: Colors.white,
  },
});
