import { DateType, IType, StateType } from '../types/Type';

// epidemic
export interface ICasesMalaysia {
  date: DateType;
  cases_new: string;
  cluster_import: string;
  cluster_religious: string;
  cluster_community: string;
  cluster_highRisk: string;
  cluster_education: string;
  cluster_detentionCentre: string;
  cluster_workplace: string;
}

export interface ICasesState {
  date: DateType;
  state: StateType;
  cases_new: string;
}

export interface IClusters {
  cluster: string;
  state: StateType;
  district: string;
  date_announced: DateType;
  date_last_onset: DateType;
  category: string;
  status: string;
  cases_new: string;
  cases_total: string;
  cases_active: string;
  tests: string;
  icu: string;
  deaths: string;
  recovered: string;
}

export interface IDeathsMalaysia {
  date: DateType;
  deaths_new: string;
}

export interface IDeathsState {
  date: DateType;
  state: StateType;
  deaths_new: string;
}

export interface IHospital {
  date: DateType;
  state: StateType;
  beds: string;
  beds_noncrit: string;
  addmitted_pui: string;
  admitted_covid: string;
  admitted_total: string;
  discharged_pui: string;
  discharged_covid: string;
  discharged_total: string;
  hosp_covid: string;
  hosp_pui: string;
  hosp_noncovid: string;
}

export interface IIcu {
  date: DateType;
  state: StateType;
  bed_icu: string;
  bed_icu_rep: string;
  bed_icu_total: string;
  bed_icu_covid: string;
  vent: string;
  vent_port: string;
  icu_covid: string;
  icu_pui: string;
  icu_noncovid: string;
  vent_covid: string;
  vent_pui: string;
  vent_noncovid: string;
}

export interface IPkrc {
  date: DateType;
  state: StateType;
  beds: string;
  admitted_pui: string;
  admitted_covid: string;
  admitted_total: string;
  discharge_pui: string;
  discharge_covid: string;
  discharge_total: string;
  pkrc_covid: string;
  pkrc_pui: string;
  pkrc_noncovid: string;
}

export interface ITestsMalaysia {
  date: DateType;
  'rtk-ag': string;
  pcr: string;
}

// mysejahtera
export interface ICheckinMalaysia {
  date: DateType;
  checkins: string;
  unique_ind: string;
  unique_loc: string;
}

export interface ICheckinMalaysiaTime {
  date: DateType;
  // TODO (put 0 to 48)
  i: IType;
}

export interface ICheckinState {
  date: DateType;
  state: StateType;
  checkins: string;
  unique_ind: string;
  unique_loc: string;
}

export interface ITraceMalaysia {
  date: DateType;
  casual_contacts: string;
  hide_large: string;
  hide_small: string;
}

// static
export interface IPopulation {
  date: DateType;
  state: StateType | 'Malaysia';
  idxs: string;
  pop: string;
  pop_18: string;
  pop_60: string;
}
