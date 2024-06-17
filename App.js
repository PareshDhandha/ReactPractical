import { StyleSheet, Text, View , StatusBar} from 'react-native';
import StackNavigation from './src/navigation/StackNavigation';

let statusBar = StatusBar.currentHeight;
export default function App() {
  return (
    <View style = {styles.container}>
        {/* <TabNavigation/> */}
        <StackNavigation />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',

  },
});
