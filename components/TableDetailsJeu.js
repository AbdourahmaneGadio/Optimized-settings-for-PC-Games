import { useState, useEffect, useCallback } from "react";
import { StyleSheet, View } from "react-native";
import { Table, TableWrapper, Col } from "react-native-reanimated-table";

export default function TableDetailsJeu({ gameSelected }) {
  const [gameData, setGameData] = useState([]);
  const [titlesGameData, setTitlesGameData] = useState([]);
  const [detailsGameData, setDetailsGameData] = useState([]);

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
    async function fetchData() {
      fetch(
        `https://raw.githubusercontent.com/AbdourahmaneGadio/Optimized-settings-for-PC-Games/master/gamesData/${gameSelected}.json`
      )
        .then((resp) => resp.json())
        .then((data) => {
          const gameDataFetch = data !== undefined ? data : [];
          setGameData(gameDataFetch);
        });
    }
    fetchData();

  }, [setGameData]);


 useEffect(() => {
   async function setGamesTableData() {
     const keysJSON = getKeysFromJSON(gameData);
     setTitlesGameData(keysJSON);

     const valuesJSON = getValuesFromJSON(gameData);
     setDetailsGameData(valuesJSON);
   }

   setGamesTableData();
 }, [setTitlesGameData]);

  console.log(detailsGameData);

  return (
    <View>
      <Table style={{ flexDirection: "row" }} borderStyle={{ borderWidth: 1 }}>
        <TableWrapper style={{ width: 500 }}>
          <TableWrapper style={{ flexDirection: "row" }}>
            <Col
              data={["test", "test"]}
              style={styles.title}
              heightArr={[30, 30, 30, 30]}
              textStyle={styles.titleText}
            />

            <Col
              data={["test", "test"]}
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
