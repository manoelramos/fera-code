import React, {useEffect} from 'react';
import {Alert} from 'react-native';
import {observer} from 'mobx-react-lite';
import {RouteProp, useRoute} from '@react-navigation/native';
import {Wrapper, LoadingWrapper, Loading} from './team-details.screen.styles';
import {TeamDetailsScreenStore} from './team-details.screen.store';
import TeamCard from './team-card/team-card';
import VenueCard from './venue-card/venue-card';

type StandingsScreenRoute = RouteProp<
  Navigation.RootStackParamList,
  'TeamDetails'
>;

function TeamDetailsScreen(): JSX.Element {
  const {params} = useRoute<StandingsScreenRoute>();
  const {isLoading} = TeamDetailsScreenStore.state;

  useEffect(() => {
    if (params.teamId) {
      try {
        TeamDetailsScreenStore.fetchTeam({
          teamId: params.teamId,
        });
      } catch (error) {
        Alert.alert(
          '',
          'Não foi possível carregar a classificação do campeonato.',
        );
      }
    }

    return () => TeamDetailsScreenStore.resetState();
  }, [params]);

  return (
    <Wrapper>
      {isLoading ? (
        <LoadingWrapper>
          <Loading />
        </LoadingWrapper>
      ) : (
        <>
          <TeamCard />
          <VenueCard />
        </>
      )}
    </Wrapper>
  );
}

export default observer(TeamDetailsScreen);
