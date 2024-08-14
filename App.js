import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BallotPaperScreen from "./screens/BallotPaperScreen";
import PollingStationScreen from "./screens/PollingStationScreen";
import AssistanceScreen from "./screens/AssistanceScreen";

const Stack = createNativeStackNavigator();

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("PollingStation")}
      >
        <Text style={styles.buttonText}>Locate Polling Station</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("BallotPaper")}
      >
        <Text style={styles.buttonText}>Ballot Paper</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
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
    backgroundColor: "#f8f8f8",
    padding: 20,
  },
  button: {
    backgroundColor: "#1f8c07",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginVertical: 10,
    width: "80%",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
  },
});
