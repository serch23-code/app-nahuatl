import * as React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';

export function LoadingIndicator() {
  return (
    <View style={styles.progressIndicatorLight}>
      <ActivityIndicator size="large" color={'#055c93'} />
    </View>
  );
}

const styles = StyleSheet.create({
  progressIndicatorLight: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    flexDirection: 'row',
    padding: 10,
    minHeight: 60
  }
});
