import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import LoadingIcon from "./components/LoadingIcon";
import Results from "./components/Results";
import SearchBar from "./components/SearchBar";
import TableDetailsJeu from "./components/TableDetailsJeu";
import { useFonts, Quicksand_300Light } from "@expo-google-fonts/quicksand";

import { RAWG_API_KEY } from "@env";

export default function App() {
  let [fontsLoaded, fontError] = useFonts({
    Quicksand_300Light,
  });

  const [searchTerm, setSearchTerm] = useState("");
  const [searchActive, setSearchActive] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [gameResults, setGameResults] = useState([]);
  const [gameSelected, setGameSelected] = useState();

  {
    /* On recherche le jeu avec l'API de RAWG */
  }
  const handleSearch = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    {
      /* On rajoute des tirets dans le terme recherché pour la recherche avec l'api */
    }
    {
      /*  Ex: Psychonauts 2 devient psychonauts-2 */
    }
    let termeFinal = searchTerm.split(" ").join("-").toLowerCase();

    {
      /* Par défaut, on considère qu'on a aucun résultat */
    }
    setGameResults([]);

    {
      /* On récupère les résultats */
    }
    await fetch(
      `https://rawg.io/api/games?search=${termeFinal}&key=${RAWG_API_KEY}`
    )
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

  {
    /* Si l'on choisit parmi les résultats */
  }
  const handleGameSelected = (e) => {
    setGameSelected();
    setSearchActive(false);
    setGameResults([]);

    let gameSelectedName = e;

    setGameSelected(gameSelectedName);
  };

  {
    /* Dès que l'on tape sur la barre de recherche */
  }
  const handleKeyboardEntry = (e) => {
    setSearchActive(true);
    {
      /* On enregistre le terme recherché */
    }
    setSearchTerm(e);
    setGameSelected();
  };

  {
    /* Si on veut remettre à zéro le nom du jeu */
  }
  const resetSearch = () => {
    setSearchActive(false);
    setSearchTerm("");
    setGameResults([]);
    setGameSelected();
  };

  return (
    <View style={styles.container}>
      {/* Titre du site/appli */}
      <Text style={{fontFamily: 'Quicksand'}}>Optimized settings for PC Games</Text>

      {/* Barre de recherche */}
      <SearchBar
        onPress={handleSearch}
        onChangeText={handleKeyboardEntry}
        searchActive={searchActive}
        onPressReset={resetSearch}
      />

      {/* Résultats */}
      {/* Chargement */}
      {isLoading && searchActive && <LoadingIcon />}

      {/* Si erreur lors du fetch */}
      {searchActive && gameResults && gameResults == "error" ? (
        <Text>Something wrong happened, try later.</Text>
      ) : (
        gameResults.length > 0 && (
          <Results gameResults={gameResults} onPress={handleGameSelected} />
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
