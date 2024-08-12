import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

const AssistanceScreen = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [pecNumber, setPecNumber] = useState("");
  const [city, setCity] = useState("");

  const handleSubmit = () => {
    console.log({
      name,
      phone,
      pecNumber,
      city,
    });
    // Here you'd handle form submission, e.g., sending the data to admin.
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />
      <TextInput
        placeholder="Phone"
        value={phone}
        onChangeText={setPhone}
        style={styles.input}
      />
      <TextInput
        placeholder="PEC Number"
        value={pecNumber}
        onChangeText={setPecNumber}
        style={styles.input}
      />
      <TextInput
        placeholder="City"
        value={city}
        onChangeText={setCity}
        style={styles.input}
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});

export default AssistanceScreen;
