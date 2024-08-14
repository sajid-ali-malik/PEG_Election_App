import React, { useState } from "react";
import { View, StyleSheet, Linking, Image } from "react-native";
import { Picker } from "@react-native-picker/picker";

const PollingStationScreen = () => {
  const [province, setProvince] = useState("");
  const [city, setCity] = useState("");
  const [station, setStation] = useState("");

  const provinceCityData = {
    punjab: {
      Lahore: [
        {
          name: "DHA Phase IV Lahore",
          link: "https://www.google.com/maps/place/31%C2%B027'42.6%22N+74%C2%B023'04.4%22E/@31.4618359,74.3819789,17z/data=!3m1!4b1!4m4!3m3!8m2!3d31.4618359!4d74.3845538?entry=ttu",
        },
        {
          name: "Zarar Shaheed Road-1, Lahore",
          link: "https://www.google.com/maps/place/31%C2%B032'46.1%22N+74%C2%B025'01.6%22E/@31.5461274,74.4145297,17z/data=!3m1!4b1!4m4!3m3!8m2!3d31.5461274!4d74.4171046?entry=ttu",
        },
        {
          name: "Beddian Road, Lahore",
          link: "https://www.google.com/maps/place/31%C2%B024'37.6%22N+74%C2%B029'20.3%22E/@31.4104326,74.4863952,17z/data=!3m1!4b1!4m4!3m3!8m2!3d31.4104326!4d74.4889701?entry=ttu",
        },
        {
          name: "Mega Data Gunj Bukhsh Sanda Road",
          link: "https://www.google.com/maps/place/31%C2%B033'42.0%22N+74%C2%B017'55.6%22E/@31.5616783,74.2961947,17z/data=!3m1!4b1!4m4!3m3!8m2!3d31.5616783!4d74.2987696?entry=ttu",
        },
        {
          name: "Mega Peco Road, Township",
          link: "https://www.google.com/maps?q=31.46605054,74.31056207",
        },
        {
          name: "Kahna nau, Ferozpur Road",
          link: "https://www.google.com/maps?q=31.35550666,74.37204017",
        },
        {
          name: "Village Barki, Main Barki Road",
          link: "https://www.google.com/maps?q=31.47359137,74.51686576",
        },
        {
          name: "DHA, Phase 1",
          link: "https://www.google.com/maps?q=31.48407042,74.39365165",
        },
        {
          name: "DSFU Abbot Road",
          link: "https://www.google.com/maps?q=31.56390604,74.32928739",
        },
        {
          name: "Chung",
          link: "https://www.google.com/maps?q=31.40285725,74.16114333",
        },
        {
          name: "Raiwind",
          link: "https://www.google.com/maps?q=31.26043756,74.22034656",
        },
        {
          name: "Jallo",
          link: "https://www.google.com/maps?q=31.59540348,74.48251201",
        },
      ],

      Faisalabad: [
        {
          name: "G.M.Abad Faisalabad",
          link: "https://www.google.com/maps/place/31%C2%B025'59.9%22N+73%C2%B002'43.7%22E/@31.4332952,73.0428826,17z/data=!3m1!4b1!4m4!3m3!8m2!3d31.4332952!4d73.0454575?entry=ttu",
        },
        {
          name: "Executive Samanabad Faisalabad",
          link: "https://www.google.com/maps/place/31%C2%B023'39.3%22N+73%C2%B004'31.1%22E/@31.3942449,73.0727297,17z/data=!3m1!4b1!4m4!3m3!8m2!3d31.3942449!4d73.0753046?entry=ttu",
        },
        {
          name: "Big NRC Faisalabad",
          link: "https://www.google.com/maps/place/31%C2%B024'07.6%22N+73%C2%B006'16.2%22E/@31.402097,73.1019315,17z/data=!3m1!4b1!4m4!3m3!8m2!3d31.402097!4d73.1045064?entry=ttu",
        },
        {
          name: "Executive Jhang Road Faisalabad",
          link: "https://www.google.com/maps/place/31%C2%B024'15.6%22N+73%C2%B002'37.2%22E/@31.4043315,73.0410998,17z/data=!3m1!4b1!4m4!3m3!8m2!3d31.4043315!4d73.0436747?entry=ttu",
        },
      ],

      Multan: [
        {
          name: "Multan Cannt",
          link: "https://www.google.com/maps?q=30.207491,71.460629",
        },
        {
          name: "Multan City",
          link: "https://www.google.com/maps?q=30.240859,71.483093",
        },
        {
          name: "NRC Multan",
          link: "https://www.google.com/maps?q=30.240859,71.483093",
        },
        {
          name: "Mumtazabad Multan",
          link: "https://www.google.com/maps?q=30.171778,71.479474",
        },
      ],
      Rawalpindi: [
        {
          name: "Mega Murree Road",
          link: "https://www.google.com/maps?q=33.636184,73.075038",
        },
        {
          name: "Bakra Mandi",
          link: "https://www.google.com/maps?q=33.570607,73.036678",
        },
        {
          name: "Rawalpindi Cannt",
          link: "https://www.google.com/maps?q=33.585815,73.054442",
        },
        {
          name: "Rawat",
          link: "https://www.google.com/maps?q=33.501351,73.195051",
        },
        {
          name: "Adiala Road",
          link: "https://www.google.com/maps?q=33.547248,73.054887",
        },
        {
          name: "Chakri",
          link: "https://www.google.com/maps?q=33.306112,72.775497",
        },
      ],

      Taxila: [
        {
          name: "Faisal Shaheed Road",
          link: "https://www.google.com/maps?q=33.749392,72.804902",
        },
        {
          name: "Wah Cannt",
          link: "https://www.google.com/maps?q=33.763275,72.77035",
        },
      ],
      Attock: [
        {
          name: "Ikhlas Khan Plaza",
          link: "https://www.google.com/maps/place/33%C2%B048'30.0%22N+72%C2%B021'41.5%22E/@33.808341,72.3589541,17z/data=!3m1!4b1!4m4!3m3!8m2!3d33.808341!4d72.361529?entry=ttu",
        },
      ],
      Bahawalnagar: [
        {
          name: "Nadra Office",
          link: "https://www.google.com/maps/place/29%C2%B059'25.0%22N+73%C2%B013'40.9%22E/@29.990277,73.2254391,17z/data=!3m1!4b1!4m4!3m3!8m2!3d29.990277!4d73.228014?entry=ttu",
        },
      ],
      Bahawalpur: [
        {
          name: "Nadra Office",
          link: "https://www.google.com/maps/place/29%C2%B023'49.3%22N+71%C2%B039'19.3%22E/@29.39702,71.6527851,17z/data=!3m1!4b1!4m4!3m3!8m2!3d29.39702!4d71.65536?entry=ttu",
        },
      ],
      Chakwal: [
        {
          name: "NADRA Registration Center",
          link: "https://www.google.com/maps/place/32%C2%B056'25.9%22N+72%C2%B051'33.5%22E/@32.940527,72.8567301,17z/data=!3m1!4b1!4m4!3m3!8m2!3d32.940527!4d72.859305?entry=ttu",
        },
      ],
      Chashma: [
        {
          name: "Nadra Office",
          link: "https://www.google.com/maps/place/32%C2%B027'17.6%22N+71%C2%B028'37.2%22E/@32.4548754,71.4744259,17z/data=!3m1!4b1!4m4!3m3!8m2!3d32.4548754!4d71.4770008?entry=ttu",
        },
      ],

      DeraGhaziKhan: [
        {
          name: "Multan Road",
          link: "https://www.google.com/maps/place/30%C2%B002'17.1%22N+70%C2%B038'47.9%22E/@30.038084,70.6440541,17z/data=!3m1!4b1!4m4!3m3!8m2!3d30.038084!4d70.646629?entry=ttu",
        },
      ],

      Gujranwala: [
        {
          name: "EPO",
          link: "https://www.google.com/maps/place/32%C2%B013'22.5%22N+74%C2%B010'12.0%22E/@32.222927,74.1674121,17z/data=!3m1!4b1!4m4!3m3!8m2!3d32.222927!4d74.169987?entry=ttu",
        },
      ],

      Gujrat: [
        {
          name: "Gujrat",
          link: "https://www.google.com/maps/place/32%C2%B035'16.2%22N+74%C2%B003'05.5%22E/@32.5878357,74.0489513,17z/data=!3m1!4b1!4m4!3m3!8m2!3d32.5878357!4d74.0515262?entry=ttu",
        },
      ],
      Hassan_Abdal: [
        {
          name: "Hassan Abdal",
          link: "https://www.google.com/maps/place/33%C2%B049'19.8%22N+72%C2%B040'37.3%22E/@33.822153,72.6744631,17z/data=!3m1!4b1!4m4!3m3!8m2!3d33.822153!4d72.677038?entry=ttu",
        },
      ],
      Jhelum: [
        {
          name: "Jhelum",
          link: "https://www.google.com/maps/search/Ketchery+Road,+Opposite+Iftekhar+Hospital,+Jhelum/@32.823684,72.892038,10z?entry=ttu",
        },
      ],
      Khanewal: [
        {
          name: "Khanewal",
          link: "https://www.google.com/maps/place/30%C2%B018'42.8%22N+71%C2%B056'55.4%22E/@30.31189,71.9461551,17z/data=!3m1!4b1!4m4!3m3!8m2!3d30.31189!4d71.94873?entry=ttu",
        },
      ],
      Khushab: [
        {
          name: "Khushab",
          link: "https://www.google.com/maps/place/32%C2%B018'02.0%22N+72%C2%B021'09.4%22E/@32.3005502,72.3500377,17z/data=!3m1!4b1!4m4!3m3!8m2!3d32.3005502!4d72.3526126?entry=ttu",
        },
      ],

      Layyah: [
        {
          name: "Layyah",
          link: "https://www.google.com/maps?q=30.966957,70.973946",
        },
      ],
      Mianwali: [
        {
          name: "Mianwali",
          link: "https://www.google.com/maps?q=32.58037,71.5366375",
        },
      ],

      Muzaffargarh: [
        {
          name: "Muzaffargarh",
          link: "https://www.google.com/maps?q=30.073063,71.185395",
        },
      ],
      Okara: [
        {
          name: "Okara",
          link: "https://www.google.com/maps?q=30.073063,71.185395",
        },
      ],
      RahimYarKhan: [
        {
          name: "Rahim Yar Khan",
          link: "https://www.google.com/maps?q=28.436878,70.306419",
        },
      ],

      Sahiwal: [
        {
          name: "Sahiwal",
          link: "https://www.google.com/maps?q=30.6795589,73.1211406",
        },
      ],
      Sargodha: [
        {
          name: "Sargodha",
          link: "https://www.google.com/maps?q=32.0892178,72.6592755",
        },
      ],
      Sheikhupura: [
        {
          name: "Sheikhupura",
          link: "https://www.google.com/maps?q=31.711337,73.966301",
        },
      ],

      TobaTekSingh: [
        {
          name: "Toba Tek Singh",
          link: "https://www.google.com/maps?q=30.9608883,72.4883779",
        },
      ],
      Vehari: [
        {
          name: "Vehari",
          link: "https://www.google.com/maps?q=30.038309,72.358317",
        },
      ],
      Parco_Refinary_Qasba_Gujrat: [
        {
          name: "MRV",
          link: "https://www.google.com/maps?q=30.165208,70.956569",
        },
      ],
    },
    // sindh: ["Karachi", "Hyderabad", "Sukkur", "Larkana"],

    sindh: {
      Badin: [
        {
          name: "NRC Khoski Road",
          link: "https://www.google.com/maps?q=24.65948096,68.84810536",
        },
      ],
      Dadu: [
        {
          name: "Nadra Office Dadu",
          link: "https://www.google.com/maps?q=26.729869,67.751754",
        },
      ],
      Ghotki: [
        {
          name: "Nadra Office",
          link: "https://www.google.com/maps?q=28.005113,69.329932",
        },
      ],
      Hyderabad: [
        {
          name: "Big NRC Hyderabad",
          link: "https://www.google.com/maps?q=25.364123,68.360581",
        },
        {
          name: "Near Liberty Market",
          link: "https://www.google.com/maps?q=25.39973597,68.36639504",
        },
        {
          name: "State Life Building Latifabad",
          link: "https://www.google.com/maps?q=25.37978278,68.33628048",
        },
        {
          name: "Qasimabad",
          link: "https://www.google.com/maps?q=25.39045298,68.33479224",
        },
        {
          name: "Pakka Qilla",
          link: "https://www.google.com/maps?q=25.38562859,68.37206807",
        },
      ],
      Jacobabad: [
        {
          name: "Nadra Office",
          link: "https://www.google.com/maps?q=28.23877483,68.47160235",
        },
      ],
      Jamshoro: [
        {
          name: "Taluka Hospital Manjhand",
          link: "https://www.google.com/maps?q=25.90717008,68.23333634",
        },
      ],
      Kandhkot: [
        {
          name: "Nadra Office",
          link: "https://www.google.com/maps?q=28.232422,69.185646",
        },
      ],
      Karachi: [
        {
          name: "Mega DHA Karachi",
          link: "https://www.google.com/maps?q=24.83620142,67.07027803",
        },
        {
          name: "Mega North Nazimabad",
          link: "https://www.google.com/maps?q=24.94628251,67.05121097",
        },
        {
          name: "Mega Siemens Chowrangi",
          link: "https://www.google.com/maps?q=24.90596498,67.00565192",
        },
        {
          name: "Lyari",
          link: "https://www.google.com/maps?q=24.868353,66.996182",
        },
        {
          name: "Liaqatabad-KHI",
          link: "https://www.google.com/maps?q=24.90964,67.038321",
        },
        {
          name: "Landhi",
          link: "https://www.google.com/maps?q=24.840458,67.186829",
        },
        {
          name: "Karachi Malir",
          link: "https://www.google.com/maps?q=24.87141,67.19766",
        },
        {
          name: "Gulshan-e-Hadid",
          link: "https://www.google.com/maps?q=24.865517,67.351829",
        },
        {
          name: "Executive Shahra-e-Quaideen",
          link: "https://www.google.com/maps?q=24.866828,67.052537",
        },
        {
          name: "Executive Clifton",
          link: "https://www.google.com/maps?q=24.8289461,67.0337871",
        },
        {
          name: "DHA, Nisar Shaheed Park",
          link: "https://www.google.com/maps?q=24.826469,67.063311",
        },
        {
          name: "Big Center East",
          link: "https://www.google.com/maps?q=24.938527,67.150829",
        },
        {
          name: "Awami Markaz Shahra-e-Faisal",
          link: "https://www.google.com/maps?q=24.870347,67.090207",
        },
        {
          name: "Orangi Town",
          link: "https://www.google.com/maps?q=24.941679,66.998183",
        },
        {
          name: "Saoodabad",
          link: "https://www.google.com/maps?q=24.90205792,67.19747808",
        },
        {
          name: "Shah Faisal Colony",
          link: "https://www.google.com/maps?q=24.88465447,67.14671186",
        },
      ],
      Guddu: [
        {
          name: "Nadra Office Kashmore",
          link: "https://www.google.com/maps?q=28.44152,69.59552",
        },
      ],
      Hala: [
        {
          name: "Nadra Office",
          link: "https://www.google.com/maps?q=25.81760087,68.41741237",
        },
      ],
      Rohri: [
        {
          name: "Nadra Office",
          link: "https://www.google.com/maps?q=27.684964,68.883882",
        },
      ],
      KhairpurMir: [
        {
          name: "Nadra Office",
          link: "https://www.google.com/maps?q=27.5165065,68.76170594",
        },
      ],
      Larkana: [
        {
          name: "Nadra Office",
          link: "https://www.google.com/maps?q=27.5774344,68.22489446",
        },
      ],
      MirpurKhas: [
        {
          name: "Masroor Baig Road",
          link: "https://www.google.com/maps?q=25.52632577,69.00764756",
        },
      ],
      Moro: [
        {
          name: "Nadra Office",
          link: "https://www.google.com/maps?q=26.8354535,68.1131708",
        },
      ],
      NausharoFerco: [
        {
          name: "Nadra Office",
          link: "https://www.google.com/maps?q=26.8354535,68.1131708",
        },
      ],
      Sanghar: [
        {
          name: "Nadra Office",
          link: "https://www.google.com/maps?q=26.0436975,68.9359839",
        },
      ],
      ShaheedBenazirabad: [
        {
          name: "Sanghar Road, Nawab Shah",
          link: "https://www.google.com/maps?q=26.247948,68.430483",
        },
      ],
      Shikarpur: [
        {
          name: "DC compound Sukkur Road",
          link: "https://www.google.com/maps?q=27.940992,68.652662",
        },
      ],
      PanuAqil: [
        {
          name: "Bhellar Road, National Highway Bypass",
          link: "https://www.google.com/maps?q=27.86676947,69.11901085",
        },
      ],
      Tharparkar: [
        {
          name: "Revenue Colony Mithi",
          link: "https://www.google.com/maps?q=24.74749422,69.79468784",
        },
      ],
      Thatta: [
        {
          name: "Main National Highway",
          link: "https://www.google.com/maps?q=24.750631,67.919084",
        },
      ],
      Umerkot: [
        {
          name: "Nadra Office",
          link: "https://www.google.com/maps?q=25.36776803,69.73531948",
        },
      ],
      Ranipur: [
        {
          name: "Nadra Office",
          link: "https://www.google.com/maps?q=27.35593359,68.53444498",
        },
      ],
      Daharki: [
        {
          name: "Nadra Office",
          link: "https://www.google.com/maps?q=28.046148,69.672627",
        },
      ],
      Islamkot: [
        {
          name: "Union Council Building, Taluka",
          link: "https://www.google.com/maps?q=24.69923974,70.17454969",
        },
      ],
    },

    kpk: {
      Abbotabad: [
        {
          name: "Nadra Office",
          link: "https://www.google.com/maps?q=34.141323,73.21339",
        },
      ],
      DasuUpperKohistan: [
        {
          name: "NRC Kohistan",
          link: "https://www.google.com/maps?q=34.141323,73.21339",
        },
      ],
      Bannu: [
        {
          name: "Nadra Complex",
          link: "https://www.google.com/maps?q=32.98893,70.598142",
        },
      ],
      Charsada: [
        {
          name: "Tangi Road Kausarabad",
          link: "https://www.google.com/maps?q=34.15738334,71.75061186",
        },
      ],
      Chitral: [
        {
          name: "Nadra Complex",
          link: "https://www.google.com/maps?q=35.850379,71.792113",
        },
      ],
      DeraIsmailKhan: [
        {
          name: "Near Mehmood Eye Hospital",
          link: "https://www.google.com/maps?q=31.81269444,70.91877778",
        },
      ],
      Haripur: [
        {
          name: "P.O Sarai Salah",
          link: "https://www.google.com/maps?q=33.9908658,72.9571986",
        },
      ],
      Kohat: [
        {
          name: "Nadra Complex",
          link: "https://www.google.com/maps?q=33.6056642,71.4631905",
        },
      ],
      Karak: [
        {
          name: "Nadra Office",
          link: "https://www.google.com/maps?q=33.105049,71.10359",
        },
      ],
      Mansehra: [
        {
          name: "Near Lari Ada",
          link: "https://www.google.com/maps?q=34.352296,73.201224",
        },
      ],
      Mardan: [
        {
          name: "Mardan",
          link: "https://www.google.com/maps?q=34.140194,72.024882",
        },
      ],
      Nowshera: [
        {
          name: "Hakeemabad",
          link: "https://www.google.com/maps?q=34.008412,72.042665",
        },
      ],
      Peshawar: [
        {
          name: "Mega Peshawar",
          link: "https://www.google.com/maps?q=34.0089211,71.5150907",
        },
        {
          name: "Mega Ring Road",
          link: "https://www.google.com/maps?q=34.02119357,71.62129604",
        },
        {
          name: "Peshawar Cannt",
          link: "https://www.google.com/maps?q=33.9998334,71.5452665",
        },
        {
          name: "Canal Town",
          link: "https://www.google.com/maps?q=33.997689,71.465068",
        },
        {
          name: "VIP NRX RHO Hayatabad",
          link: "https://www.google.com/maps?q=33.991318,71.440272",
        },
      ],
      Swabi: [
        {
          name: "Mehmoodabad",
          link: "https://www.google.com/maps?q=34.096403,72.462503",
        },
      ],
      Swat: [
        {
          name: "Nadra Complex",
          link: "https://www.google.com/maps?q=34.7697889,72.3404312",
        },
      ],
      Malakand: [
        {
          name: "Zoor Talab Market",
          link: "https://www.google.com/maps?q=34.61373,71.9611",
        },
      ],
      Risalpur: [
        {
          name: "Nadra Mobile Van",
          link: "https://www.google.com/maps?q=34.052822,71.989185",
        },
      ],
      Timaragara: [
        {
          name: "Dir Lower",
          link: "https://www.google.com/maps?q=34.8357696,71.8447333",
        },
      ],
      Chakdara: [
        {
          name: "University Road Darbar",
          link: "https://www.google.com/maps?q=34.663831,72.03843",
        },
      ],
    },
    balochistan: {
      DeraBugti: [
        {
          name: "Achanak Chowk Bazaar",
          link: "https://www.google.com/maps?q=29.032355,69.156957",
        },
      ],
      Gawadar: [
        {
          name: "GPA Civil Centre",
          link: "https://www.google.com/maps?q=25.198828,62.34399",
        },
      ],
      Turbat: [
        {
          name: "Mekran Plaza",
          link: "https://www.google.com/maps?q=26.003195,63.068208",
        },
      ],
      Khuzdar: [
        {
          name: "DC Complex",
          link: "https://www.google.com/maps?q=27.805002,66.601693",
        },
      ],
      Lasbela: [
        {
          name: "Civic Center, Nadra Office",
          link: "https://www.google.com/maps?q=25.037027,66.873873",
        },
      ],
      Loralai: [
        {
          name: "Majeed Colony",
          link: "https://www.google.com/maps?q=30.374874,68.60173",
        },
      ],
      DeraMuradJamali: [
        {
          name: "Naseerabad",
          link: "https://www.google.com/maps?q=28.54363889,68.21719444",
        },
      ],
      Panjgur: [
        {
          name: "Near DC Office",
          link: "https://www.google.com/maps?q=26.976877,64.111089",
        },
      ],
      Noshki: [
        {
          name: "Near Civil Hospital",
          link: "https://www.google.com/maps?q=29.554137,66.016608",
        },
      ],
      Quetta: [
        {
          name: "Sariab Road",
          link: "https://www.google.com/maps?q=30.174984,66.993421",
        },
        {
          name: "Quetta Central",
          link: "https://www.google.com/maps?q=30.205257,67.005182",
        },
        {
          name: "Quetta Cannt",
          link: "https://www.google.com/maps?q=30.217013,67.034301",
        },
        {
          name: "Mega Quetta",
          link: "https://www.google.com/maps?q=30.249008,66.978471",
        },
        {
          name: "VIP NRC RHO Quetta",
          link: "https://www.google.com/maps?q=30.177226,66.999223",
        },
      ],
      Sibi: [
        {
          name: "Tandi Sarak",
          link: "https://www.google.com/maps?q=29.544981,67.884298",
        },
      ],
      Zhob: [
        {
          name: "Near DC Office",
          link: "https://www.google.com/maps?q=31.347837,69.455967",
        },
      ],
    },
    gb_azk: {
      Kotli: [
        {
          name: "General Bus Stand",
          link: "https://www.google.com/maps?q=33.522821,73.906731",
        },
      ],
      Mirpur: [
        {
          name: "Quaid e Azam Cricket Stadium",
          link: "https://www.google.com/maps?q=33.1444172,73.745743",
        },
      ],
      Muzaffarabad: [
        {
          name: "Nadra Zonal Office",
          link: "https://www.google.com/maps?q=34.375832,73.468467",
        },
      ],
      Rawalakot: [
        {
          name: "NSRC Mong Road",
          link: "https://www.google.com/maps?q=33.853865,73.752478",
        },
      ],
      Gilgit: [
        {
          name: "Near Helo Chowk",
          link: "https://www.google.com/maps?q=35.91176,74.347487",
        },
      ],
      Skardu: [
        {
          name: "NSRC Hamid Gharh Chowk",
          link: "https://www.google.com/maps?q=35.29302,75.650371",
        },
      ],
      Chilas: [
        {
          name: "Diamir",
          link: "https://www.google.com/maps?q=35.412062,74.105408",
        },
      ],
    },

    federal_islamabad: {
      Islamabad: [
        {
          name: "Mega Blue Area",
          link: "https://www.google.com/maps?q=33.70938416,73.05614496",
        },
        {
          name: "Taramri",
          link: "https://www.google.com/maps?q=33.642897,73.160028",
        },
        {
          name: "Bhara Khu",
          link: "https://www.google.com/maps?q=33.743752,73.187266",
        },
        {
          name: "PHQ",
          link: "https://www.google.com/maps?q=33.67197859,73.01984004",
        },
      ],
    },
  };
  const cities = province ? Object.keys(provinceCityData[province]) : [];
  const stations = city ? provinceCityData[province][city] : [];

  const openMap = (link) => {
    Linking.openURL(link);
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/app-images/azadibg.png")}
        style={styles.topImage}
      />

      <Picker
        selectedValue={province}
        onValueChange={(itemValue) => {
          setProvince(itemValue);
          setCity("");
          setStation("");
        }}
        style={styles.picker}
      >
        <Picker.Item label="Select Province" value="" />
        <Picker.Item label="Punjab" value="punjab" />
        <Picker.Item label="Sindh" value="sindh" />
        <Picker.Item label="KPK" value="kpk" />
        <Picker.Item label="Balochistan" value="balochistan" />
        <Picker.Item label="GB/AZK" value="gb_azk" />
        <Picker.Item label="Federal Islamabad" value="federal_islamabad" />
      </Picker>

      {province && cities.length > 0 && (
        <Picker
          selectedValue={city}
          onValueChange={(itemValue) => {
            setCity(itemValue);
            setStation("");
          }}
          style={styles.picker}
        >
          <Picker.Item label="Select City" value="" />
          {cities.map((cityName, index) => (
            <Picker.Item key={index} label={cityName} value={cityName} />
          ))}
        </Picker>
      )}

      {city && stations.length > 0 && (
        <Picker
          selectedValue={station}
          onValueChange={(itemValue) => openMap(itemValue.link)}
          style={styles.picker}
        >
          <Picker.Item label="Select Polling Station" value="" />
          {stations.map((stationData, index) => (
            <Picker.Item
              key={index}
              label={stationData.name}
              value={stationData}
            />
          ))}
        </Picker>
      )}

      <Image
        source={require("../assets/app-images/bottom.png")}
        style={styles.bottomImage}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
    backgroundColor: "#D3D3D3",
  },
  picker: {
    height: 50,
    width: "100%",
    color: "#fff",
    backgroundColor: "#1f8c07",
    marginBottom: 16,
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  bottomImage: {
    position: "absolute",
    bottom: "-23%",
    left: "-5%",
    width: "120%",
    height: "60%",
    resizeMode: "contain",
  },
  topImage: {
    position: "absolute",
    top: "3%",
    left: "13%",
    width: "80%",
    height: "40%",
    resizeMode: "contain",
  },
});

export default PollingStationScreen;
