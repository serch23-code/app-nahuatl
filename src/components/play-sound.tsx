import Sound from 'react-native-sound';
import * as React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';

interface SoundProps {
  soundName: string;
}

export function PlaySound({soundName}: SoundProps) {
  function playSound() {
    // Play some sound here
    const whoosh = new Sound(soundName, Sound.MAIN_BUNDLE, (error) => {
      if (error) {
        console.log('failed to load the sound', error);
        return;
      }
      // loaded successfully
      console.log(
        'duration in seconds: ' +
          whoosh.getDuration() +
          'number of channels: ' +
          whoosh.getNumberOfChannels()
      );

      // Play the sound with an onEnd callback
      whoosh.play((success) => {
        if (success) {
          console.log('successfully finished playing');
        } else {
          console.log('playback failed due to audio decoding errors');
        }
      });
    });
  }

  return (
    <View style={{alignItems: 'center', flex: 1}}>
      <TouchableOpacity
        style={{backgroundColor: 'transparent'}}
        onPress={() => playSound()}>
        <Image
          style={{width: 40, height: 40}}
          source={require('../assets/images/sonido.png')}
        />
      </TouchableOpacity>
    </View>
  );
}
