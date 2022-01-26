import {httpClientGet} from '~/clients';
import Config from 'react-native-config';

type GetTeamParams = TeamService.GetTeam.GetTeamParams;
type GetTeamResponse = TeamService.GetTeam.GetTeamResponse;
type GetTeamDTO = TeamService.GetTeam.GetTeamDTO;

export const getTeamById = async ({
  teamId,
}: GetTeamParams): Promise<GetTeamDTO | undefined> => {
  const {data} = await httpClientGet<GetTeamResponse>({
    url: Config.API_URL,
    path: 'teams',
    params: {
      id: teamId,
    },
  });

  return data.response.find(() => true);
};
