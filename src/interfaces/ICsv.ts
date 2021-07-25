export interface IPopulation {
  date: string;
  state: string;
  idxs: number;
  pop: number;
  pop_18: number;
  pop_60: number;
}

export interface ICasesMalaysia {
  date: string;
  cases_new: number;
  cluster_import: number;
  cluster_religious: number;
  cluster_community: number;
  cluster_highRisk: number;
  cluster_education: number;
  cluster_detentionCentre: number;
  cluster_workplace: number;
}
