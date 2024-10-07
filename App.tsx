import React from 'react';
import { SafeAreaView } from 'react-native';
import RootNavigation from './src/Navigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';
function App(): React.JSX.Element {
 
  return (
    <SafeAreaProvider>
      <RootNavigation/>
    </SafeAreaProvider>
  );
}



export default App;
