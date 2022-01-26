import {action} from 'mobx';
import {BaseStore} from '~/stores';
import {getStandings} from '~/services';

type GetStandingsDTO = StandingsService.GetStandings.GetStandingsDTO;

class Store extends BaseStore<StandingsScreenStore.State> {
  constructor() {
    super({
      isLoading: false,
      league: {
        name: '',
        country: '',
        standings: [],
      },
    });
  }

  @action
  public async fetchStandings({
    leagueId,
    season,
  }: {
    leagueId: string;
    season: string;
  }): Promise<void> {
    this.state.isLoading = true;

    let response: GetStandingsDTO;

    try {
      response = await getStandings({leagueId, season});
    } catch (error) {
      throw error;
    } finally {
      this.setState(state => {
        state.isLoading = false;
      });
    }

    this.setState(state => {
      state.league = response;
    });
  }
}

export const StandingsScreenStore = new Store();
