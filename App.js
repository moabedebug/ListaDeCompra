import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import PrimeiraPagina from "./src/pages/PrimeiraPagina";

export default function App() {
  return (
    <View>
      <PrimeiraPagina/>
      <StatusBar style="auto" />
    </View>
  );
}


