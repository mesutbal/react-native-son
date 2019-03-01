import React from 'react';
import { View, StyleSheet, Text } from 'react-native';


export default class  BaslikVeri extends React.Component {
    render() {
        return(<View style={stylesBaslikVeri.veriStyle}>
            <Text style={stylesBaslikVeri.baslikStyle}>{this.props.baslik} :</Text>
            <Text style={stylesBaslikVeri.degerStyle}>{this.props.veri}</Text>
        </View>);
    }
}

stylesBaslikVeri = StyleSheet.create({
    veriStyle: {
        flex: 1,
        flexDirection: 'row',
    },
    baslikStyle: {
        width: '40%'
    },
    degerStyle: {
        width: '60%',
        fontWeight : 'bold'
    }
});