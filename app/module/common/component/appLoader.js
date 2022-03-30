import React from 'react';
import { StyleSheet,ActivityIndicator,View,Platform } from 'react-native';



export default class AppLoader extends React.Component {
    constructor(props) {
        super(props)
       
    }

    async componentDidMount() {
    }

    componentWillUnmount() {
       
    }

    render() {
        return (
             <View style={styles.container}>

                {Platform.OS === 'ios'?<ActivityIndicator/>:<ActivityIndicator color={'gray'}/>}

            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',  
    },

});