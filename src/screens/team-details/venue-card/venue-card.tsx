import React from 'react';
import {observer} from 'mobx-react-lite';
import {
  Wrapper,
  StadiumImage,
  DetailsWrapper,
  Title,
  Info,
  Row,
  RowItemWrapper,
} from './venue-card.styles';
import {TeamDetailsScreenStore} from '../team-details.screen.store';
import FastImage from 'react-native-fast-image';

function VenueCard(): JSX.Element {
  const {
    details: {venue},
  } = TeamDetailsScreenStore.state;

  return (
    <Wrapper>
      <StadiumImage
        source={{uri: venue?.image, priority: FastImage.priority.normal}}
      />
      <DetailsWrapper>
        <Title>Nome do estádio</Title>
        <Info>{venue?.name}</Info>
        <Row>
          <RowItemWrapper>
            <Title>Endereço</Title>
            <Info>{venue?.address}</Info>
          </RowItemWrapper>
          <RowItemWrapper>
            <Title>Cidade</Title>
            <Info>{venue?.city}</Info>
          </RowItemWrapper>
        </Row>
        <Title>Capacidade</Title>
        <Info>{venue?.capacity} pessoas</Info>
      </DetailsWrapper>
    </Wrapper>
  );
}

export default observer(VenueCard);
