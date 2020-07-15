import * as React from 'react';
import {Body, Button, Container, Header, Icon, Left, Title} from "native-base";

export class Colores extends React.Component<{navigation}>{
    render(){
        const {navigation} = this.props;
        return(
            <Container>
                <Header>
                    <Left>
                        <Button transparent>
                            <Icon name="menu" onPress={() => navigation.openDrawer()} />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Tlapalme</Title>
                    </Body>
                </Header>
            </Container>
        )
    }
}
