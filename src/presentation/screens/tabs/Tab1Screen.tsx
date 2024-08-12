import {DrawerActions, useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {View, Text, Pressable} from 'react-native';
import {HamburgerMenu} from '../../components/shared/HamburgerMenu';

import Icon from 'react-native-vector-icons/Ionicons';
import {Ionicon} from '../../components/shared/Ionicon';

export const Tab1Screen = () => {
  // const navigation = useNavigation();

  // useEffect(() => {
  //   navigation.setOptions({
  //     headerLeft: () => (
  //       <Pressable
  //         onPress={() => navigation.dispatch(DrawerActions.toggleDrawer)}>
  //         <Text>Menú</Text>
  //       </Pressable>
  //     ),
  //   });
  // });

  return (
    <View>
      <HamburgerMenu />

      <Text>Tab1Screen</Text>

      {/* <Icon name="rocket-outline" size={100} /> */}
      <Ionicon name="rocket-outline" />
    </View>
  );
};
