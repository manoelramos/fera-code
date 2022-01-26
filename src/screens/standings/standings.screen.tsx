import React, {useEffect} from 'react';
import {Alert} from 'react-native';
import {observer} from 'mobx-react-lite';
import {RouteProp, useRoute} from '@react-navigation/native';
import {Wrapper, LoadingWrapper, Loading} from './standings.screen.styles';
import {StandingsScreenStore} from './standings.screen.store';
import Table from './table/table';

type StandingsScreenRoute = RouteProp<
  Navigation.RootStackParamList,
  'Standings'
>;

function StandingsScreen(): JSX.Element {
  const {params} = useRoute<StandingsScreenRoute>();
  const {isLoading} = StandingsScreenStore.state;

  useEffect(() => {
    if (params.leagueId && params.season) {
      try {
        StandingsScreenStore.fetchStandings({
          leagueId: params.leagueId,
          season: params.season,
        });
      } catch (error) {
        Alert.alert(
          '',
          'Não foi possível carregar a classificação do campeonato.',
        );
      }
    }

    return () => StandingsScreenStore.resetState();
  }, [params]);

  return (
    <Wrapper>
      {isLoading ? (
        <LoadingWrapper>
          <Loading />
        </LoadingWrapper>
      ) : (
        <Table />
      )}
    </Wrapper>
  );
}

export default observer(StandingsScreen);
