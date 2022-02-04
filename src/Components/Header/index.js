import React from "react"
import { View, Text } from 'react-native'
import styles from "./style"

export default function Header() {
    return(
        <View style={styles.boxTitle}>
            <Text style={styles.textTitle}>Lista De Compra</Text>
        </View>
    )
}