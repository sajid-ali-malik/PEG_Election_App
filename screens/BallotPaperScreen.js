import React, { useState } from "react";
import { View, Button, StyleSheet, Image, Dimensions } from "react-native";
import { Picker } from "@react-native-picker/picker";

const PollingStationScreen = () => {
  const [province, setProvince] = useState("");
  const [discipline, setDiscipline] = useState("");

  const disciplinesArr = {
    punjab: [
      "Civil/Architectural/Ecological",
      "Transport/Environmental/Urban/Ocean",
      "Mechanical",
      "Mecantro/Indus/Nuclear/Textile/Automotive",
      "Metal/Agricultural/Mining/Pet-gas",
      "Chemical/Polymer/Food",
      "Computer",
      "Telecom/Aero/Avionics",
      "Electronics/Engg Science",
      "Electrical/Bio-Medical/Energy",
    ],
    sindh: [
      "Civil/Architectural/Ecological",
      "Transport/Environmental/Urban/Ocean",
      "Mechanical",
      "Mecantro/Indus/Nuclear/Textile/Automotive",
      "Metal/Agricultural/Mining/Pet-gas",
      "Chemical/Polymer/Food",
      "Computer",
      "Telecom/Aero/Avionics",
      "Electronics/Engg Science",
      "Electrical/Bio-Medical/Energy",
    ],
    kpk: [
      "Civil/Architectural/Ecological",
      "Transport/Environmental/Urban/Ocean",
      "Mechanical",
      "Mecantro/Indus/Nuclear/Textile/Automotive",
      "Metal/Agricultural/Mining/Pet-gas",
      "Chemical/Polymer/Food",
      "Computer",
      "Telecom/Aero/Avionics",
      "Electronics/Engg Science",
      "Electrical/Bio-Medical/Energy",
    ],
    baloch: [
      "Civil/Architectural/Ecological",
      "Transport/Environmental/Urban/Ocean",
      "Mechanical",
      "Mecantro/Indus/Nuclear/Textile/Automotive",
      "Metal/Agricultural/Mining/Pet-gas",
      "Chemical/Polymer/Food",
      "Computer",
      "Telecom/Aero/Avionics",
      "Electronics/Engg Science",
      "Electrical/Bio-Medical/Energy",
    ],
    gb_azk: [
      "Civil/Architectural/Ecological",
      "Transport/Environmental/Urban/Ocean",
      "Mechanical",
      "Mecantro/Indus/Nuclear/Textile/Automotive",
      "Metal/Agricultural/Mining/Pet-gas",
      "Chemical/Polymer/Food",
      "Computer",
      "Telecom/Aero/Avionics",
      "Electronics/Engg Science",
      "Electrical/Bio-Medical/Energy",
    ],
  };

  const disciplines = province ? disciplinesArr[province] : [];
  const { width, height } = Dimensions.get("window");

  const getImageSource = () => {
    if (discipline && province) {
      const imageName = `${discipline.toLowerCase()}_${province.toLowerCase()}.jpeg`;
      return require(`../assets/ballot-paper-images/${imageName}`);
    }
    return null;
  };

  return (
    <View style={styles.container}>
      <Picker
        selectedValue={province}
        onValueChange={(itemValue) => {
          setProvince(itemValue);
          setDiscipline("");
        }}
        style={styles.picker}
      >
        <Picker.Item label="Select Province" value="" />
        <Picker.Item label="Punjab" value="punjab" />
        <Picker.Item label="Sindh" value="sindh" />
        <Picker.Item label="KPK" value="kpk" />
        <Picker.Item label="Balochistan" value="balochistan" />
        <Picker.Item label="Gilgal B./Azad Kash." value="gb_azk" />
      </Picker>

      <Picker
        selectedValue={discipline}
        onValueChange={(itemValue) => setDiscipline(itemValue)}
        style={styles.picker}
        enabled={province !== ""}
      >
        <Picker.Item label="Select Discipline" value="" />
        {disciplines.map((cityName, index) => (
          <Picker.Item key={index} label={cityName} value={cityName} />
        ))}
      </Picker>

      {discipline ? (
        <View>
          <Image
            source={getImageSource()}
            style={{ width: width * 1, height: height * 0.6 }}
            resizeMode="cover"
          />
          <Button
            title="Download"
            onPress={() => console.log("Download image logic here")}
          />
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  picker: {
    height: 50,
    width: 300,
    marginVertical: 10,
  },
});

export default PollingStationScreen;
