import * as React from 'react';
import {View, Text} from 'react-native';

interface CardDataItemProps {
  readonly text: string;
  readonly darkMode?: boolean;
}

export function CardDataItem({text, darkMode}: CardDataItemProps) {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 10
      }}>
      <Text
        numberOfLines={1}
        ellipsizeMode={'tail'}
        style={{
          marginLeft: 10,
          flexShrink: 1,
          color: darkMode ? '#055c93' : '#292929',
          fontSize: 18,
          fontWeight: 'bold'
        }}>
        {text}
      </Text>
    </View>
  );
}
