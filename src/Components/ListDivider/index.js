import React from "react";
import { View } from "react-native"
import { styles } from "./styles";

export default function ListDivider(){
    return(
        <View style={styles.borda}>
          <View style={styles.container}></View>
        </View>
    )
}