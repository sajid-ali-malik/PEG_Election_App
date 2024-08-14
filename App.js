import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BallotPaperScreen from "./screens/BallotPaperScreen";
import PollingStationScreen from "./screens/PollingStationScreen";
import AssistanceScreen from "./screens/AssistanceScreen";

const Stack = createNativeStackNavigator();

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require("./assets/app-images/WaseemNazir.png")}
        style={styles.topImage}
      />

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
        <Text style={styles.buttonText}>Our Panel</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Assistance")}
      >
        <Text style={styles.buttonText}>For Help</Text>
      </TouchableOpacity>

      <Image
        source={require("./assets/app-images/note.png")}
        style={styles.noteImage}
      />

      <Image
        source={require("./assets/app-images/bottom.png")}
        style={styles.bottomImage}
      />
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
          options={{
            title: "Vote For Waseem Nazir",
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontSize: 28,
              fontWeight: "bold",
              color: "#0a430a",
            },
          }}
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
    backgroundColor: "#D3D3D3",
  },
  topImage: {
    position: "absolute",
    top: "4%",
    left: "10",
    width: "60%",
    height: "30%",
    resizeMode: "contain",
  },
  bottomImage: {
    position: "absolute",
    bottom: "-16%",
    width: "150%",
    height: "40%",
    resizeMode: "contain",
  },

  noteImage: {
    position: "absolute",
    bottom: "6%",
    width: "75%",
    height: "35%",
    resizeMode: "contain",
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
