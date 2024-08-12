import React from "react";
import { View, Button, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import BallotPaperScreen from "./screens/BallotPaperScreen";
import PollingStationScreen from "./screens/PollingStationScreen";
import AssistanceScreen from "./screens/AssistanceScreen";

const Stack = createStackNavigator();

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button
        title="Ballot Paper"
        onPress={() => navigation.navigate("BallotPaper")}
      />
      <Button
        title="Polling Station"
        onPress={() => navigation.navigate("PollingStation")}
      />
      <Button
        title="For Assistance"
        onPress={() => navigation.navigate("Assistance")}
      />
    </View>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="BallotPaper" component={BallotPaperScreen} />
        <Stack.Screen name="PollingStation" component={PollingStationScreen} />
        <Stack.Screen name="Assistance" component={AssistanceScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
