import React, { useState } from "react";
import { View, StyleSheet, Image, Dimensions } from "react-native";
import { Picker } from "@react-native-picker/picker";

const PollingStationScreen = () => {
  const [province, setProvince] = useState("");
  const [discipline, setDiscipline] = useState("");

  const disciplinesArr = {
    punjab: {
      civil: [
        {
          name: "Civil/Architectural/Ecological",
          link: require("../assets/ballot-paper-images/civil_punjab.jpeg"),
        },
      ],
      civil2: [
        {
          name: "Transport/Environmental/Urban/Ocean",
          link: require("../assets/ballot-paper-images/civil2_punjab.jpeg"),
        },
      ],
      mechanical: [
        {
          name: "Mechanical",
          link: require("../assets/ballot-paper-images/mechanical_punjab.jpeg"),
        },
      ],
      mechatronics: [
        {
          name: "Mecatro/Indus/Nuclear/Textile/Automotive",
          link: require("../assets/ballot-paper-images/mechatronics_punjab.jpeg"),
        },
      ],
      metallurgy: [
        {
          name: "Metal/Agricultural/Mining/Pet-gas",
          link: require("../assets/ballot-paper-images/metallurgy_punjab.jpeg"),
        },
      ],
      chemical: [
        {
          name: "Chemical/Polymer/Food",
          link: require("../assets/ballot-paper-images/chemical_punjab.jpeg"),
        },
      ],
      computer: [
        {
          name: "Computer",
          link: require("../assets/ballot-paper-images/computer_punjab.jpeg"),
        },
      ],
      telecom: [
        {
          name: "Telecom/Aero/Avionics",
          link: require("../assets/ballot-paper-images/telecom_punjab.jpeg"),
        },
      ],
      electronics: [
        {
          name: "Electronics/Engg Science",
          link: require("../assets/ballot-paper-images/electronics_punjab.jpeg"),
        },
      ],
      electrical: [
        {
          name: "Electrical/Bio-Medical/Energy",
          link: require("../assets/ballot-paper-images/electrical_punjab.jpeg"),
        },
      ],
    },

    sindh: {
      civil: [
        {
          name: "Civil/Architectural/Ecological",
          link: require("../assets/ballot-paper-images/civil_sindh.jpeg"),
        },
      ],
      civil2: [
        {
          name: "Transport/Environmental/Urban/Ocean",
          link: require("../assets/ballot-paper-images/civil2_sindh.jpeg"),
        },
      ],
      mechanical: [
        {
          name: "Mechanical",
          link: require("../assets/ballot-paper-images/mechanical_sindh.jpeg"),
        },
      ],
      mechatronics: [
        {
          name: "Mecatro/Indus/Nuclear/Textile/Automotive",
          link: require("../assets/ballot-paper-images/mechatronics_sindh.jpeg"),
        },
      ],
      metallurgy: [
        {
          name: "Metal/Agricultural/Mining/Pet-gas",
          link: require("../assets/ballot-paper-images/metallurgy_sindh.jpeg"),
        },
      ],
      chemical: [
        {
          name: "Chemical/Polymer/Food",
          link: require("../assets/ballot-paper-images/chemical_sindh.jpeg"),
        },
      ],
      computer: [
        {
          name: "Computer",
          link: require("../assets/ballot-paper-images/computer_sindh.jpeg"),
        },
      ],
      telecom: [
        {
          name: "Telecom/Aero/Avionics",
          link: require("../assets/ballot-paper-images/telecom_sindh.jpeg"),
        },
      ],
      electronics: [
        {
          name: "Electronics/Engg Science",
          link: require("../assets/ballot-paper-images/electronics_sindh.jpeg"),
        },
      ],
      electrical: [
        {
          name: "Electrical/Bio-Medical/Energy",
          link: require("../assets/ballot-paper-images/electrical_sindh.jpeg"),
        },
      ],
    },

    kpk: {
      civil: [
        {
          name: "Civil/Architectural/Ecological",
          link: require("../assets/ballot-paper-images/civil_kpk.jpeg"),
        },
      ],
      civil2: [
        {
          name: "Transport/Environmental/Urban/Ocean",
          link: require("../assets/ballot-paper-images/civil2_kpk.jpeg"),
        },
      ],
      mechanical: [
        {
          name: "Mechanical",
          link: require("../assets/ballot-paper-images/mechanical_kpk.jpeg"),
        },
      ],
      mechatronics: [
        {
          name: "Mecatro/Indus/Nuclear/Textile/Automotive",
          link: require("../assets/ballot-paper-images/mechatronics_kpk.jpeg"),
        },
      ],
      metallurgy: [
        {
          name: "Metal/Agricultural/Mining/Pet-gas",
          link: require("../assets/ballot-paper-images/metallurgy_kpk.jpeg"),
        },
      ],
      chemical: [
        {
          name: "Chemical/Polymer/Food",
          link: require("../assets/ballot-paper-images/chemical_kpk.jpeg"),
        },
      ],
      computer: [
        {
          name: "Computer",
          link: require("../assets/ballot-paper-images/computer_kpk.jpeg"),
        },
      ],
      telecom: [
        {
          name: "Telecom/Aero/Avionics",
          link: require("../assets/ballot-paper-images/telecom_kpk.jpeg"),
        },
      ],
      electronics: [
        {
          name: "Electronics/Engg Science",
          link: require("../assets/ballot-paper-images/electronics_kpk.jpeg"),
        },
      ],
      electrical: [
        {
          name: "Electrical/Bio-Medical/Energy",
          link: require("../assets/ballot-paper-images/electrical_kpk.jpeg"),
        },
      ],
    },
    baloch: {
      civil: [
        {
          name: "Civil/Architectural/Ecological",
          link: require("../assets/ballot-paper-images/civil_baloch.jpeg"),
        },
      ],
      civil2: [
        {
          name: "Transport/Environmental/Urban/Ocean",
          link: require("../assets/ballot-paper-images/civil2_baloch.jpeg"),
        },
      ],
      mechanical: [
        {
          name: "Mechanical",
          link: require("../assets/ballot-paper-images/mechanical_baloch.jpeg"),
        },
      ],
      mechatronics: [
        {
          name: "Mecatro/Indus/Nuclear/Textile/Automotive",
          link: require("../assets/ballot-paper-images/mechatronics_baloch.jpeg"),
        },
      ],
      metallurgy: [
        {
          name: "Metal/Agricultural/Mining/Pet-gas",
          link: require("../assets/ballot-paper-images/metallurgy_baloch.jpeg"),
        },
      ],
      chemical: [
        {
          name: "Chemical/Polymer/Food",
          link: require("../assets/ballot-paper-images/chemical_baloch.jpeg"),
        },
      ],
      computer: [
        {
          name: "Computer",
          link: require("../assets/ballot-paper-images/computer_baloch.jpeg"),
        },
      ],
      telecom: [
        {
          name: "Telecom/Aero/Avionics",
          link: require("../assets/ballot-paper-images/telecom_baloch.jpeg"),
        },
      ],
      electronics: [
        {
          name: "Electronics/Engg Science",
          link: require("../assets/ballot-paper-images/electronics_baloch.jpeg"),
        },
      ],
      electrical: [
        {
          name: "Electrical/Bio-Medical/Energy",
          link: require("../assets/ballot-paper-images/electrical_baloch.jpeg"),
        },
      ],
    },
    azk: {
      civil: [
        {
          name: "Civil/Architectural/Ecological",
          link: require("../assets/ballot-paper-images/civil_punjab.jpeg"),
        },
      ],
      civil2: [
        {
          name: "Transport/Environmental/Urban/Ocean",
          link: require("../assets/ballot-paper-images/civil2_punjab.jpeg"),
        },
      ],
      mechanical: [
        {
          name: "Mechanical",
          link: require("../assets/ballot-paper-images/mechanical_punjab.jpeg"),
        },
      ],
      mechatronics: [
        {
          name: "Mecatro/Indus/Nuclear/Textile/Automotive",
          link: require("../assets/ballot-paper-images/mechatronics_punjab.jpeg"),
        },
      ],
      metallurgy: [
        {
          name: "Metal/Agricultural/Mining/Pet-gas",
          link: require("../assets/ballot-paper-images/metallurgy_punjab.jpeg"),
        },
      ],
      chemical: [
        {
          name: "Chemical/Polymer/Food",
          link: require("../assets/ballot-paper-images/chemical_punjab.jpeg"),
        },
      ],
      computer: [
        {
          name: "Computer",
          link: require("../assets/ballot-paper-images/computer_punjab.jpeg"),
        },
      ],
      telecom: [
        {
          name: "Telecom/Aero/Avionics",
          link: require("../assets/ballot-paper-images/telecom_punjab.jpeg"),
        },
      ],
      electronics: [
        {
          name: "Electronics/Engg Science",
          link: require("../assets/ballot-paper-images/electronics_punjab.jpeg"),
        },
      ],
      electrical: [
        {
          name: "Electrical/Bio-Medical/Energy",
          link: require("../assets/ballot-paper-images/electrical_punjab.jpeg"),
        },
      ],
    },

    isl: {
      civil: [
        {
          name: "Civil/Architectural/Ecological",
          link: require("../assets/ballot-paper-images/civil_punjab.jpeg"),
        },
      ],
      civil2: [
        {
          name: "Transport/Environmental/Urban/Ocean",
          link: require("../assets/ballot-paper-images/civil2_punjab.jpeg"),
        },
      ],
      mechanical: [
        {
          name: "Mechanical",
          link: require("../assets/ballot-paper-images/mechanical_punjab.jpeg"),
        },
      ],
      mechatronics: [
        {
          name: "Mecatro/Indus/Nuclear/Textile/Automotive",
          link: require("../assets/ballot-paper-images/mechatronics_punjab.jpeg"),
        },
      ],
      metallurgy: [
        {
          name: "Metal/Agricultural/Mining/Pet-gas",
          link: require("../assets/ballot-paper-images/metallurgy_punjab.jpeg"),
        },
      ],
      chemical: [
        {
          name: "Chemical/Polymer/Food",
          link: require("../assets/ballot-paper-images/chemical_punjab.jpeg"),
        },
      ],
      computer: [
        {
          name: "Computer",
          link: require("../assets/ballot-paper-images/computer_punjab.jpeg"),
        },
      ],
      telecom: [
        {
          name: "Telecom/Aero/Avionics",
          link: require("../assets/ballot-paper-images/telecom_punjab.jpeg"),
        },
      ],
      electronics: [
        {
          name: "Electronics/Engg Science",
          link: require("../assets/ballot-paper-images/electronics_punjab.jpeg"),
        },
      ],
      electrical: [
        {
          name: "Electrical/Bio-Medical/Energy",
          link: require("../assets/ballot-paper-images/electrical_punjab.jpeg"),
        },
      ],
    },

    gb: {
      civil: [
        {
          name: "Civil/Architectural/Ecological",
          link: require("../assets/ballot-paper-images/civil_kpk.jpeg"),
        },
      ],
      civil2: [
        {
          name: "Transport/Environmental/Urban/Ocean",
          link: require("../assets/ballot-paper-images/civil2_kpk.jpeg"),
        },
      ],
      mechanical: [
        {
          name: "Mechanical",
          link: require("../assets/ballot-paper-images/mechanical_kpk.jpeg"),
        },
      ],
      mechatronics: [
        {
          name: "Mecatro/Indus/Nuclear/Textile/Automotive",
          link: require("../assets/ballot-paper-images/mechatronics_kpk.jpeg"),
        },
      ],
      metallurgy: [
        {
          name: "Metal/Agricultural/Mining/Pet-gas",
          link: require("../assets/ballot-paper-images/metallurgy_kpk.jpeg"),
        },
      ],
      chemical: [
        {
          name: "Chemical/Polymer/Food",
          link: require("../assets/ballot-paper-images/chemical_kpk.jpeg"),
        },
      ],
      computer: [
        {
          name: "Computer",
          link: require("../assets/ballot-paper-images/computer_kpk.jpeg"),
        },
      ],
      telecom: [
        {
          name: "Telecom/Aero/Avionics",
          link: require("../assets/ballot-paper-images/telecom_kpk.jpeg"),
        },
      ],
      electronics: [
        {
          name: "Electronics/Engg Science",
          link: require("../assets/ballot-paper-images/electronics_kpk.jpeg"),
        },
      ],
      electrical: [
        {
          name: "Electrical/Bio-Medical/Energy",
          link: require("../assets/ballot-paper-images/electrical_kpk.jpeg"),
        },
      ],
    },
  };

  const disciplines = province ? Object.keys(disciplinesArr[province]) : [];
  const selectedDiscipline =
    province && discipline ? disciplinesArr[province][discipline] : null;
  const { width, height } = Dimensions.get("window");

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
        <Picker.Item label="Balochistan" value="baloch" />
        <Picker.Item label="Islamabad" value="isl" />
        <Picker.Item label="Gilgit-Baltistan" value="gb" />
        <Picker.Item label="Azad Kashmir" value="azk" />
      </Picker>

      <Picker
        selectedValue={discipline}
        onValueChange={(itemValue) => setDiscipline(itemValue)}
        style={styles.picker}
        enabled={province !== ""}
      >
        <Picker.Item label="Select Discipline" value="" />
        {disciplines.map((disciplineKey, index) => (
          <Picker.Item
            key={index}
            label={disciplinesArr[province][disciplineKey][0].name}
            value={disciplineKey}
          />
        ))}
      </Picker>

      {selectedDiscipline && (
        <View>
          <Image
            source={selectedDiscipline[0].link}
            style={{ width: width, height: height * 0.6 }}
            resizeMode="cover"
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#fff",
  },
  picker: {
    width: "80%",
    height: 50,
    backgroundColor: "#e0e0e0",
    marginBottom: 20,
    borderRadius: 8,
  },
});

export default PollingStationScreen;
