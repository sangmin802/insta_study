import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Icon, Container, Content, Header, Left, Body, Right, Button } from 'native-base';
import { Ionicons, Entypo } from '@expo/vector-icons';

export default class ProfileTab extends React.Component {
  render(){
    return (
      <Container style={styles.container}>
        <Header style={{ backgroundColor : '#fff' }}>
          <Left style={{ flex : 1 }}>
            <Ionicons name='md-person-add' size={32} style={{ paddingLeft : 10 }} />
          </Left>
          <Body style={{ alignItems : 'center', flex : 4 }}>
            <Text style={{ fontSize : 20 }}>Sangmin</Text>
          </Body>
          <Right style={{ flex : 1 }}>
            <Entypo name='back-in-time' size={32} style={{ paddingRight : 10 }} />
          </Right>
        </Header>
        <Content>
          <View style={{ flexDirection : 'row', padding : 10 }}>
            <View style={{ flex : 1, alignItems : 'center' }}>
              <Image source={ require('../../img/me.jpg') } style={{ width : 75, height : 75, borderRadius : 37.5 }} />
            </View>
            <View style={{ flex : 3 }}>
              <View style={{ flexDirection : 'row', justifyContent : 'space-around' }}>
                <View style={{ alignItems : 'center' }}>
                  <Text>167</Text>
                  <Text style={{ fontSize : 10, color : 'gray' }}>posts</Text>
                </View>
                <View style={{ alignItems : 'center' }}>
                  <Text>346</Text>
                  <Text style={{ fontSize : 10, color : 'gray' }}>follower</Text>
                </View>
                <View style={{ alignItems : 'center' }}>
                  <Text>192</Text>
                  <Text style={{ fontSize : 10, color : 'gray' }}>following</Text>
                </View>
              </View>
              <View style={{ flexDirection : 'row' }}>
                <Button
                  Transparent light
                  style={{ flex:4, marginLeft : 10, justifyContent : 'center', height: 30, marginTop : 10, backgroundColor : 'white' }}
                >
                  <Text>Edit Profile</Text>
                </Button>
                <Button
                  Transparent light
                  style={{ flex:1, marginRight : 10, marginLeft : 5, justifyContent : 'center', height: 30, marginTop : 10, backgroundColor : 'white' }}
                >
                  <Ionicons name='md-settings' size={20} />
                </Button>
              </View>
            </View>
          </View>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor : '#fff'
  },
});
