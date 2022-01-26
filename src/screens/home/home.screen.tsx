import React, {useEffect} from 'react';
import {Alert} from 'react-native';
import Form from './form/form';
import {HomeScreenStore} from './home.screen.store';
import {Wrapper} from './home.screen.styles';

export default function HomeScreen(): JSX.Element {
  useEffect(() => {
    try {
      HomeScreenStore.fetchLeagues();
    } catch (error) {
      Alert.alert('', 'Não foi possível carregar as ligas');
    }
  }, []);

  return (
    <Wrapper>
      <Form />
    </Wrapper>
  );
}
