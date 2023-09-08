import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Results from "./components/Results";
import SearchBar from "./components/SearchBar";
import TableDetailsJeu from "./components/TableDetailsJeu";
import LoadingIcon from "./components/LoadingIcon";

import { RAWG_API_KEY } from "@env";

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchActive, setSearchActive] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [gameResults, setGameResults] = useState([]);
  const [gameSelected, setGameSelected] = useState();

  // On recherche le jeu avec l'API de RAWG
  const handleSearch = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    // On rajoute des tirets dans le terme recherché pour la recherche avec l'api
    //  Ex: Psychonauts 2 devient psychonauts-2
    let termeFinal = searchTerm.split(" ").join("-").toLowerCase();

    // Par défaut, on considère qu'on a aucun résultat
    setGameResults([]);

    // On récupère les résultats
    await fetch(`https://rawg.io/api/games?search=${termeFinal}&key=${RAWG_API_KEY}`)
      .then((resp) => resp.json())
      .then(({ results }) => {
        results === undefined ? setGameResults([]) : setGameResults(results);
      })
      .catch(() => {
        setGameResults("error");
      });
    setSearchTerm("");
    setIsLoading(false);
  };

  // Si l'on choisit parmi les résultats
  const handleGameSelected = (e) => {
    setGameSelected();
    setSearchActive(false);
    setGameResults([]);

    let gameSelectedName = e.target.id;

    setGameSelected(gameSelectedName);
  };

  // Dès que l'on tape sur la barre de recherche
  const handleKeyboardEntry = (e) => {
    setSearchActive(true);
    setSearchTerm(e.target.value); // On enregistre le terme recherché
    setGameSelected();
  };

  // Si on veut remettre à zéro le nom du jeu
  const resetSearch = () => {
    setSearchActive(false);
    setSearchTerm("");
    setGameResults([]);
    setGameSelected();
  };

  return (
    <View style={styles.container}>
      {/* Titre du site/appli */}
      <Text>Optimized settings for PC Games</Text>

      {/* Barre de recherche */}
      <SearchBar
        onPress={handleSearch}
        onChange={handleKeyboardEntry}
        searchActive={searchActive}
        onPressReset={resetSearch}
      />

      {/* Résultats */}
      {/* Chargement */}
      {isLoading && searchActive && <LoadingIcon />}
      {searchActive &&
      gameResults &&
      // Si erreur lors du fetch
      gameResults == "error" ? (
        <Text>Something wrong happened, try later.</Text>
      ) : (
        // Si on a des résultats
        gameResults.length > 0 && (
          // Sinon, on affiche les résultats trouvés
          <Results
            gameResults={gameResults}
            onPointerEnter={handleGameSelected}
          />
        )
      )}

      {/* Les détails du jeu choisi parmi les résultats */}
      {gameSelected && <TableDetailsJeu gameSelected={gameSelected} />}

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D2CACA",
    alignItems: "center",
    justifyContent: "center",
  },
});
