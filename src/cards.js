import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import React from 'react';
import {deviceHeight, deviceWidth} from './Dimensions';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function cards({name, image, navigation}) {
  return (
    <TouchableOpacity style={{marginHorizontal: 10}} onPress={() => navigation.navigate('Details',{name})}>
      <ImageBackground
        source={image}
        style={{height: deviceHeight / 5, width: deviceWidth / 2 - 50}}
        imageStyle={{borderRadius: 16}}
      />
      <View style={{position: 'absolute', height: '100%', width: '100%'}}>
        <Text
          style={{
            fontSize: 22,
            width: '100%',
            height: '100%',
            textAlign: 'center',
            textAlignVertical: 'center',
            color :'black'
          }}>
          {name}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
