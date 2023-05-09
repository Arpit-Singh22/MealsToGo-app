import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import {
  Platform,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Text,
  View
} from 'react-native';

export default function App() {
  return <>
    <SafeAreaView style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Search</Text>
      </View>
      <View style={styles.listContainer}>
        <Text>List</Text>
      </View>
    </SafeAreaView>
    <ExpoStatusBar style="auto" />
  </>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  textContainer: {
    flexDirection: 'column',
    padding: 5,
    backgroundColor: 'green',
  },
  listContainer: {
    flex: 1,
    padding: 5,
    backgroundColor: 'blue',
  }
});
