import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Container, Content, Icon, Thumbnail } from 'native-base';
import { Ionicons } from '@expo/vector-icons';

import CardComponent from '../CardComponent.js';

export default class HomeTab extends React.Component {
  state = {
    isLoading : true,
    feeds : [],
    followings : [],
  }

  render(){
    const { feeds, isLoading, followings } = this.state;
    return (
      <Container style={styles.container}>
        <View style={{ height : 90 }}>
          <View style={{ flex : 1, justifyContent : 'space-between', padding : 7, flexDirection : 'row', alignItems : 'center' }}>
            <Text style={{ fontWeight : 'bold' }}>Stories</Text>
            <View style={{ flexDirection : 'row', alignItems : 'center' }}>
              <Ionicons name='md-play' style={{ fontSize : 14 }}/>
              <Text style={{ fontWeight : 'bold' }}> Watch All</Text>
            </View>
          </View>
          <View style={{ flex : 3 }}>
            <ScrollView 
              horizontal={true} 
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                alignItems : 'center',
                paddingStart : 5,
                paddingEnd : 5,
              }}
            >
              { followings.map((res, index) => {
                return <Thumbnail 
                  key={index} 
                  source={{ uri : `https://steemitimages.com/u/${res.following}/avatar` }}
                  style ={{ marginHorizontal : 1, borderColor : '#666666', borderWidth : 2 }}
                  />
              }) }
            </ScrollView>
          </View>
        </View>
        { isLoading ?
          <View style={{ flex : 1, justifyContent : 'center', alignItems : 'center' }}>
            <Text>
              Getting feeds... ♥
            </Text>
          </View>
          :
          <Content>
            {feeds.map((feed, index) => <CardComponent key={index} data={feed} />)}
          </Content>
        }
      </Container>
    );
  }

  getData(){
    const data = [
      {
        id: 1,
        jsonrpc: "2.0",
        method: "call",
        params: [
          "database_api",
          "get_discussions_by_created",
          [{ tag: "kr", limit: 20 }]
        ]
      },
      {
        id: 2,
        jsonrpc: "2.0",
        method: "call",
        params: [
          "follow_api",
          "get_following",
          ["anpigon", "", "blog", 10]
        ]      
      }
    ]

    return Promise.all(
      data.map(res => {
        return fetch('https://api.steemit.com', {
          method: 'POST',
          body: JSON.stringify(res)
        }).then(response => response.json());
      })
    );
  };

  componentDidMount(){
    this.getData()
    .then(data => {
      this.setState({ isLoading : false, feeds : data[0].result, followings : data[1].result });
    });
  };
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
