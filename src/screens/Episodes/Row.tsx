import React, { Dispatch } from 'react';
import { DataProps } from '../../@types/data/data';
import { Date, Episode, Name, Row } from './styles';

interface Props{
    item:DataProps;
}
export function TableRow({item}:Props) {
  return (
    <Row >
    <Episode>{item?.id}</Episode>
    <Name>{item?.name}</Name>
    <Date>{item?.air_date}</Date>
  </Row>
  );
}