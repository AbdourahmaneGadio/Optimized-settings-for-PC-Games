import { useEffect, useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
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

  {
    /* Show a form to add settings for any game */
  }
  const onPressButton = () => {
    setButtonSettingsClicked(true);
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
        console.error(error);
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
            <Text>No settings found for this game.</Text>
            <Button title="Add settings" onPress={onPressButton} />
          </View>
        )
        }

    </View>
  );
}

const styles = StyleSheet.create({
  title: { flex: 2, backgroundColor: "#f6f8fa" },
  titleText: { textAlign: "center" },
});
