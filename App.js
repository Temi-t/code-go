import 'react-native-gesture-handler';
//import AppNavStack from './AppNavStack';
import HomeTab from './HomeTab';
import { NavigationContainer } from '@react-navigation/native'
export default function App() {
  return (
    <NavigationContainer>
      <HomeTab />
    </NavigationContainer>
  );
}

      //<AppNavStack/>
