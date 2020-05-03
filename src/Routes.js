import React from "react";
import {
    createStackNavigator,

} from "react-navigation-stack";
import {
    createSwitchNavigator
} from "react-navigation";
import {
    createBottomTabNavigator
} from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';
// import screens components here
import {
    Foundation,
    Feather,
    MaterialIcons
} from "@expo/vector-icons";
import Ionicons from 'react-native-vector-icons/Ionicons'

import CameraScreen from "./screens/CameraScreen";
import ProfileScreen from "./screens/ProfileScreen";
import NotificationScreen from "./screens/NotificationScreen";

const CameraStack = createStackNavigator({
    CameraScreen: {
        screen: CameraScreen
    }
});

const ProfileStack = createStackNavigator({
    ProfileScreen: {
        screen: ProfileScreen
    }
});

const NotificationStack = createStackNavigator({
    NotificationScreen: {
        screen: NotificationScreen
    }
});

const AppStack = createBottomTabNavigator(
    {
        CameraStack: {
            screen: CameraStack,
            navigationOptions: {
                tabBarIcon: () => <Ionicons name="ios-person" size={40} />
            }
        },
        NotificationStack: {
            screen: NotificationStack,
            navigationOptions: {
                tabBarIcon: () => <Ionicons name="ios-add-circle" size={40} />
            }
        },
        ProfileStack: {
            screen: ProfileStack,
            navigationOptions: {
                tabBarIcon: () => <Ionicons name="ios-list" size={40} />
            }
        }
    },
    {
        tabBarOptions: {
            showLabel: false,
            activeTintColor: 'balck',
            inactiveTintColor: 'gray'
        }
    }
);

const Routes = createAppContainer(AppStack);
// () => < createAppContainer(AppStack) />;

export default Routes;
