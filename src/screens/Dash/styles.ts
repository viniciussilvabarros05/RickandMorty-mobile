import { TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { TextInput } from 'react-native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native'
import {FlatList,FlatListProps} from 'react-native'
import { DataProps } from '../../@types/data/data';

export const Container = styled.View`
    flex:1;
`

export const SearchWrapper = styled.View`
    flex:1;
    position:relative ;
    align-items:flex-end;
    justify-content:center;
`
export const Header = styled.View`
    flex-direction:row;
    align-items:flex-end;
    justify-content:center;
    width: 100%;
    min-height: 120px;
    height:20%;
    padding: 24px;
    background-color: ${({theme})=> theme.color.grey500} ;
`
export const Search = styled(TextInput).attrs({
    selectionColor:"#AAAA",
    placeholderTextColor:"#acacac"
})`
    color: white;
    padding-left: 15px;
    width: 100%; 
    min-height: 40px;
    height:   ${RFValue(30)}px;
    background-color: ${({theme})=> theme.color.greyDark};
    border-radius: 24px;
`

export const Icon = styled(MaterialIcons)`
    right: ${RFValue(10)}px;
    position:absolute;
`


export const Main = styled.View`
    margin-top: 10%;
    margin:auto;
    height: 80%;
    width: 100%;
    background-color:  ${({theme})=> theme.color.greyDark};
`
export const CardList = styled(
    FlatList as new (props: FlatListProps<DataProps>) => FlatList<DataProps>
  ).attrs({ 
    showsVerticalScrollIndicator: false,
    contentContainerStyle:{
        width:"100%",
        margin:"auto",
        paddingTop: RFValue(20),
        paddingBottom: RFValue(20),
    }
  })`
  height:30%;
`
export const Image = styled.Image`
    width:  ${RFPercentage(18)}px;
    margin:auto;
    margin-left: 10px;
    height: ${RFPercentage(18)}px;
    border-radius: 5px;
    `
export const Informations = styled.View`
    height: 100%;
    padding: 16px 32px;
    width: 65%;
` 

export const Name = styled.Text`
    font-family: ${({theme})=>theme.fonts.medium};
    font-size: 16px;
    color:white;
`
export const Specie = styled.Text`
    color:#aaaaaa;
`
export const LoadingWrapper = styled.View`
    flex:1;
    align-items:center;
    justify-content:flex-start;

`
export const Card = styled(TouchableOpacity).attrs({activeOpacity: 0.7})`
    flex-direction: row;
    height: ${RFPercentage(22)}px;
    border:1px solid ${({theme})=>theme.color.blue800};
    border-radius: 5px;
    overflow: hidden;
    width: 90%;
    margin:auto;
    margin-top: 20px;
    background-color: ${({theme})=>theme.color.grey500}
`
