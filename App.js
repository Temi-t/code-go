import 'react-native-gesture-handler';
import AppNavigator from './AppNavigator';
import { NavigationContainer } from '@react-navigation/native'
export default function App() {
  return (
    <NavigationContainer>
      <AppNavigator/>
    </NavigationContainer>
  );
}

