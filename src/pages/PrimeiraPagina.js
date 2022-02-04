import React, { Fragment } from "react";
import { Text, View, StyleSheet, TouchableOpacity} from "react-native"

import { FontAwesome } from "@expo/vector-icons";

import Header from "../Components/Header";
import Footer from "../Components/Footer"
import ListDivider from "../Components/ListDivider";

export default function PrimeiraPagina(){
    return(
        <Fragment>
            <Header/>
            <View style={styles.container}>
                <View style={styles.subContainer}>
                    <Text style={styles.text}>Produto</Text>
                    <Text style={styles.text}>Quantidade</Text>
                    <Text style={styles.text}>valor</Text>    
                </View>
                <ListDivider/>
                <View style={styles.FlatList}></View>
                <View style={styles.total}>
                    <Text style={styles.text}>Total</Text>
                    <Text style={styles.text}>10</Text>
                    <Text style={styles.text}>R$ 25,00</Text>    
                </View>
                <View style={styles.containerButton}>
                    <TouchableOpacity style={styles.button}>
                        <FontAwesome name="plus" size={32} color="#1b3a4b"/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.closeButton}>
                        <FontAwesome name="times" size={32} color="#e9edc9"/>
                    </TouchableOpacity>
                </View>
            </View>
            <Footer/>
        </Fragment>
    )
}

const styles = StyleSheet.create({
    container:{
        width: "100%",
        height: "78%",
    },
    subContainer: {
        marginTop: 50,
        flexDirection:"row",
        justifyContent: "space-evenly",
        alignItems:"center" 
    },
    text: {
        padding: 5,
        fontSize: 14,
        color: "#B1A7A6",
        fontWeight: "bold"
    },
    FlatList:{
        backgroundColor: "#F0EFEB",
        width: 370,
        height: 400,
        marginTop: 20,
        marginLeft: 20,
        borderRadius: 20
    },
    total: {
        flexDirection:"row",
        justifyContent: "space-around",
        alignItems:"center"
    },
    containerButton: {
        marginTop: 30,
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems:"center"
    },
    button: {
        backgroundColor: "#006466",
        height: 50,
        width: 50,
        borderRadius: 8,
        justifyContent: "center",
        alignItems:"center"
    },
    closeButton: {
        backgroundColor: "#d90429",
        height: 50,
        width: 50,
        borderRadius: 8,
        justifyContent: "center",
        alignItems:"center"
    }


})

