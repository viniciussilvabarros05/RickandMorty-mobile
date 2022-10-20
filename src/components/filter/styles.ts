import styled from "styled-components/native";
import { FlatListProps, FlatList,TouchableOpacity } from "react-native";

interface dataFilters {
  id: number;
  img: string;
  name: string;
  filterBy: string;
  filter: string;
}
export const Container = styled.View`
  flex: 1;
`;
export const FilterContainer = styled(
  FlatList as new (props: FlatListProps<dataFilters>) => FlatList<dataFilters>
).attrs({
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: { paddingHorizontal: 24},
})`
  flex: 1;
  height:40%;
`;
export const Filter = styled(TouchableOpacity)` 
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  border-radius: 32px ;
  margin-right: 20px;
  margin-top: 20px;
  padding: 20px;
  height: 150px;
  background-color: ${({ theme }) => theme.color.grey500};
`;
export const Active = styled.View`
    position:absolute;
    bottom:0;
    width: 50%;
    height: 1px;
    background-color: ${({ theme }) => theme.color.green500};
`
export const Image = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 500px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: white;
`;
