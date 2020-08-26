export interface UnitRates {
  units: number;
  rate: number;
  ratecardPercent: number;
  totalRate: number;
  rcRate: number;
}

export interface DemoValues {
  imps: number;
  impsPercent: number;
  cpm: number;
  cpmPercent: number;
  grps: number;
  vpvh: number;
  cpp: number;
  totalImps: number;
  totalGrps: number;
  totalCpm: number;
  ue: number;
  rcImps: number;
}

export interface IWeekDemo {
  unitRates: UnitRates;
  demoValues: DemoValues;
}

export interface IProduct {
  id: string;
  rate: number;
  imps: number;
  units: number;
  cpm: number;
  cpp: number;
  vpvh: number;
  ue: number;
  weeks: IWeekDemo[];
}
