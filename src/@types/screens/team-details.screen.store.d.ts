declare namespace TeamDetailsStore {
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

  type State = {
    isLoading: boolean;
    details: {
      team?: Team;
      venue?: Venue;
    };
  };
}
