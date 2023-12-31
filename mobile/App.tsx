import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import Home from './src/pages/home';

export default function App() {
  return (
    <PaperProvider>
      <View style={styles.container}>
        <Home />
        <StatusBar style="auto" />
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 32,
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
});
