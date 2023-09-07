import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import SearchBar from './components/SearchBar';
import Results from './components/Results';
import { useState } from 'react';

import { RAWG_API_KEY } from '@env';

export default function App() {

  const [searchTerm, setSearchTerm] = useState("");
  const [searchActive, setSearchActive] = useState(false);
  const [gameResults, setGameResults] = useState([]);
  const [gameSelected, setGameSelected] = useState();

  const imageTest = require('./assets/cover_ps4.png');

  // On recherche le jeu avec l'API de RAWG
  const handleSearch = async (e) => {

    e.preventDefault()

    // On rajoute des tirets dans le terme recherché pour la recherche avec l'api
    //  Ex: Psychonauts 2 devient psychonauts-2
    let termeFinal = searchTerm.split(' ').join('-').toLowerCase();

    // Par défaut, on considère qu'on a aucun résultat
    setGameResults([]);

    // On récupère les résultats
    fetch(`https://rawg.io/api/games?search=${termeFinal}&key=${RAWG_API_KEY}`)
      .then(resp => resp.json())
      .then(({ results }) => {
        results === undefined ? setGameResults() : setGameResults(results);
      })
      .catch(() => {
        setGameResults('error');
      });
    setSearchTerm("");
  }

  // Si l'on choisit parmi les résultats
  const handleGameSelected = (e) => {
    setGameSelected(e);
  }

  // Dès que l'on tape sur la barre de recherche
  const handleKeyboardEntry = (e) => {
    setSearchActive(true);
    setSearchTerm(e.target.value); // On enregistre le terme recherché
  }

  // Si on veut remettre à zéro le nom du jeu
  const resetSearch = () => {
    setSearchActive(false);
    setSearchTerm();
  }

  return (
    <View style={styles.container}>
      {/* Titre du site/appli */}
      <Text>Optimized settings for PC Games</Text>
      {/* Barre de recherche */}
      <SearchBar
        onPress={handleSearch}
        onChange={handleKeyboardEntry}
        searchActive={searchActive}
        onPressReset={resetSearch} />
      {/* Résultats */}
      {/* {gameResults ?
        // Si erreur lors du fetch
        gameResults == 'error' ?
          <Text>Something wrong happened, try later.</Text> :
          // Sinon, on affiche les résultats trouvés
          <Results gameResults={gameResults} onPress={handleGameSelected} /> :

        // Si aucun résultat
        <Text>No games found</Text>
      } */}
      {/* Test des résulats */}
      <View style={stylesTest.container}>
        <View>
          <Text>Jeu 1</Text>
          <Image source={imageTest} style={stylesTest.gameImage}/>
          </View>
      </View>
      {/* Les détails du jeu choisi parmi les résultats */}
      {gameSelected && <TableDetailsJeu gameSelected={gameSelected}/>}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D2CACA',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const stylesTest = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    padding: 10,
  },
  gameImage: {
    width: 320,
    height: 440,
    borderRadius: 18,
  }
});
