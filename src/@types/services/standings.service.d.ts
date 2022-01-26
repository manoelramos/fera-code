declare namespace StandingsService {
  namespace GetStandings {
    type TeamItem = {
      rank: number;
      points: number;
      team: {
        id: number;
        name: string;
        logo: string;
      };
      all: {
        played: number;
        win: number;
        lose: number;
        draw: number;
      };
    };

    type GetStandingsParams = {
      leagueId: string;
      season: string;
    };

    type GetStandingsResponse = {
      results: number;
      response: Array<{
        league: {
          id: number;
          name: string;
          country: string;
          season: string;
          standings: Array<Array<TeamItem>>;
        };
      }>;
    };

    type GetStandingsDTO = {
      name?: string;
      country?: string;
      standings?: Array<TeamItem>;
    };
  }
}
