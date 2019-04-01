import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

class SettingsScreen extends Component{
    render() {
        return (
            <View styles={style.container}>
                <Text>Settings Screen</Text>
            </View>
        );
    }
}
export default SettingsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center'
    }
})