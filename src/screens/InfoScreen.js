import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import DeviceInfo from 'react-native-device-info';
import BaslikVeri from '../components/BaslikVeri';

class InfoScreen extends React.Component {

    state = {
        batteryLevel : 0,
        macAddress: '',
        ipAddress: '',
        airplane: false
    }

    componentWillMount() {
        DeviceInfo.getBatteryLevel().then(batteryLevel => {
            console.log(batteryLevel);
            this.setState({batteryLevel: batteryLevel*100});
        });
        DeviceInfo.getMACAddress().then(macAddress => {
            console.log(macAddress);
            this.setState({macAddress});
        });
        DeviceInfo.getIPAddress().then(ipAddress => {
            console.log(ipAddress);
            this.setState({ipAddress});
        });
        DeviceInfo.isAirPlaneMode().then(airplane => {
            console.log(airplane);
            this.setState({airplane});
        });
    }

    boolToString(deger) {
        if (deger) {
            return 'TRUE';
        }
        return 'FALSE';
    }

    render() {
        return (
        <ScrollView style={styles.containerStyle}>
            <BaslikVeri baslik="API Level" veri={DeviceInfo.getAPILevel()}/>
            <BaslikVeri baslik="Application Name" veri={DeviceInfo.getApplicationName()}/>
            <BaslikVeri baslik="Battery Level" veri={this.state.batteryLevel}/>
            <BaslikVeri baslik="Brand" veri={DeviceInfo.getBrand()}/>
            <BaslikVeri baslik="Build Number" veri={DeviceInfo.getBuildNumber()}/>
            <BaslikVeri baslik="Bundle Id" veri={DeviceInfo.getBundleId()}/>
            <BaslikVeri baslik="Carrier" veri={DeviceInfo.getCarrier()}/>
            <BaslikVeri baslik="Device Country" veri={DeviceInfo.getDeviceCountry()}/>
            <BaslikVeri baslik="Device Id" veri={DeviceInfo.getDeviceId()}/>
            <BaslikVeri baslik="Device Locale" veri={DeviceInfo.getDeviceLocale()}/>
            <BaslikVeri baslik="Device Name" veri={DeviceInfo.getDeviceName()}/>
            <BaslikVeri baslik="Mac Address" veri={this.state.macAddress}/>
            <BaslikVeri baslik="Ip Address" veri={this.state.ipAddress}/>
            <BaslikVeri baslik="Phone Number" veri={DeviceInfo.getPhoneNumber()}/>
            <BaslikVeri baslik="Serial Number" veri={DeviceInfo.getSerialNumber()}/>
            <BaslikVeri baslik="Emulator" veri={this.boolToString(DeviceInfo.isEmulator())}/>
            <BaslikVeri baslik="Tablet" veri={this.boolToString(DeviceInfo.isTablet())}/>
            <BaslikVeri baslik="Landscape" veri={this.boolToString(DeviceInfo.isLandscape())}/>
            <BaslikVeri baslik="Device Type" veri={DeviceInfo.getDeviceName()}/>
            <BaslikVeri baslik="Air Plane Mode" veri={this.boolToString(this.state.airplane)}/>

        </ScrollView>)
    }

}

styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        flexDirection: 'column',
        padding: 20
    },
    baslikMainStyle: {
        backgroundColor : 'yellow',
        padding: 20
    }

});

export { InfoScreen };