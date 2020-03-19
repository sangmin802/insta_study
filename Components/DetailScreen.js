import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Container, Content } from 'native-base';

export default class DetailScreen extends React.Component {
  render(){
    return(
      <Container>
        <Content>
          <Text style={styles.detail}>Detail Content</Text>
          <Text style={styles.detail}>Detail Content</Text>
          <Text style={styles.detail}>Detail Content</Text>
          <Text style={styles.detail}>Detail Content</Text>
          <Text style={styles.detail}>Detail Content</Text>
          <Text style={styles.detail}>Detail Content</Text>
          <Text style={styles.detail}>Detail Content</Text>
          <Text style={styles.detail}>Detail Content</Text>
          <Text style={styles.detail}>Detail Content</Text>
          <Text style={styles.detail}>Detail Content</Text>
          <Text style={styles.detail}>Detail Content</Text>
          <Text style={styles.detail}>Detail Content</Text>
          <Text style={styles.detail}>Detail Content</Text>
        </Content>
      </Container>
    );
  };
};

const styles = StyleSheet.create({
  detail : {
    height : 45,
    justifyContent : 'center',
    alignItems : 'center'
  }
})