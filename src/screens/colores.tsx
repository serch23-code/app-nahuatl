import * as React from 'react';
import {Body, Button, Container, Header, Icon, Left, Title} from 'native-base';
import {FlatList} from 'react-native';
import {CardItemProps} from '../shared';
import {CardItem} from '../components/card-item';
import {colors} from '../data/colors';
import {LoadingIndicator} from '../loading-indicator/loading-indicator';

interface State {
  readonly items: CardItemProps[];
  readonly isLoading: boolean;
}

export class Colores extends React.Component<{navigation}> {
  public state: State = {
    items: [],
    isLoading: true,
  };

  public async componentDidMount() {
    await this.loadColors();
  }

  render() {
    const {isLoading, items} = this.state;
    const {navigation} = this.props;
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name="menu" onPress={() => navigation.openDrawer()} />
            </Button>
          </Left>
          <Body>
            <Title>Tlapalme - Colores</Title>
          </Body>
        </Header>

        {isLoading && <LoadingIndicator />}
        {!isLoading && (
          <FlatList<CardItemProps>
            data={items}
            renderItem={({item}) => (
              <CardItem
                image={item.image}
                text={item.text}
                translate={item.translate}
                soundName={item.soundName}
              />
            )}
          />
        )}
      </Container>
    );
  }

  private loadColors = async () => {
    this.setState({isLoading: true});

    try {
      this.setState({items: colors, isLoading: false});
    } catch (error) {
      console.log(error);
    }
  };
}
