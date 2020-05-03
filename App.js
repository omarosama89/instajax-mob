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
