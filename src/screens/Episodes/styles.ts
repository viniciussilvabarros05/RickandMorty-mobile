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
export const TableList = styled(
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
export const Row = styled.View`
    padding: 16px;
    background-color: ${({theme})=> theme.color.grey500};
    margin-bottom: 8px;
    flex-direction:row;
    align-items:center;
    justify-content:space-between;
    `
export const Episode = styled.Text`
    font-family: ${({theme})=>theme.fonts.regular};
    font-size: 16px;
    text-align:center;
    width: 50px;
    margin-right: 16px;
    color:#a7a7a7;
`
export const Name = styled.Text`
    font-family: ${({theme})=>theme.fonts.regular};
    font-size: 16px;
    width: 40%;
    margin-right: auto;
    color:#a7a7a7;
`
export const Date = styled.Text`
   font-family: ${({theme})=>theme.fonts.regular};
    font-size: 16px;
    color:#a7a7a7;
`
export const LoadingWrapper = styled.View`
    flex:1;
    align-items:center;
    justify-content:center;

`
