import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import BallotPaperScreen from "./screens/BallotPaperScreen";
import PollingStationScreen from "./screens/PollingStationScreen";
import AssistanceScreen from "./screens/AssistanceScreen";

const Stack = createStackNavigator();

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button, styles.buttonPrimary]}
        onPress={() => navigation.navigate("PollingStation")}
      >
        <Text style={styles.buttonText}>Locate Polling Station</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, styles.buttonSecondary]}
        onPress={() => navigation.navigate("BallotPaper")}
      >
        <Text style={styles.buttonText}>Ballot Paper</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, styles.buttonTertiary]}
        onPress={() => navigation.navigate("Assistance")}
      >
        <Text style={styles.buttonText}>For Help</Text>
      </TouchableOpacity>
    </View>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Vote For Change, Vote For Waseem Nazir" }}
        />
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
    backgroundColor: "#ffffff",
    padding: 20,
  },
  button: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginVertical: 10,
    width: "80%",
    alignItems: "center",
    elevation: 2,
  },
  buttonPrimary: {
    backgroundColor: "#4caf50",
  },
  buttonSecondary: {
    backgroundColor: "#2196f3",
  },
  buttonTertiary: {
    backgroundColor: "#f44336",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
    textTransform: "uppercase",
  },
});
