import React, { Dispatch, useState } from "react";
import { DataProps } from "../../@types/data/data";
import {
  Container,
  ContentImage,
  ModalCharacter,
  Wrapper,
  Image,
  Specie,
  Name,
  ContentInformations,
  LineInfo,
  Label,
  Description,
} from "./styles";

interface Props {
  data: DataProps | null;
  closeModal: Dispatch<DataProps | null>;
}

export function Modal({data, closeModal}:Props) {
 const [modalVisible, setModalVisible] = useState(true);
  return (
    <Container>
      <ModalCharacter visible={data!==null} transparent={true} onRequestClose={()=>closeModal(null)}> 
        <Wrapper>
            <ContentImage>
                <Image source={{uri:data?.image}}/>
                <Name>{data?.name}</Name>
                <Specie>{data?.species}</Specie>
            </ContentImage>
            <ContentInformations>
                <LineInfo>
                    <Label>Status</Label>
                    <Description>{data?.status}</Description>
                </LineInfo>
                <LineInfo>
                <Label>Genero</Label>
                    <Description>{data?.gender}</Description>
                </LineInfo>
                <LineInfo>
                    <Label>Origem</Label>
                    <Description>{data?.origin?.name}</Description>
                </LineInfo>
            </ContentInformations>
        </Wrapper> 
      </ModalCharacter>
    </Container>
  );
}
