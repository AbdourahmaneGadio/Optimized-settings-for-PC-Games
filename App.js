import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SearchBar from './components/SearchBar';
import { useState } from 'react';
import TableDetailsJeu from './components/TableDetailsJeu';

export default function App() {

  const [jeuRecherche, setJeuRecherche] = useState();
  const [searchActive, setSearchActive] = useState(false);

  // On recherche le jeu avec l'API de RAWG
  const handleSearch = async () => {
    setJeuRecherche('psychonauts-2');
  }

  // Dès que l'on tape sur la barre de recherche
  const handleKeyboardEntry = () => {
    setSearchActive(true);
  }

  // Si on veut remettre à zéro le nom du jeu
  const resetSearch = () => {
    setSearchActive(false);
    setJeuRecherche();
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
      {/* Résultat */}
      {jeuRecherche && <TableDetailsJeu />}
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
