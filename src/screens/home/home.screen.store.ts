import {action} from 'mobx';
import {BaseStore} from '~/stores';
import {getLeagues} from '~/services';

type GetLeaguesDTO = LeaguesService.GetLeagues.GetLeaguesDTO;

class Store extends BaseStore<HomeScreenStore.State> {
  constructor() {
    super({
      isLoading: false,
      leagues: [],
    });
  }

  @action
  public async fetchLeagues(): Promise<void> {
    this.state.isLoading = true;

    let response: GetLeaguesDTO;

    try {
      response = await getLeagues();
    } catch (error) {
      throw error;
    } finally {
      this.setState(state => {
        state.isLoading = false;
      });
    }

    this.setState(state => {
      state.leagues = response;
    });
  }
}

export const HomeScreenStore = new Store();
