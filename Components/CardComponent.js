import React from 'react';
import { View, Image, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon } from 'native-base';
import { Ionicons } from '@expo/vector-icons';

export default class CardComponent extends React.Component{
  render() {
    const { data : { author, created, active_votes, title, body, pending_payout_value  }, data } = this.props;
    const { image } = JSON.parse(data.json_metadata);
    const text = body.replace(/\n/g,' ').slice(0, 200);
    return (
      <TouchableWithoutFeedback onPress={(e) => {this.goDetail(title, e)}}>
        <Card>
          <CardItem>
            <Left>
              <Thumbnail source={{ uri : `https://steemitimages.com/u/${author}/avatar` }} />
              <Body>
                <Text>{author}</Text>
                <Text note>{new Date(created).toDateString()}</Text>
              </Body>
            </Left>
          </CardItem>
          {
            image ?
              <CardItem cardBody>
                <Image 
                  source={{ uri : image[0] }} style={{ height : 200, width : null, flex : 1 }}
                />
              </CardItem>
            :
              null
          }
          <CardItem style={{ height : 20 }}>
            <Text>{ active_votes.length } likes</Text>
          </CardItem>
          <CardItem>
            <Text style={{ fontWeight : '900' }}>{ title }</Text>
          </CardItem>
          <CardItem>
            <Text>
              { text } ...
            </Text>
          </CardItem>
          <CardItem style={{ height : 45 }}>
            <Left>
              <Button transparent>
                <Ionicons name='ios-heart' style={{ color : 'black' }} size={ 22 }/>
              </Button>
              <Button transparent>
                <Ionicons name='ios-chatbubbles' style={{ color : 'black' }} size={ 22 }/>
              </Button>
              <Button transparent>
                <Ionicons name='ios-send' style={{ color : 'black' }} size={ 22 }/>
              </Button>
            </Left>
            <Right>
              <Text>{ pending_payout_value }</Text>
            </Right>
          </CardItem>
        </Card>
      </TouchableWithoutFeedback>
    );
  }

  goDetail = (_title, e) => {
    const { navigation : { navigate } } = this.props;
    navigate('Detail');
  }
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});