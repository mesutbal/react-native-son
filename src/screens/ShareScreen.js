import React from 'react';
import { View, Button, Share } from 'react-native';

class ShareScreen extends React.Component {

    onShare = () => {
        try {
          const result = Share.share({
            message:
              'React Native Eğitim | Deneme Mesajı Gönder',
          })
    
          if (result.action === Share.sharedAction) {
            if (result.activityType) {
              // shared with activity type of result.activityType
            } else {
              // shared
            }
          } else if (result.action === Share.dismissedAction) {
            // dismissed
          }
        } catch (error) {
          alert(error.message);
        }
      };


    render() {
        return (
        <View style={{ flex:1 , backgroundColor:'yellow', padding: 20 }}>
            <Button title="Paylaş" onPress={this.onShare}></Button>
        </View>)
    }
}

export { ShareScreen };
