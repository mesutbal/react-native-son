import { createDrawerNavigator, createAppContainer } from 'react-navigation';
import { Dimensions } from 'react-native';
import { InfoScreen } from './src/screens/Index';


const Drawer = createDrawerNavigator({
  Info: {
    screen: InfoScreen
  }
},{
  drawerWidth: Dimensions.get('window').width
});

const App = createAppContainer(Drawer);

export default App;