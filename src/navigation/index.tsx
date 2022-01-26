import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '~/screens/home/home.screen';
import StandingsScreen from '~/screens/standings/standings.screen';
import TeamDetailsScreen from '~/screens/team-details/team-details.screen';

const Stack = createNativeStackNavigator<Navigation.RootStackParamList>();

export default function RootStack(): JSX.Element {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{title: 'Início'}}
      />
      <Stack.Screen
        name="Standings"
        component={StandingsScreen}
        options={{title: 'Classificação'}}
      />
      <Stack.Screen
        name="TeamDetails"
        component={TeamDetailsScreen}
        options={{title: 'Detalhes'}}
      />
    </Stack.Navigator>
  );
}
