import React, { useState } from "react";
import { View, Picker, Button, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";

const PollingStationScreen = () => {
  const [province, setProvince] = useState("");
  const [city, setCity] = useState("");

  const renderMap = () => (
    <MapView
      style={{ width: "100%", height: 300 }}
      initialRegion={{
        latitude: 31.5204,
        longitude: 74.3587,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    >
      <Marker
        coordinate={{ latitude: 31.5204, longitude: 74.3587 }}
        title="Polling Station"
        description="This is the polling station"
      />
    </MapView>
  );

  return (
    <View style={styles.container}>
      <Picker
        selectedValue={province}
        onValueChange={(itemValue) => setProvince(itemValue)}
      >
        <Picker.Item label="Select Province" value="" />
        <Picker.Item label="Punjab" value="punjab" />
        <Picker.Item label="Sindh" value="sindh" />
        <Picker.Item label="KPK" value="kpk" />
        <Picker.Item label="Balochistan" value="balochistan" />
        <Picker.Item label="GB/AZK" value="gb_azk" />
      </Picker>

      {province ? (
        <Picker
          selectedValue={city}
          onValueChange={(itemValue) => setCity(itemValue)}
        >
          <Picker.Item label="Select City" value="" />
          <Picker.Item label="City 1" value="city1" />
          <Picker.Item label="City 2" value="city2" />
          <Picker.Item label="City 3" value="city3" />
        </Picker>
      ) : null}

      {city ? renderMap() : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default PollingStationScreen;
