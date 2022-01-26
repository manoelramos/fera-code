declare namespace StandingsScreenStore {
  type State = {
    isLoading: boolean;
    league: {
      name?: string;
      country?: string;
      standings?: Array<StandingsService.GetStandings.TeamItem>;
    };
  };
}
