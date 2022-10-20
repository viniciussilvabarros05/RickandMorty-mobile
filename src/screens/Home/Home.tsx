import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Container,Logo,Button,Text } from "./style";
export function Home(){
    const {navigate} = useNavigation()
    function Start(){
        navigate("Personagens",{})  
    }
    return(
        <Container source={require("../../assets/space2.png")}>
            <Logo source={require("../../assets/logo.png")}/> 
            <Button onPress={Start} activeOpacity={0.9}>
                <Text>START</Text>
            </Button>
 
        </Container> 
    )
}