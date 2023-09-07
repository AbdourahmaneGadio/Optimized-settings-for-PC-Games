import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Table, TableWrapper, Col } from "react-native-reanimated-table";

export default function TableDetailsJeu({ gameSelected }) {

    const [gameData, setGameData] = useState([]);

     fetch("/gamesData/" + { gameSelected })
       .then((resp) => resp.json())
       .then(({ results }) => {
         results === undefined ? setGameData([]) : setGameData(results);
       })
       .catch(() => {
         alert("Something happened when fetching game's settings. Try later...");
       });
    
  // On récupère les données du jeu

  let titlesGameData = getKeysFromJSON(gameData);
  let detailsGameData = getValuesFromJSON(gameData);

  // Get all the settings name (ex: Texture, Ray-Tracing, ...)
  function getKeysFromJSON(gamesData) {
    let keysResults = [];

    gamesData && Object.keys(gamesData).map(function (key) {
      keysResults.push(key);
    });

    return keysResults;
  }

  // Get all the values of the game's settings (ex: High, DLSS, ...)
  function getValuesFromJSON(gamesData) {
    let valuesResults = [];

     gamesData &&
    Object.values(gamesData).map(function (key) {
         valuesResults.push(key);
       });

    return valuesResults;
  }

  return (
    <View>
      {gameData && gameData.length > 0 ? (
        <Table
          style={{ flexDirection: "row" }}
          borderStyle={{ borderWidth: 1 }}
        >
          <TableWrapper style={{ width: 500 }}>
            <TableWrapper style={{ flexDirection: "row" }}>
              <Col
                data={titlesGameData}
                style={styles.title}
                heightArr={[30, 30, 30, 30]}
                textStyle={styles.titleText}
              />

              <Col
                data={detailsGameData}
                style={styles.title}
                heightArr={[30, 30, 30, 30]}
                textStyle={styles.titleText}
              />
            </TableWrapper>
          </TableWrapper>
        </Table>
      ) : (
        <Text>Game's settings for this game doesn't exist yet.</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  title: { flex: 2, backgroundColor: "#f6f8fa" },
  titleText: { textAlign: "center" },
});
