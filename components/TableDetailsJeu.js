import { useEffect, useState } from "react";
import { Button, StyleSheet, Text, View, TouchableOpacity } from "react-native";
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

  const tableForSettings = () => {

   const addLines = () => {
      let test = [];
let i;
      for(i = 0; i < numberSettings; i++){
        test.push(
          <TableWrapper style={{ flexDirection: "row" }}>
            <Col
              data={["test"]}
              style={styles.title}
              heightArr={[30, 30, 30, 30]}
              textStyle={styles.titleText}
            />

            <Col
              data={["test"]}
              style={styles.title}
              heightArr={[30, 30, 30, 30]}
              textStyle={styles.titleText}
            />
          </TableWrapper>
        );
      }

      return test;
    }

    return (
      <View>
        <Table
          style={{ flexDirection: "row" }}
          borderStyle={{ borderWidth: 1 }}
        >
          <TableWrapper style={{ width: 500 }}>
             {addLines()}
          </TableWrapper>
        </Table>
      </View>
    );
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
    if (numberSettings > 1) {
      setNumberSettings(numberSettings - 1);
    }
  };

  {
    /* Submit settings */
  }
  const submitSettings = () => {
    alert("Your settings have been submited");
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
      try {
        let response = await fetch(
          `https://raw.githubusercontent.com/AbdourahmaneGadio/Optimized-settings-for-PC-Games/master/gamesData/${gameSelected}.json`
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
            <View style={styles.buttonContainer}>
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
            <Text>Number of settings : {numberSettings}</Text>
            <Text>Settings's name :</Text>
            <Text>Value : </Text>
            {tableForSettings()}
            <View style={styles.buttonAddSettingsContainer}>
              {/* Button to remove settings */}
              {buttonForSettings({
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
            <View style={styles.buttonAddSettingsContainer}>
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
  buttonContainer: {
    marginTop: 15,
  },
  buttonAddSettingsContainer: {
    flex: 1,
    flexDirection: "row",
    marginTop: 15,
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
    width: "100%",
  },
});
