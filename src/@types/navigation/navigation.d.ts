declare namespace Navigation {
  type RootStackParamList = {
    Home: {};
    Standings: {
      leagueId: string;
      season: string;
    };
    TeamDetails: {
      teamId: string;
    };
  };
}
