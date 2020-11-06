import {ImageSourcePropType} from 'react-native';

export interface CardItemProps {
  readonly image: ImageSourcePropType;
  readonly text: string;
  readonly translate: string;
  readonly soundName: string;
}
