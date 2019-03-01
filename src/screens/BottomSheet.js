import React from 'react';
import { View, Button } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import RNBottomActionSheet from 'react-native-bottom-action-sheet';


class BottomSheet extends React.Component {



    showAlert(){
        console.log(RNBottomActionSheet);
        let alertView = RNBottomActionSheet.AlertView;
        alertView.Show({
            title: 'React Native',
            message: 'Lütfen seçiminizi yapınız ?',
            positiveText: 'Evet',
            positiveBackgroundColor: 'green',
            positiveTextColor: 'white',
            negativeText: 'Hayır',
            negativeBackgroundColor: 'red',
            negativeTextColor: 'white',
            theme: 'light',
            onPositive: () => {
                console.log('Evet tıklandı!');
            },
            onNegative: () => {
                console.log('Hayır tıklandı!');
            }
        });
    }

    showSheet(){
        let facebook = <Icon family={'FontAwesome'} name={'facebook'} color={'#000000'} size={30} />
        let instagram = <Icon family={'FontAwesome'} name={'instagram'} color={'#000000'} size={30} />

        let SheetView = RNBottomActionSheet.SheetView
        SheetView.Show({
            title: "React Native!",
            items: [
                { title: "Facebook", value: "fb", subTitle: "Facebook Description", icon: facebook },
                { title: "Instagram", value: "insta", subTitle: "Instagram Description", icon: instagram },
            ],
            theme: "light",
            selection: 3,
            onSelection: (index, value) => {
                // value is optional
                console.log("selection: " + index + " " + value);
            }
        });
    }

    showGrid(){
        let facebook = <Icon family={'FontAwesome'} name={'facebook'} color={'#000000'} size={30} />
        let instagram = <Icon family={'FontAwesome'} name={'instagram'} color={'#000000'} size={30} />

        let GridView = RNBottomActionSheet.GridView
            GridView.Show({
                title: "Awesome!",
                items: [
                { title: "Facebook", icon: facebook },
                { title: "Instagram", icon: instagram }
                ],
                theme: 'light',
                onSelection: (index, value) => {
                console.log('selection: ' + index + ' ' + value)
                }
            });
    }

    render() {
        return (<View style={{ flex: 1, backgroundColor: 'purple', padding: 20 }} >
            <Button title="Show Alert" onPress={() => {this.showAlert()}}/>
            <Button title="Show Sheet" onPress={() => {this.showSheet()}}/>
            <Button title="Show Grid" onPress={() => {this.showGrid()}}/>
        </View>)
    }
}

export { BottomSheet };