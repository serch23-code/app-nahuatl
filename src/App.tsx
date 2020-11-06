import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import {Home} from './screens/home';
import {Colores} from "./screens/colores";
import {StorybookScreen} from "./screens/storybook-screen";

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Cerrar menú"
        onPress={() => props.navigation.closeDrawer()}
      />
    </DrawerContentScrollView>
  );
}

function MyDrawer() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"  //Storybook
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      drawerContentOptions={{activeTintColor: 'blue'}}>
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{drawerLabel: 'Home'}}
      />
      <Drawer.Screen name = "colores" component={Colores}/>
      <Drawer.Screen name = "storybook" component = {StorybookScreen}/>
    </Drawer.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}
export default App;
