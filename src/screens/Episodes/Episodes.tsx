import { useFocusEffect } from "@react-navigation/native";
import React, { useCallback, useState } from "react";
import { ActivityIndicator } from "react-native";
import { useTheme } from "styled-components";
import { DataProps } from "../../@types/data/data";
import { api } from "../../axios/axios";
import { Modal } from "../../components/modal/modal";
import { TableRow } from "./Row";
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
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [empty, setEmpty] = useState(false);
  const [character, setCharacter] = useState<DataProps | null>(null);
  const theme = useTheme();
  function HandleSearch(search: string, filter?: number) {
    setIsLoading(true);
    let query = `/episode/`;
    if (Number(search)) {
      query = `/episode/${search}`;
    }
    api
      .get(query, {
        params: {
          name: search,
        },
      })
      .then((response) => {
        if (!response.data.hasOwnProperty("results")) {
          setData([response.data]);
          setIsLoading(false);
          return;
        }
        setData(response?.data?.results);
        setIsLoading(false);
      })
      .catch((error) => {

        setIsLoading(false);
        setData([]);
      });
  }
  function loadMore() {
    if (empty) {
      return;
    }
    if(search){
      return; 
    }
    setIsLoadingMore(true);
    setPage(page + 1);
    let query = `/episode/`;

    api
      .get(query, {
        params: {
          page: page + 1,
        },
      })
      .then((response) => {
        setData([...data, ...response?.data?.results]);
        setIsLoadingMore(false);
      })
      .catch((error) => {
        setIsLoadingMore(false);
        setEmpty(true);
      });
  }
  useFocusEffect(
    useCallback(() => {
      setData([]);
      setEmpty(false);
      setPage(1);
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
            onEndReached={loadMore}
            onEndReachedThreshold={0.1}
            renderItem={({ item }) => <TableRow item={item}/>}
          />
        )} 
      {isLoadingMore && !isLoading ? (
            <ActivityIndicator size={"large"} color={theme.color.green300} />
        ):""}
      </Main>
      <Modal data={character} closeModal={setCharacter} />
    </Container>
  );
}
