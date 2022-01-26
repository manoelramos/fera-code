import {httpClientGet} from '~/clients';
import Config from 'react-native-config';

type GetLeaguesResponse = LeaguesService.GetLeagues.GetLeaguesResponse;
type GetLeaguesDTO = LeaguesService.GetLeagues.GetLeaguesDTO;

export const getLeagues = async (): Promise<GetLeaguesDTO> => {
  const {data} = await httpClientGet<GetLeaguesResponse>({
    url: Config.API_URL,
    path: 'leagues',
  });

  return data.response.map(league => ({
    league: league.league,
    seasons: league.seasons,
  }));
};
