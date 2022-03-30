import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {connect} from 'react-redux';



class Home extends Component {
  static navigationOptions = {
    title: 'Home',
  };

  componentDidMount() {
    
  }

  
  render() {
    
    return (
      <View>
        <Text>{'Home'}</Text>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  
});


const mapStateToProps = state => ({});

export default connect(mapStateToProps, {})(Home);
