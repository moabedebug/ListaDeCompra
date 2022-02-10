import React, { useState } from "react";
import { View,
    Text,
    TextInput,
    StyleSheet,
    Pressable,
    Keyboard,
    TouchableOpacity,
    Vibration
} from "react-native"

import Header from "../Components/Header";

export default function AdicionarLista(){

    return(
        <View style={styles.container}>
           
            <Pressable onPress={Keyboard.dismiss}>
                <Header/>
                    <View style={styles.containerForm}>
                        <Text style={styles.titleForm}>Produto</Text>
                        
                        <TextInput
                                style={styles.input}
                                placeholder="Ex: Feijão"
                            />
                        <Text style={styles.titleForm}>Quantidade</Text>
                       
                        <TextInput
                                style={styles.input}
                                placeholder="Ex: 2"
                            />  
                        <Text style={styles.titleForm}>Valor</Text>
                     
                        <TextInput
                                style={styles.input}
                                placeholder="Ex: 7,00"
                            /> 
                            
                        <View style={styles.containerButton}>
                            <TouchableOpacity style={styles.Button}>
                            <Text style={styles.textButton}>Confirmar</Text>
                            </TouchableOpacity>
                        </View>       
                    </View>
                    <View style={styles.footer}></View> 
            </Pressable>  
        </View>
    )
}

const styles = StyleSheet.create({
    titleForm:{
        color: "#1B3A4B",
        fontSize: 18,
        paddingLeft: 30,
        marginTop: 50,
        fontWeight: "bold"
    },
    input: {
        width: "90%",
        borderRadius: 16,
        backgroundColor: "#f6f6f6",
        height: 60,
        marginLeft: 20,
        marginTop: 5,
        paddingLeft: 20,
        fontSize: 20,
        borderColor: "#006466",
        borderWidth: 1
    },
    containerButton:{
        alignItems: "center"
    },
    Button: {
        backgroundColor: "#d90429",
        borderRadius: 16,
        marginTop: 75,
        width: "70%",
        height: 60,
        alignItems: "center",
        justifyContent: "center"
    },
    textButton:{
        color: "#ffffff",
        fontSize: 21,
        fontWeight: "bold"
    },
    footer: {
        width: "100%",
        height: 120,
        backgroundColor: "#006466",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        marginTop: 100
    }
})