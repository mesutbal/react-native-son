import React from 'react';
import { View, StyleSheet } from 'react-native';
import VideoPlayer from 'react-native-video-controls';


class VideoScreen extends React.Component {
    onLoad() {
        console.log('onLoad');
    }

    render() {
        return (<View style={{ flex: 1 }}>
            <VideoPlayer
                style={styles.backgroundVideo}
                source={{ uri: 'http://techslides.com/demos/sample-videos/small.mp4' }} 
            />
        </View>);
    }
}

const styles = StyleSheet.create({
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom:0
    }
});

export { VideoScreen };
