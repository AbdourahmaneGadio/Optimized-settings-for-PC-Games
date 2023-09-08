import { useState, useEffect, useCallback } from "react";
import { StyleSheet, View } from "react-native";
import { Table, TableWrapper, Col } from "react-native-reanimated-table";

export default function TableDetailsJeu({ gameSelected }) {
  const [dataLoaded, setDataLoaded] = useState({
    gameData: [],
    settingsName: [],
    settingsOptions: [],
  });

  // Get all the settings name (ex: Texture, Ray-Tracing, ...)
  function getKeysFromJSON(gamesData) {
    let keysResults = [];

    Object.keys(gamesData).map(function (key) {
      keysResults.push(key);
    });
    return keysResults;
  }

  // Get all the values of the game's settings (ex: High, DLSS, ...)
  function getValuesFromJSON(gamesData) {
    let valuesResults = [];

    Object.values(gamesData).map(function (key) {
      valuesResults.push(key);
    });

    return valuesResults;
  }

  useEffect(() => {
    
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
        });
      } catch (error) {
        console.error(error);
      }
    };

    handleFetch();
  }, []);

  return (
    <View>
      <Table style={{ flexDirection: "row" }} borderStyle={{ borderWidth: 1 }}>
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
  );
}

const styles = StyleSheet.create({
  title: { flex: 2, backgroundColor: "#f6f8fa" },
  titleText: { textAlign: "center" },
});
