import React, {Component} from 'react';

import {View, StyleSheet,} from 'react-native';



import {connect} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

import { Colors } from '../../utils/colors';

class SplashScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      versionDialog: false,
      updateUrl: '',
    };
  }

  async componentDidMount() {
    this.loadData();
  }

  componentWillMount() {
    clearTimeout(this.timeoutHandle);
  }

  async loadData() {
    
  }

  componentWillUnmount() {}

  render() {
    if (this.props.isLoading) {
      return (
        <View
          style={{
            flex: 1,
            padding: 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        />
      );
    }

    return (
      <View style={styles.container}>
        
      </View>
    );
  }
}

const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
  {},
)(function (props) {
  const navigation = useNavigation();

  return <SplashScreen {...props} navigation={navigation} />;
});

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: Colors.white,
  },
  
});
