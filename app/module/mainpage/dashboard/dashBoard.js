import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import {connect} from 'react-redux';
import Home from './home';
import {showMessage, hideMessage} from 'react-native-flash-message';

class DashBoard extends Component {
  static navigationOptions = {
    title: 'DashBoard',
  };
  componentDidMount() {}

  render() {
    // showMessage({
    //   message: "Hello World",
    //   description: "This is our second message",
    //   type: "success",
    // });

    var button = <Button
          onPress={() => {
            /* HERE WE GONE SHOW OUR FIRST MESSAGE */
            showMessage({
              message: 'Simple message',
              type: 'info',
            });
          }}
          title="Request Details"
          color="#841584"
        />
    return (
      <View>
        
        {/* <Profile /> */}
        <Home />
      </View>
    );
  }
}

const mapStateToProps = ({}) => ({});

export default connect(mapStateToProps,{})(DashBoard);
