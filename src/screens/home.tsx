import * as React from 'react';
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Left,
  Body,
  Icon,
  Text,
} from 'native-base';

export class Home extends React.Component<{navigation}> {
  render() {
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
            <Title>Pantalla principal</Title>
          </Body>
        </Header>
        <Content>
          <Text>This is Content Section</Text>
        </Content>
      </Container>
    );
  }
}
