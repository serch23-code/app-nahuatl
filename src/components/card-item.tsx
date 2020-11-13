import * as React from 'react';
import {View} from 'native-base';
import {StyleSheet, Image, ImageSourcePropType} from 'react-native';
import {CardDataItem} from './card-data-item';
import {PlaySound} from './play-sound';

interface CardItemProps {
  image: ImageSourcePropType;
  text: string;
  translate: string;
  soundName: string;
}

export function CardItem({image, text, translate, soundName}: CardItemProps) {
  return (
    <View style={styles.container}>
      <View style={{alignItems: 'center'}}>
        <Image style={{width: 150, height: 150}} source={image} />
      </View>
      <View style={styles.rowContainer}>
        <CardDataItem text={text} darkMode />
        <CardDataItem text={translate} />
      </View>
      <View style={{padding: 8}}>
        <PlaySound soundName={soundName} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    borderColor: '#292929',
    padding: 2,
    borderBottomWidth: 1
  },
  rowContainer: {
    flexDirection: 'row'
  },
  section: {
    padding: 5
  }
});
