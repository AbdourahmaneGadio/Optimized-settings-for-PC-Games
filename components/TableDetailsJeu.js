import { useEffect, useState } from "react";
import {
  Alert,
  ImageBackground,
  Linking,
  Platform,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { Col, Table, TableWrapper } from "react-native-reanimated-table";
import LoadingIcon from "./LoadingIcon";

export default function TableDetailsJeu({ gameSelected }) {
  const [dataLoaded, setDataLoaded] = useState({
    gameData: [],
    settingsName: [],
    settingsOptions: [],
    isLoading: false,
  });

  let actualLines = [];

  const [buttonSettingsClicked, setButtonSettingsClicked] = useState(false);

  const buttonForSettings = ({ style, onPress, text }) => {
    return (
      <Pressable style={style} onPress={onPress}>
        <Text style={styles.titleText}>{text}</Text>
      </Pressable>
    );
  };

  const [writtenSettingsKeys, setWrittenSettingsKeys] = useState([]);
  const [writtenSettingsValues, setWrittenSettingsValues] = useState([]);

  const handleChangeSettingsKeys = (index, text) => {
    setWrittenSettingsKeys(() => {
      const newSettings = [...writtenSettingsKeys];
      newSettings[index - 1] = text;
      return newSettings;
    });
  };

  const handleChangeSettingsValues = (index, text) => {
    setWrittenSettingsValues(() => {
      const newSettings = [...writtenSettingsValues];
      newSettings[index - 1] = text;
      return newSettings;
    });
  };

  const tableForSettings = () => {
    let indice = 0;

    actualLines = [];

    for (indice = 0; indice < numberSettings; indice++) {
      actualLines.push(
        <View style={styles.multiplesSettingsLines} key={indice}>
          {/* Settings row id */}
          <Text style={styles.titleText}>Settings n° {indice + 1}</Text>
          <TextInput
            style={styles.button}
            placeholder="Example: Textures"
            placeholderTextColor="grey"
            autoCapitalize="words"
            inputMode="text"
            onChangeText={(text) => handleChangeSettingsKeys(indice, text)}
          />
          <TextInput
            style={styles.button}
            placeholder="Example: High"
            placeholderTextColor="grey"
            autoCapitalize="words"
            inputMode="text"
            onChangeText={(text) => handleChangeSettingsValues(indice, text)}
          />
        </View>
      );
    }

    return (
      <ScrollView style={styles.tableSettingsContainer}>
        {actualLines}
      </ScrollView>
    );
  };

  {
    /* Number of settings we want to add */
  }
  const [numberSettings, setNumberSettings] = useState(1);

  {
    /* Show a form to add settings for any game */
  }
  const onPressButton = async () => {
    setButtonSettingsClicked(true);
    Linking.openURL(
      "https://github.com/AbdourahmaneGadio/Optimized-settings-for-PC-Games#want-to-contribute-"
    );
  };

  {
    /* Add settings line */
  }
  const increaseSettingsNumber = () => {
    setNumberSettings(numberSettings + 1);
  };

  {
    /* Remove settings line */
  }
  const decreaseSettingsNumber = () => {
    setNumberSettings(numberSettings - 1);

    let removeSettingsListKeys = [...writtenSettingsKeys];
    removeSettingsListKeys.splice(numberSettings, 1);
    setWrittenSettingsKeys(removeSettingsListKeys);

    let removeSettingsListValues = [...writtenSettingsValues];
    removeSettingsListValues.splice(numberSettings, 1);
    setWrittenSettingsValues(removeSettingsListValues);
  };

  {
    /* Submit settings */
  }
  const submitSettings = () => {
    let settingsFinalList = `Game: ${gameSelected.slug}\n\n`;

    let settingsIndex = 0;

    let error = 0; // 0 if no error, other number if errors

    for (settingsIndex = 0; settingsIndex < numberSettings; settingsIndex++) {
      if (
        writtenSettingsKeys[settingsIndex] == undefined ||
        writtenSettingsValues[settingsIndex] == undefined
      ) {
        alert("Fill all the settings !");
        error += 1;
      } else {
        settingsFinalList += `${writtenSettingsKeys[settingsIndex]} : ${writtenSettingsValues[settingsIndex]}\n\n`;
      }
    }

    if (Platform.OS == "web" && error == 0) {
      if (
        confirm(`Are you sure about your settings ?\n\n${settingsFinalList}`)
      ) {
        alert(
          "Your settings have been submitted ! ( -- No, they don't, it's still WIP :-( -- )"
        );
        setButtonSettingsClicked(false);
        setDataLoaded({ gameData: "" });
      }
    } else {
      Alert.alert(
        "Are you sure about your settings ?",
        `${settingsFinalList}`,
        [
          {
            text: "Cancel",
            style: "cancel",
          },
          {
            text: "OK",
            onPress: () => Alert.alert("Your settings have been submitted !"),
          },
        ]
      );
    }
  };

  {
    /*Get all the settings name (ex: Texture, Ray-Tracing, ...)*/
  }
  function getKeysFromJSON(gamesData) {
    let keysResults = [];

    Object.keys(gamesData).map(function (key) {
      keysResults.push(key);
    });
    return keysResults;
  }

  {
    /*Get all the values of the game's settings (ex: High, DLSS, ...)*/
  }
  function getValuesFromJSON(gamesData) {
    let valuesResults = [];

    Object.values(gamesData).map(function (key) {
      valuesResults.push(key);
    });

    return valuesResults;
  }

  useEffect(() => {
    setDataLoaded({ isLoading: true });

    const handleFetch = async () => {
      let firstCapitalLetter = gameSelected.slug.substring(0, 1).toUpperCase();
      try {
        let response = await fetch(
          `https://raw.githubusercontent.com/AbdourahmaneGadio/Optimized-settings-for-PC-Games/master/gamesData/${firstCapitalLetter}/${gameSelected.slug}.json`
        );

        let data = await response.json();

        const gameDataFetch = (await data) !== undefined ? data : [];

        const keysJSON = getKeysFromJSON(gameDataFetch);

        const valuesJSON = getValuesFromJSON(gameDataFetch);

        setDataLoaded({
          gameData: gameDataFetch,
          settingsName: keysJSON,
          settingsOptions: valuesJSON,
          isLoading: false,
        });
      } catch (error) {
        setDataLoaded({ isLoading: false });
      }
    };

    handleFetch();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {/* Loading */}
      {dataLoaded.isLoading && <LoadingIcon />}

      {/* Table with results */}
      {!dataLoaded.isLoading &&
        dataLoaded.gameData != null &&
        dataLoaded.gameData != "" && (
          <View>
            <ImageBackground
              source={{ uri: gameSelected.background_image }}
              style={{
                alignItems: "center",
                padding: 30,
                justifyContent: "flex-start",
              }}
              resizeMode="cover"
              blurRadius={5}
              imageStyle={{ borderRadius: 30 }}
            >
              <View style={styles.imageContainer}>
                <ImageBackground
                  source={{ uri: gameSelected.background_image }}
                  style={{
                    width: "100%",
                    height: "100%",
                    flex: 1,
                    resizeMode: "cover",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                ></ImageBackground>
              </View>
              <Table
                style={{ flexDirection: "row" }}
                borderStyle={{ borderWidth: 1 }}
              >
                <TableWrapper style={{ width: 500 }}>
                  <TableWrapper style={{ flexDirection: "row" }}>
                    <Col
                      data={dataLoaded.settingsName}
                      style={styles.title}
                      heightArr={[30, 30, 30, 30]}
                      textStyle={styles.titleText}
                    />

                    <Col
                      data={dataLoaded.settingsOptions}
                      style={styles.title}
                      heightArr={[30, 30, 30, 30]}
                      textStyle={styles.titleText}
                    />
                  </TableWrapper>
                </TableWrapper>
              </Table>
            </ImageBackground>
          </View>
        )}

      {/* If no settings are found */}
      {!dataLoaded.isLoading &&
        dataLoaded.gameData == null &&
        !buttonSettingsClicked && (
          <View>
            <Text style={styles.titleText}>
              No settings found for this game.
            </Text>
            <View style={styles.singleButtonContainer}>
              {buttonForSettings({
                style: styles.button,
                onPress: onPressButton,
                text: "Add settings",
              })}
            </View>
          </View>
        )}

      {!dataLoaded.isLoading &&
        dataLoaded.gameData == null &&
        buttonSettingsClicked && (
          <View>
            <Text style={styles.numberSettingsText}>
              Number of settings : {numberSettings}
            </Text>

            {tableForSettings()}
            <View style={styles.multiplesButtonContainer}>
              {/* Button to remove settings */}
              {numberSettings > 1 &&
                buttonForSettings({
                  style: styles.button,
                  onPress: decreaseSettingsNumber,
                  text: "- Remove settings",
                })}

              {/* Button to add settings */}
              {buttonForSettings({
                style: styles.button,
                onPress: increaseSettingsNumber,
                text: "+ Add other settings",
              })}
            </View>
            <View style={styles.singleButtonContainer}>
              {/* Button to submit the settings */}
              {buttonForSettings({
                style: styles.buttonSubmit,
                onPress: submitSettings,
                text: "Submit your settings",
              })}
            </View>
          </View>
        )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    alignSelf: "center",
    alignItems: "center",
  },
  title: {
    flex: 2,
    backgroundColor: "#f6f8fa",
  },
  titleText: {
    textAlign: "center",
    fontFamily: "Quicksand",
  },
  numberSettingsText: {
    color: "red",
    textAlign: "center",
    fontFamily: "Quicksand",
    fontWeight: "bold",
  },
  singleButtonContainer: {
    justifyContent: "center",
    alignContent: "center",
    alignSelf: "center",
    marginTop: 15,
  },
  multiplesButtonContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    alignContent: "center",
    alignSelf: "center",
    marginTop: 50,
    maxHeight: 100,
  },
  button: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 15,
    margin: 5,
  },
  buttonSubmit: {
    backgroundColor: "#C1ECBA",
    borderRadius: 20,
    padding: 15,
    margin: 5,
  },
  tableSettingsContainer: {
    flex: 1,
    flexDirection: "column",
    maxHeight: 350,
    marginTop: 20,
  },
  multiplesSettingsLines: {
    marginTop: 20,
  },

  imageContainer: {
    width: 300,
    height: 180,
    borderRadius: 20,
    overflow: "hidden",
    marginBottom: 20,
  },
  imageCover: {
    width: "100%",
    height: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
