import React, {Component} from 'react';
import {View,Text} from 'react-native';
import {connect} from 'react-redux';


class Profile extends Component {
  static navigationOptions = {
    title: 'Profile',
  };
  componentDidMount() {
    
  }

  render() {
    
    
    return (
      <View>
        <Text>{'Profile'}</Text>
      </View>
    );
  }
}

const mapStateToProps = state =>({});



export default connect(mapStateToProps, {})(Profile);
