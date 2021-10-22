import * as React from 'react';
import {ScrollView, StyleSheet, TouchableOpacity} from 'react-native';
import {Text} from 'native-base';

type DrawerOptionsType = 'colores';

interface Option {
  readonly label: string;
  readonly id: DrawerOptionsType;
}

const MENU_OPTIONS: Option[] = [
  {
    id: 'colores',
    label: 'Colores'
  }
];

export function SideBar({navigation}) {
  const navigateToScreen = (screenToNavigate:string) => {
    navigation.navigate(screenToNavigate)
  };
  return (
    <ScrollView>
      {MENU_OPTIONS.map((option, index) => {
        return (
          <TouchableOpacity
            style={styles.button}
            key={index}
            onPress={() => navigateToScreen(option.id)}>
            <Text uppercase style={styles.title}>
              {option.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  button: {
    marginBottom: 10,
    backgroundColor: 'blue'
  },
  title: {
    fontSize: 16,
    marginVertical: 8,
    marginHorizontal: 15,
    fontWeight: 'bold',
    color: 'white'
  }
});
