export interface ICountryStats {
  CountryISO: string,
  Country: string,
  Continent: string,
  Population: number,
  PopulationDensity: number,
  MedianAge: number,
  Aged65Older: number,
  Aged70Older: number,
  ExtremePoverty: number,
  GdpPerCapita: number,
  CvdDeathRate: number,
  DiabetesPrevalence: number,
  HandwashingFacilities: number,
  HospitalBedsPerThousand: number,
  LifeExpectancy: number,
  FemaleSmokers: number,
  MaleSmokers: number,
}

export interface ICountry {
  Country: string,
  CountryCode: string,
  Slug: string,
  NewConfirmed: number,
  TotalConfirmed: number,
  NewDeaths: number,
  TotalDeaths: number,
  NewRecovered: number,
  TotalRecovered: number,
  Date: string,
  Premium: {
    CountryStats: ICountryStats,
  },
}