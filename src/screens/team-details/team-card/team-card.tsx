import React from 'react';
import {observer} from 'mobx-react-lite';
import {
  Wrapper,
  TeamName,
  TeamLogo,
  DetailsWrapper,
  TeamDetails,
} from './team-card.styles';
import {TeamDetailsScreenStore} from '../team-details.screen.store';
import FastImage from 'react-native-fast-image';

function TeamCard(): JSX.Element {
  const {
    details: {team},
  } = TeamDetailsScreenStore.state;

  return (
    <Wrapper>
      <TeamLogo
        source={{uri: team?.logo, priority: FastImage.priority.normal}}
      />
      <DetailsWrapper>
        <TeamName>{team?.name}</TeamName>
        <TeamDetails>
          {team?.founded} - {team?.country}
        </TeamDetails>
      </DetailsWrapper>
    </Wrapper>
  );
}

export default observer(TeamCard);
