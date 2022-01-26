import {action} from 'mobx';
import {BaseStore} from '~/stores';
import {getTeamById} from '~/services';

type GetTeamDTO = TeamService.GetTeam.GetTeamDTO | undefined;

class Store extends BaseStore<TeamDetailsStore.State> {
  constructor() {
    super({
      isLoading: false,
      details: {
        team: {
          country: '',
          founded: 0,
          id: 0,
          logo: '',
          name: '',
          national: false,
        },
        venue: {
          address: '',
          capacity: 0,
          city: '',
          id: 0,
          image: '',
          name: '',
          surface: '',
        },
      },
    });
  }

  @action
  public async fetchTeam({teamId}: {teamId: string}): Promise<void> {
    this.state.isLoading = true;

    let response: GetTeamDTO;

    try {
      response = await getTeamById({teamId});
    } catch (error) {
      throw error;
    } finally {
      this.setState(state => {
        state.isLoading = false;
      });
    }

    this.setState(state => {
      state.details = {
        ...state.details,
        team: response?.team,
        venue: response?.venue,
      };
    });
  }
}

export const TeamDetailsScreenStore = new Store();
