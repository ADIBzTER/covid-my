import { StateType } from 'types/Type';

export interface CasesMalaysiaOptions {
  date: 'all' | 'yyyy-mm-dd';
}

export interface CasesStateOptions {
  date: 'all' | 'yyyy-mm-dd';
  state: StateType;
}
