import React, { useState } from "react";
import { View, Picker, Button, Image, StyleSheet } from "react-native";

const BallotPaperScreen = () => {
  const [province, setProvince] = useState("");
  const [discipline, setDiscipline] = useState("");

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

      <Picker
        selectedValue={discipline}
        onValueChange={(itemValue) => setDiscipline(itemValue)}
      >
        <Picker.Item label="Select Discipline" value="" />
        <Picker.Item label="Mechanical" value="mechanical" />
        <Picker.Item label="Electrical" value="electrical" />
        <Picker.Item label="Civil" value="civil" />
      </Picker>

      {province && discipline ? (
        <View>
          <Image
            source={{ uri: "https://example.com/ballot.jpg" }} // Replace with your image URL
            style={{ width: 300, height: 400 }}
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
});

export default BallotPaperScreen;
