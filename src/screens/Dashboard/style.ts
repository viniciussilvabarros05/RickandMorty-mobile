import { ImageBackground, Image} from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import styled from "styled-components/native";;
export const Container = styled(ImageBackground)`
  flex: 1;
  align-items:center;
  justify-content: center;
`;

export const Logo = styled(Image)`
    transform: scale(0.3);
    object-fit:contain;
`;
export const Button = styled.TouchableOpacity.attrs({
    activeOpacity: 0.9
})
`
  background-color: ${({ theme }) => theme.color.blue800};
  width: ${RFPercentage(25)}; 
  height: 50px;
  margin: auto;
  border-radius:25px;  
  align-items:center;
  justify-content:center;
`;
export const Text = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  color: white;
`;
