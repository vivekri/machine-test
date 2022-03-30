import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';


class Catlog extends Component {
  static navigationOptions = {
    title: 'Catlog',
  };
  componentDidMount() {
    
  }
  render() {
    

    return (
      <View>
        <Text>{'Catlog'}</Text>
      </View>
    );
  }
}

const mapStateToProps = state=> ({});



export default connect(mapStateToProps, {})(Catlog);
