declare namespace HomeScreenStore {
  type State = {
    isLoading: boolean;
    leagues: Array<{
      league: LeaguesService.GetLeagues.League;
      seasons: Array<{
        year: number;
      }>;
    }>;
  };
}
