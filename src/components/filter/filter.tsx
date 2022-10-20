import React, { Dispatch } from "react";
import { Container, FilterContainer, Image, Title, Filter,Active } from "./styles";
interface dataFilters {
  id: number;
  img: string;
  name: string;
  filterBy: string;
  filter: string;
}
interface Props {
  dataFilters: dataFilters[];
  activeFilter: number;
  setActiveFilter: Dispatch<number>;
  filterFunction: (name: string, filter: number) => void;
}
export function Filters({
  dataFilters,
  activeFilter,
  setActiveFilter,
  filterFunction,
}: Props) {

  function handleActiveFunction(id: number) {
    setActiveFilter(id);
    filterFunction('', id); 
  }

  return (
    <Container>
      <FilterContainer
        horizontal
        data={dataFilters}
        keyExtractor={(filter) => filter.name}
        renderItem={({ item }) => (
          <Filter onPress={()=>handleActiveFunction(item.id)}> 
            <Image source={{ uri: item.img }} />
            <Title>{item.name}</Title>
            {activeFilter == item.id?<Active/>: ""}
          </Filter>
        )}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
}
