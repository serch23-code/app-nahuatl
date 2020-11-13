import * as React from 'react';
import {Text} from 'native-base';
import Sound from 'react-native-sound';
import {
  Image,
  ImageSourcePropType,
  ScrollView,
  TouchableOpacity,
  View
} from 'react-native';
import {CardDataItem} from '../components/card-data-item';
import {CardItem} from '../components/card-item';

export class StorybookScreen extends React.Component<{}> {
  render() {
    return (
      <ScrollView>
        <Text>This is Storybook</Text>
        <PlayAudio />
        <CardDataItemStory />
        <CardStory />
        <CardListStory />
      </ScrollView>
    );
  }
}

function PlayAudio() {
  function handlePress() {
    // Play some sound here
    var whoosh = new Sound('audio.mp3', Sound.MAIN_BUNDLE, (error) => {
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
    <View>
      <Text style={{marginBottom: 10, backgroundColor: 'yellow'}}>
        Play Audio
      </Text>
      <TouchableOpacity
        style={{backgroundColor: 'transparent'}}
        onPress={() => handlePress()}>
        <Image
          style={{width: 40, height: 40}}
          source={require('../assets/images/sonido.png')}
        />
      </TouchableOpacity>
    </View>
  );
}

function CardDataItemStory() {
  const variantsConfig: Array<{
    readonly name: string;
    readonly darkMode: boolean;
    readonly backgroundColor: string;
  }> = [
    {
      name: 'light mode',
      darkMode: false,
      backgroundColor: '#055c93'
    },
    {
      name: 'dark mode',
      darkMode: true,
      backgroundColor: 'white'
    }
  ];

  return (
    <View>
      <Text style={{marginBottom: 10, backgroundColor: 'yellow'}}>
        CardDataItem
      </Text>
      {variantsConfig.map((variant, index) => (
        <View key={index} style={{marginBottom: 10}}>
          <Text>{variant.name}</Text>
          <View
            style={{
              flex: 1,
              backgroundColor: variant.backgroundColor,
              padding: 5
            }}>
            <CardDataItem text={'Color'} darkMode={variant.darkMode} />
          </View>
        </View>
      ))}
    </View>
  );
}

function CardStory() {
  const image = require('../assets/images/arbol.jpg');
  return (
    <View>
      <Text style={{marginBottom: 10, backgroundColor: 'yellow'}}>Card</Text>
      <CardItem
        image={image}
        text={'Arbol'}
        translate={'kowitl'}
        soundName={'audio.mp3'}
      />
    </View>
  );
}

function CardListStory() {
  const variantsConfig: Array<{
    readonly image: ImageSourcePropType;
    readonly text: string;
    readonly translate: string;
    readonly soundName: string;
  }> = [
    {
      image: require('../assets/images/arbol.jpg'),
      text: 'Arbol',
      translate: 'Kowitl',
      soundName: 'audio.mp3'
    },
    {
      image: require('../assets/images/casa.png'),
      text: 'Casa',
      translate: 'Kale',
      soundName: 'audio.mp3'
    },
    {
      image: require('../assets/images/saludar.png'),
      text: 'Hola',
      translate: 'Hello',
      soundName: 'audio.mp3'
    },
    {
      image: require('../assets/images/sonido.png'),
      text: 'Sonido',
      translate: 'Sound',
      soundName: 'audio.mp3'
    }
  ];

  return (
    <View>
      <Text style={{marginBottom: 10, backgroundColor: 'yellow'}}>
        CardDataList
      </Text>
      {variantsConfig.map((variant, index) => (
        <View key={index} style={{marginBottom: 10}}>
          <CardItem
            image={variant.image}
            text={variant.text}
            translate={variant.translate}
            soundName={variant.soundName}
          />
        </View>
      ))}
    </View>
  );
}
