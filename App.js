import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";
import LoadingIcon from "./components/LoadingIcon";
import Results from "./components/Results";
import SearchBar from "./components/SearchBar";
import TableDetailsJeu from "./components/TableDetailsJeu";

import { useFonts } from "expo-font";
import { extractColors } from 'extract-colors';

import Footer from "./components/Footer";

export default function App() {
  const [fontsLoaded] = useFonts({
    Quicksand: require("./assets/fonts/Quicksand/Quicksand-VariableFont_wght.ttf"),
  });

  const [searchTerm, setSearchTerm] = useState("");
  const [searchActive, setSearchActive] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [gameResults, setGameResults] = useState([]);
  const [gameSelected, setGameSelected] = useState();
  const [appBGColor, setAppBGColor] = useState(false);

  const RAWG_API_KEY = process.env.RAWG_API_KEY;

  {
    /* We search the game with RAWG's API */
  }
  const handleSearch = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    {
      /*  Ex: Psychonauts 2 become psychonauts-2 */
    }
    let termeFinal = searchTerm.split(" ").join("-").toLowerCase();

    {
      /* No results by default */
    }
    setGameResults([]);

    {
      /* We get the results */
    }
    await fetch(
      `https://rawg.io/api/games?search=${termeFinal}&parent_platforms=1&key=${RAWG_API_KEY}`
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
    /* If we choose a game among the results */
  }
  const handleGameSelected = (e) => {
    setAppBGColor(false);
    setGameSelected();
    setSearchActive(false);
    setGameResults([]);

    let gameSelectedName = e;

    setGameSelected(gameSelectedName);
  };

  {
    /* When we click on the search bar */
  }
  const handleKeyboardEntry = (e) => {
    setSearchActive(true);
    {
      /* We register the text */
    }
    setSearchTerm(e);
    setGameSelected();
  };

  {
    /* If we reset the search */
  }
  const resetSearch = () => {
    setSearchActive(false);
    setSearchTerm("");
    setGameResults([]);
    setGameSelected();
  };

  const handleMouseEnter = (img) => {
    // var backgroundColors = ""
    // extractColors(img, { crossOrigin: "anonymous" })
    //   .then((results) => {
    //     results.map((imgData) => {
    //       backgroundColors = imgData.red + "," + imgData.green + "," + imgData.blue
    //     })
    //     setAppBGColor(backgroundColors)
    //   })
    //   .catch(console.error)

  }

  const handleMouseLeave = () => {
    setAppBGColor(false)
  }

  return (

    <SafeAreaView style={appBGColor ? {
      flex: 1,
      background: `linear-gradient(rgba(${appBGColor},0.5),transparent)`,
      backgroundRepeat: "repeat-y",
      backgroundSize: "contain",
      opacity: 0.8,
      alignItems: "center",
      justifyContent: "center",
    } : styles.container}>
      {/* Title */}
      <Text style={{ fontFamily: "Quicksand" }}>
        Optimized settings for PC Games
      </Text>
      {/* Search bar */}
      <SearchBar
        onPress={handleSearch}
        onChangeText={handleKeyboardEntry}
        searchActive={searchActive}
        onPressReset={resetSearch}
      />
      {/* Results */}
      {/* Loading */}
      {isLoading && searchActive && <LoadingIcon />}

      {/* If error while fetching */}
      {searchActive && gameResults && gameResults == "error" ? (
        <Text>Something wrong happened, try later.</Text>
      ) : (
        gameResults.length > 0 && (
          <Results gameResults={gameResults} onPress={handleGameSelected} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />
        )
      )}

      {/* Game's details */}
      {gameSelected && <TableDetailsJeu gameSelected={gameSelected} />}

      <Footer />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D2CACA",
    alignItems: "center",
    justifyContent: "center",
  },
  scrollView: {
    marginHorizontal: 20,
  },
});
