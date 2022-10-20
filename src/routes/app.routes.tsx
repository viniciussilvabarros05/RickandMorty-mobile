import { Ionicons, MaterialIcons } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React, { Dispatch } from 'react'
import { Platform } from 'react-native'
import { useTheme } from 'styled-components'
import { Dash } from '../screens/Dash/Dash'
import { Episodes } from '../screens/Episodes/Episodes'
import { Home } from '../screens/Home/Home'

interface Props{
    start: boolean;
    back: Dispatch<boolean>
}
const {Navigator, Screen} = createBottomTabNavigator()
export function AppRoutes(){
    const theme = useTheme()
    return(
        <Navigator
            initialRouteName="Home"
            
            screenOptions={{
                headerShown:false,
                tabBarActiveTintColor:theme.color.blue800,
                tabBarInactiveTintColor:"white",
                tabBarLabelPosition:'beside-icon',
                tabBarStyle:{
                    height:66,
                    backgroundColor:theme.color.blue900,
                    paddingVertical:Platform.OS === 'ios'? 20: 0, 
                }
            }}
        >
            <Screen
                name="Home"
                options={{
                    tabBarIcon:({size,color})=>
                    <Ionicons name='home' size={size} color={color}/>,
                    tabBarStyle:{display:'none'}
                }}
                component={Home}
            />
            <Screen
               options={{
                tabBarIcon:({size,color})=>
                    <Ionicons name='person' size={size} color={color}/>,
                }}
                name="Personagens" 
                component={Dash}
            />
            <Screen
                options={{
                    tabBarIcon:({size,color})=>
                    <MaterialIcons name='video-library' size={size} color={color}/>
                }}
                name="Episódios" 
                component={Episodes}
            />
        </Navigator>
    )
}
