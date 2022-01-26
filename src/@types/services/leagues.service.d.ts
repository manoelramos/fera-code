declare namespace LeaguesService {
  namespace GetLeagues {
    type League = {
      id: number;
      name: string;
      type: string;
      logo: string;
    };

    type LeagueItem = {
      league: League;
      country: {
        name: string;
      };
      seasons: Array<{
        year: number;
      }>;
    };

    type GetLeaguesResponse = {
      results: number;
      response: Array<LeagueItem>;
    };

    type GetLeaguesDTO = Array<{
      league: League;
      seasons: Array<{
        year: number;
      }>;
    }>;
  }
}
