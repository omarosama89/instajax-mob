import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Camera, Permissions } from "expo";

export default class CameraScreen extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        title: "Instagram",
        headerTitleStyle: {
            textAlign: "center",
            flex: 1,
            // fontFamily: "lobster_regular",
            fontSize: 22
        },
        headerRight: <View />,
        headerLeft: <View />
    });

    render() {
        return <View><Text>Helloo</Text></View>
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
    }
});
