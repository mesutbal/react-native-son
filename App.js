import { createDrawerNavigator, createAppContainer } from 'react-navigation';
import { Dimensions } from 'react-native';
import { InfoScreen, ShareScreen, VideoScreen } from './src/screens/Index';


const Drawer = createDrawerNavigator({
  Video: {
    screen: VideoScreen
  },
  Share: {
    screen: ShareScreen
  },
  Info: {
    screen: InfoScreen
  }
},{
  drawerWidth: Dimensions.get('window').width
});

const App = createAppContainer(Drawer);

export default App;