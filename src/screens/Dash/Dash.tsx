import { useFocusEffect } from "@react-navigation/native";
import React, { useCallback, useState } from "react";
import { ActivityIndicator } from "react-native";
import { useTheme } from "styled-components";
import { DataProps } from "../../@types/data/data";
import { api } from "../../axios/axios";
import { Filters } from "../../components/filter/filter";
import { Modal } from "../../components/modal/modal";
import {
  Container,
  Search,
  Icon,
  Header,
  Main,
  SearchWrapper,
  CardList,
  Image,
  Card,
  Name,
  Specie,
  Informations,
  LoadingWrapper,
} from "./styles";
const dataFilters = [
  {
    id: 1,
    name: "Todos",
    filter: " ",
    filterBy: " ",
    img: "https://rickandmortyapi.com/api/character/avatar/19.jpeg",
  },
  {
    id: 2,
    name: "Masculino",
    filter: "male",
    filterBy: "gender",
    img: "https://rickandmortyapi.com/api/character/avatar/135.jpeg",
  },
  {
    id: 3,
    name: "Feminino",
    filterBy: "gender",
    filter: "female",
    img: "https://rickandmortyapi.com/api/character/avatar/4.jpeg",
  },
  {
    id: 4,
    name: "Vivo",
    filter: "alive",
    filterBy: "status",
    img: "https://www.zinecultural.com/Repositorio/Upload/S3/mlib-uploads/full/16061595791.webp",
  },
  {
    id: 5,
    name: "Morto",
    filter: "dead",
    filterBy: "status",
    img: "https://rickandmortyapi.com/api/character/avatar/56.jpeg",
  },
  {
    id: 6,
    name: "Desconhecido",
    filter: "unknow",
    filterBy: "gender",
    img: "https://rickandmortyapi.com/api/character/avatar/351.jpeg",
  },
];
export function Dash() {
  const [activeFilter, setActiveFilter] = useState(1);
  const [search, setSearch] = useState("");
  const [data, setData] = useState<DataProps[]>([] as any);
  const [isLoading, setIsLoading] = useState(true);
  const [character, setCharacter] = useState<DataProps | null>(null);
  const theme = useTheme();
  function HandleSearch(search: string, filter?: number) {
    let params: any = {};
    let currencyFilter = dataFilters.filter((filters) => filters.id == filter);

    if (activeFilter && !filter) {
      currencyFilter = dataFilters.filter(
        (filters) => filters.id == activeFilter
      );
      params[currencyFilter[0]?.filterBy] = currencyFilter[0]?.filter;
    }

    params[currencyFilter[0]?.filterBy] = currencyFilter[0]?.filter;
    params["name"] = search;

    setIsLoading(true);
    api
      .get("/character", {
        params,
      })
      .then((response) => {
        setData(response?.data?.results);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
        setData([]);
      });
  }

  useFocusEffect(
    useCallback(() => {
      setData([]);
      HandleSearch("");
      setActiveFilter(1);
    }, [])
  );

  return (
    <Container>
      <Header>
        <SearchWrapper>
          <Search
            placeholder="Pesquisar no Painel"
            onChangeText={setSearch}
          ></Search>
          <Icon
            name="search"
            color="white"
            size={24}
            onPress={() => HandleSearch(search)}
          />
        </SearchWrapper>
      </Header>
      <Main>
        <Filters
          filterFunction={HandleSearch}
          dataFilters={dataFilters}
          setActiveFilter={setActiveFilter}
          activeFilter={activeFilter}
        />
        {isLoading ? (
          <LoadingWrapper>
            <ActivityIndicator size={"large"} color={theme.color.green300} />
          </LoadingWrapper>
        ) : (
          <CardList
            data={data}
            keyExtractor={(data) => String(data.id)}
            renderItem={({ item }) => (
              <Card onPress={() => setCharacter(item)}>
                <Image source={{ uri: item.image }} />
                <Informations>
                  <Name>{item.name}</Name>
                  <Specie>{item.species}</Specie>
                </Informations>
              </Card>
            )}
          />
        )}
      </Main>
      <Modal data={character} closeModal={setCharacter} />
    </Container>
  );
}
