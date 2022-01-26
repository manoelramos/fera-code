import React, {useMemo} from 'react';
import {observer} from 'mobx-react-lite';
import {useFormik} from 'formik';
import * as yup from 'yup';
import {
  Wrapper,
  DropLeagues,
  DropSeasons,
  InputWrapper,
  Button,
  Loading,
} from './form.styles';
import {HomeScreenStore} from '../home.screen.store';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';

type FormValues = HomeScreen.Form.FormValues;
type HomeScreenProp = NativeStackNavigationProp<
  Navigation.RootStackParamList,
  'Home'
>;

function Form(): JSX.Element {
  const navigation = useNavigation<HomeScreenProp>();
  const {leagues, isLoading} = HomeScreenStore.state;

  const {handleSubmit, isValid, values, setFieldValue, errors, touched} =
    useFormik<FormValues>({
      initialValues: {
        league: '',
        season: '',
      },
      onSubmit: handleFormSubmit,
      validationSchema: yup.object().shape({
        league: yup.string().required(),
        season: yup.string().required(),
      }),
    });

  const leaguesOptions = useMemo(() => {
    if (leagues.length > 0) {
      return leagues.map(league => ({
        label: league.league.name,
        value: `${league.league.id}`,
      }));
    }

    return [];
  }, [leagues]);

  const seasonsOptions = useMemo(() => {
    if (values.league && values.league.length > 0) {
      const league = leagues.find(
        lg => values.league === lg.league.id.toString(),
      );

      return league
        ? league.seasons.map(season => ({
            label: `${season.year}`,
            value: `${season.year}`,
          }))
        : [];
    }

    return [];
  }, [leagues, values.league]);

  function handleFormSubmit() {
    navigation.navigate('Standings', {
      leagueId: values.league,
      season: values.season,
    });
  }

  return (
    <Wrapper>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <InputWrapper>
            <DropLeagues
              placeholder="Selecione a liga"
              value={values.league}
              items={leaguesOptions}
              onChange={value => setFieldValue('league', value)}
              hasError={!!errors.league && touched.league}
              errorMessage={errors.league}
            />
          </InputWrapper>
          {!!values.league && (
            <InputWrapper>
              <DropSeasons
                placeholder="Selecione o ano"
                value={values.season}
                items={seasonsOptions}
                onChange={value => setFieldValue('season', value)}
                hasError={!!errors.season && touched.season}
                errorMessage={errors.season}
              />
            </InputWrapper>
          )}
          <Button
            text="Pesquisar"
            onPress={handleSubmit}
            disabled={!isValid || isLoading}
            isLoading={isLoading}
          />
        </>
      )}
    </Wrapper>
  );
}

export default observer(Form);
