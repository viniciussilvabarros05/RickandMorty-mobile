import styled from "styled-components/native";
import { Modal } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
export const Container = styled.View`
  flex: 1;
  align-items:center;
  justify-content:center;
`;

export const ModalCharacter = styled(Modal)`
`;
export const Wrapper = styled.View`
  padding:32px;
  height: 100%;
  width:100%;
  margin:auto;
  align-items:center;
  justify-content:flex-start; 
  background-color:${({ theme }) => theme.color.grey500};

`;

export const ContentImage = styled.View`
  justify-content:center;
  align-items:center;
  margin-bottom: 100px;
`;

export const Image = styled.Image`
  width: ${RFValue(150)}px;
  height: ${RFValue(150)}px;
  border-radius: ${RFPercentage(200)}px;
`;

export const Specie = styled.Text`
  color:#acacac;
  font-family:${({ theme }) => theme.fonts.medium};
  font-size: 16px;
`;

export const Name = styled.Text`
    text-align:center;
    
    color:white;
    font-family:${({ theme }) => theme.fonts.bold};
    font-size: 32px;

`;

export const ContentInformations = styled.View`
  width: ${RFPercentage(40)}px;
`;

export const LineInfo = styled.View`
  margin-bottom:16px;
  width:100%;
  padding: 12px 16px;
  border-radius: 8px;
  background-color:${({ theme }) => theme.color.greyDark};
  justify-content:space-between;
  flex-direction:row;
  color:white;
`;

export const Label = styled.Text`
 color:#acacac;
 font-family:${({ theme }) => theme.fonts.bold};
 font-size: 16px;
`;

export const Description = styled.Text`
 color:white;
 font-family:${({ theme }) => theme.fonts.regular};
`;
