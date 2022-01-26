declare namespace TeamService {
  namespace GetTeam {
    type GetTeamParams = {
      teamId: string;
    };

    type Venue = {
      address: string;
      capacity: number;
      city: string;
      id: number;
      image: string;
      name: string;
      surface: string;
    };

    type Team = {
      country: string;
      founded: number;
      id: number;
      logo: string;
      name: string;
      national: boolean;
    };

    type GetTeamResponse = {
      results: number;
      response: Array<{
        team: Team;
        venue: Venue;
      }>;
    };

    type GetTeamDTO = {
      team: Team;
      venue: Venue;
    };
  }
}
