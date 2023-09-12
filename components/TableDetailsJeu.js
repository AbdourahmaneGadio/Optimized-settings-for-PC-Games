import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
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

  const [buttonSettingsClicked, setButtonSettingsClicked] = useState(false);

  const buttonForSettings = ({ style, onPress, text }) => {
    return (
      <TouchableOpacity style={style} onPress={onPress}>
        <Text style={styles.titleText}>{text}</Text>
      </TouchableOpacity>
    );
  };

  const handleChangeSettingsKeys = (index, text) => {
  }

  const handleChangeSettingsValues = (index, text) => {
  }

  const tableForSettings = () => {
    const addLines = () => {
      let actualLines = [];
      let indice = 0;
      for (indice = 0; indice < numberSettings; indice++) {
        actualLines.push(
          <View style={styles.multiplesSettingsLines} key={indice}>
            {/* Settings row id */}
            <Text style={styles.titleText}>
              Settings n° {indice + 1}
            </Text>
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

      return <View>{actualLines}</View>;
    };

    return <View>{addLines()}</View>;
  };

  {
    /* Number of settings we want to add */
  }
  const [numberSettings, setNumberSettings] = useState(0);

  {
    /* Show a form to add settings for any game */
  }
  const onPressButton = () => {
    setButtonSettingsClicked(true);
    setNumberSettings(1);
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
  };

  {
    /* Submit settings */
  }
  const submitSettings = () => {
    let settingsList = "";
    console.log(settingsValues);
    if (confirm(`Are you sure about your settings ?\n\n${settingsList}`)) {
      alert('Your settings have been submitted !');
    };
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
      let firstCapitalLetter = gameSelected.substring(0, 1).toUpperCase();
      try {
        let response = await fetch(
          `https://raw.githubusercontent.com/AbdourahmaneGadio/Optimized-settings-for-PC-Games/master/gamesData/${firstCapitalLetter}/${gameSelected}.json`
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
    <View>
      {/* Chargement */}
      {dataLoaded.isLoading && <LoadingIcon />}

      {/* La table avec les résultats */}
      {!dataLoaded.isLoading && dataLoaded.gameData != null && (
        <View>
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
        </View>
      )}

      {/* Si aucun paramètre existe */}
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
            <Text style={styles.titleText}>
              Number of settings : {numberSettings}
            </Text>

            {tableForSettings()}
            <View style={styles.multiplesButtonContainer}>

              {/* Button to remove settings */}
              {numberSettings > 1 && buttonForSettings({
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
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    flex: 2,
    backgroundColor: "#f6f8fa",
  },
  titleText: {
    textAlign: "center",
    fontFamily: "Quicksand",
  },
  singleButtonContainer: {
    justifyContent: "center",
    alignContent: "center",
    alignSelf: "center",
    marginTop: 15,
  },
  multiplesSettingsLines: {
    marginTop: 20,
  },
  multiplesButtonContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginTop: 20,
    maxHeight: 100,
  },
  button: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 15,
    margin: 5,
  },
  buttonSubmit: {
    backgroundColor: "green",
    borderRadius: 20,
    padding: 15,
    margin: 5,
  },
});
