// import * as React from 'react';
// import {SafeAreaView, TouchableOpacity, Text, View} from "react-native";
// import {NavigationActions,} from "react-navigation";
// import {Colores} from "../screens/colores";
// import {DrawerContentScrollView, DrawerItem} from "@react-navigation/drawer";
//
// export class Sidebar extends React.Component<any, {}>{
//     render() {
//         return (
//            <SafeAreaView style={{flex:1}}>
//              <DrawerContentScrollView {...(this.props)}>
//                  <View>
//                      <Text>Main Content</Text>
//                  </View>
//              </DrawerContentScrollView>
//            </SafeAreaView>
//         );
//     }
//
//     private navigateToScreen(route:any){
//         const navigateAction = NavigationActions.navigate({routeName: route})
//         this.props.navigation.dispatch(navigateAction)
//         this.props.navigation.closeDrawer()
//     }
// }
