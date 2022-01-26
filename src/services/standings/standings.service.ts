import {httpClientGet} from '~/clients';
import Config from 'react-native-config';

type GetStandingsParams = StandingsService.GetStandings.GetStandingsParams;
type GetStandingsResponse = StandingsService.GetStandings.GetStandingsResponse;
type GetStandingsDTO = StandingsService.GetStandings.GetStandingsDTO;

export const getStandings = async ({
  leagueId,
  season,
}: GetStandingsParams): Promise<GetStandingsDTO> => {
  const {data} = await httpClientGet<GetStandingsResponse>({
    url: Config.API_URL,
    path: 'standings',
    params: {
      league: leagueId,
      season,
    },
  });

  const response = data.response.find(() => true);
  const standings = response?.league.standings.find(() => true);

  return {
    name: response?.league.name,
    country: response?.league.country,
    standings: standings?.map(team => ({
      rank: team.rank,
      points: team.points,
      team: {
        id: team.team.id,
        name: team.team.name,
        logo: team.team.logo,
      },
      all: {
        played: team.all.played,
        win: team.all.win,
        lose: team.all.lose,
        draw: team.all.draw,
      },
    })),
  };
};
