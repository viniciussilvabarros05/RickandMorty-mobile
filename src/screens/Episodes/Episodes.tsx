import { useFocusEffect } from "@react-navigation/native";
import React, { useCallback, useState } from "react";
import { ActivityIndicator } from "react-native";
import { useTheme } from "styled-components";
import { DataProps } from "../../@types/data/data";
import { api } from "../../axios/axios";
import { Modal } from "../../components/modal/modal";
import {
  Container,
  Search,
  Icon,
  Header,
  Main,
  SearchWrapper,
  Name,
  LoadingWrapper,
  TableList,
  Episode,
  Date,
  Row,
} from "./styles";

export function Episodes() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState<DataProps[]>([] as any);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [character, setCharacter] = useState<DataProps | null>(null);
  const theme = useTheme();
  function HandleSearch(search: string, filter?: number) {
    setIsLoading(true);
    let query = `/episode/`
    if(Number(search)){
      query = `/episode/${search}`
    }
    api
      .get(query, {
        params: {
          page: page,
          name: search,
        },
      })
      .then((response) => {
        if(!response.data.hasOwnProperty('results')){
          setData([response.data])
          setIsLoading(false) 
          return
        }
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
       
        {isLoading ? (
          <LoadingWrapper>
            <ActivityIndicator size={"large"} color={theme.color.green300} />
          </LoadingWrapper> 
        ) : (
            <TableList
            data={data}
            keyExtractor={(data) => String(data.id)}
            renderItem={({ item }) => (
                <Row onPress={() => setCharacter(item)}>
                    <Episode>{item?.id}</Episode>
                    <Name>{item?.name}</Name>
                    <Date>{item?.air_date}</Date>
                </Row>
            )}
            />
        )}
      </Main>
      <Modal data={character} closeModal={setCharacter} />
    </Container>
  );
}
