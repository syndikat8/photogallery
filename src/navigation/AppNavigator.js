import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import PhotoScreen from '../screens/PhotoScreen/PhotoScreen';
import ClientsScreen from '../screens/ClientScreen/ClientsScreen';

const Main = createStackNavigator({
  Cleints: {
    screen: ClientsScreen,
    navigationOptions: {
      title: 'Main',
      headerStyle: {
        backgroundColor: '#6A5ACD',
      },
    },
  },
  Photo: {
    screen: PhotoScreen,
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#6A5ACD',
      },
    },
  },
});

export default AppNavigator = createAppContainer(Main);
