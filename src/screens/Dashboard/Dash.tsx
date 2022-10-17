import React from "react";
import { View } from "react-native";
import { Container,Logo,Button,Text } from "./style";
export function Dashboard(){
    return(
        <Container source={require("../../assets/space2.png")}>
            <Logo source={require("../../assets/logo.png")}/> 
            <Button>
                <Text>START</Text>
            </Button>
        </Container>
    )
}