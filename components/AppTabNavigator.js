import React from 'react';
import {Image} from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import BookDonation from '../screens/bookdonation';
import BookRequest from '../screens/bookrequest';

export const TabNavigator=createBottomTabNavigator({
Donatebooks:{screen:BookDonation,navigationOptions:{tabBarIcon:<Image
    source={require("../assets/request-list.png")}style={{width:30,height:30}}
    />,
    tabBarLabel:"donatebooks"}},
    Requestbooks:{screen:BookRequest,navigationOptions:{tabBarIcon:<Image
        source={require("../assets/request-book.png")}style={{width:30,height:30}}
        />,
        tabBarLabel:"requestbooks"}}



})