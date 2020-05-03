import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Routes from "./src/Routes";
import * as Font from "expo-font";

// export default function App() {

//   return <Routes />;
// }


class App extends React.Component {

  async componentDidMount() {
    await Font.loadAsync({
      lobster_regular: require("./assets/fonts/Lobster/Lobster-Regular.ttf"),
      Roboto: require("./assets/fonts/Roboto/Roboto-Regular.ttf")
    });
    this.setState({ loading: false });
  }

  render() {
    return <Routes />;
  }
}


export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// import * as React from 'react';
// import { Text, View } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Icon from 'react-native-ionicons'

// function HomeScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Home!</Text>
//     </View>
//   );
// }

// function SettingsScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Settings!</Text>
//     </View>
//   );
// }

// const Tab = createBottomTabNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator>
//         <Tab.Screen name="Home" component={HomeScreen} />
//         <Tab.Screen name="Settings" component={SettingsScreen} />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }
