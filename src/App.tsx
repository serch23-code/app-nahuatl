import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Home} from './screens/home';
import {Colores} from './screens/colores';
import {StorybookScreen} from './screens/storybook-screen';
import {MenuProvider} from 'react-native-popup-menu';
import {SideBar} from './screens/side-bar';

const Drawer = createDrawerNavigator();


export function App() {
    return (
      <MenuProvider>
        <NavigationContainer>
        <Drawer.Navigator
          initialRouteName="home" // or Storybook (if you want to test the storybook)
          drawerContent={(props) => <SideBar {...props} />}>
          <Drawer.Screen
            name="home"
            component={Home}
          />
          <Drawer.Screen
              name="colores"
              component={Colores}
          />
          <Drawer.Screen
              name="storybook"
              component={StorybookScreen}
          />
        </Drawer.Navigator>
        </NavigationContainer>
      </MenuProvider>
    );
}
export default App;
