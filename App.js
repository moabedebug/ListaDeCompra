import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import PrimeiraPagina from "./src/pages/PrimeiraPagina";
import AdicionarLista from './src/pages/AdicionarLista';

export default function App() {
  return (
    <View>
      <AdicionarLista/>
      <StatusBar style="auto" />
    </View>
  );
}


