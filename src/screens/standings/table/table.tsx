import React, {useMemo} from 'react';
import {observer} from 'mobx-react-lite';
import {Wrapper, TRow, Scroll, TTable} from './table.styles';
import {StandingsScreenStore} from '../standings.screen.store';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';

type StandingsProp = NativeStackNavigationProp<
  Navigation.RootStackParamList,
  'Standings'
>;

const tableHead = [
  'Time',
  'Posição',
  'Pontos',
  'Jogos',
  'Vitórias',
  'Derrotas',
  'Empates',
];

const rowWidth = [100, 100, 100, 100, 100, 100, 100];

function Table(): JSX.Element {
  const navigation = useNavigation<StandingsProp>();

  const {
    league: {standings},
  } = StandingsScreenStore.state;

  const rows = useMemo(() => {
    return standings?.map(st => [
      st.team.name,
      st.rank,
      st.points,
      st.all.played,
      st.all.win,
      st.all.lose,
      st.all.draw,
    ]);
  }, [standings]);

  function onPressRow(teamName: string | number) {
    const team = standings?.find(st => st.team.name === teamName);

    navigation.navigate('TeamDetails', {teamId: `${team?.team.id}`});
  }

  return (
    <Wrapper>
      <Scroll horizontal>
        <Wrapper>
          <TTable>
            <TRow data={tableHead} widthArr={rowWidth} />
          </TTable>
          <Scroll>
            <TTable>
              {rows?.map((rowData, index) => (
                <TRow
                  key={`${index}`}
                  data={rowData}
                  widthArr={rowWidth}
                  onPress={() => onPressRow(rowData[0])}
                />
              ))}
            </TTable>
          </Scroll>
        </Wrapper>
      </Scroll>
    </Wrapper>
  );
}

export default observer(Table);
