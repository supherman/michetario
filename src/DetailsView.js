/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';

import { Fonts } from '../src/utils/Fonts'
import { Actions } from 'react-native-router-flux'

type Props = {};
export default class DetailsView extends Component<Props> {
  constructor(props) {
    super(props);
      this.state = {
      itemData: [],
      valor: 1
    };
  }
  componentWillMount(){
    this.saveData(this.props.itemData)
  }
  saveData = (itemData) => {
    this.setState({itemData: itemData})
  }
  render() {
  const {articulo} = this.state.itemData
  const {descripcion} = this.state.itemData
  const {sn} = this.state.itemData
  const {responsable} = this.state.itemData

  return (
      <View style={styles.container}>
        <Image source={require('./assets/itemIcon.png')} style={styles.logo} resizeMode="contain"/>
        <View style={styles.textContainer}>
          <Text style={styles.labelText}>Artículo:</Text><Text style={styles.labelResponse}>{articulo}</Text>
        </View> 
        <View style={styles.textContainer}>
          <Text style={styles.labelText}>Descripción: </Text><Text style={styles.labelResponse}>{descripcion}</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.labelText}>S/N: </Text><Text style={styles.labelResponse}>{sn}</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.labelText}>Responsable: </Text><Text style={styles.labelResponse}>{responsable}</Text>
        </View>  
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  logo: {
    width: 200,
    height: 150,
    marginTop: Platform.select({
      ios: 50,
      android: 50
    }),
    marginBottom: 25
  },
  textContainer: {
    height: 30,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  labelText: {
    flex: 1,
    fontSize: 14,
    fontFamily: Fonts.PoppinsMedium,
    textAlign: 'right',
    width: 50,
    paddingRight: 10,
  },
  labelResponse: {
    flex: 2,
    fontSize: 14,
    fontFamily: Fonts.PoppinsLight,
    width: 50,
  }
 });
