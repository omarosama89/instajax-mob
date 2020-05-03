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
    MaterialIcons,
    Ionicons
} from "@expo/vector-icons";
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
            screen: CameraStack
        },
        NotificationStack: {
            screen: NotificationStack
        },
        ProfileStack: {
            screen: ProfileStack
        }
    },
    {
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused }) => {
                const { routeName } = navigation.state;
                let iconName;
                if (routeName === "CameraStack") {
                    return (
                        <MaterialIcons
                            name="add-box"
                            size={28}
                            color={focused ? "black" : "gray"}
                        />
                    );
                }
                if (routeName === "NotificationStack") {
                    return (
                        <Foundation
                            name="heart"
                            size={28}
                            color={focused ? "black" : "gray"}
                        />
                    );
                }
                if (routeName === "ProfileStack") {
                    return (
                        <Ionicons
                            name="md-person"
                            size={28}
                            color={focused ? "black" : "gray"}
                        />
                    );
                }
            }
        }),
        tabBarOptions: {
            showLabel: false
        }
    }
);

// const AppNavigation = createSwitchNavigator(
//     {
//         AppStack: { screen: AppStack }
//     },
//     {
//         initialRouteName: "AppStack"
//     }
// );

const Routes = createAppContainer(AppStack);
// () => < createAppContainer(AppStack) />;

export default Routes;
