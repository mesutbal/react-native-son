import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import DeviceInfo from 'react-native-device-info';

class InfoScreen extends React.Component {

    componentWillMount() {
        console.log(DeviceInfo.getAPILevel());
    }

    render() {
        return (<ScrollView style={styles.containerStyle}></ScrollView>)
    }

}

styles = StyleSheet.create({
    containerStyle: {
        flex: 1
    }
});

export { InfoScreen };