import axios from 'axios';

import * as urls from './urls';
import {
  ICasesMalaysia,
  ICasesState,
  ICheckinMalaysia,
  ICheckinMalaysiaTime,
  ICheckinState,
  IClusters,
  IDeathsMalaysia,
  IDeathsState,
  IHospital,
  IIcu,
  IPkrc,
  IPopulation,
  ITestsMalaysia,
  ITraceMalaysia,
} from './interfaces/ICsv';

// epidemic
export const casesMalaysia = async (): Promise<ICasesMalaysia[]> => {
  const response = await axios.get(urls.cases_malaysia);
  const data: string = response.data;

  let objectArray = csvToObjectArray(data) as ICasesMalaysia[];

  return objectArray as ICasesMalaysia[];
};

export const casesState = async (): Promise<ICasesState[]> => {
  const response = await axios.get(urls.cases_state);
  const data: string = response.data;

  let object = csvToObjectArray(data);

  return object as ICasesState[];
};

export const clusters = async (): Promise<IClusters[]> => {
  const response = await axios.get(urls.clusters);
  const data: string = response.data;

  let object = csvToObjectArray(data);

  return object as IClusters[];
};

export const deathsMalaysia = async (): Promise<IDeathsMalaysia[]> => {
  const response = await axios.get(urls.deaths_malaysia);
  const data: string = response.data;

  let object = csvToObjectArray(data);

  return object as IDeathsMalaysia[];
};

export const deathsState = async (): Promise<IDeathsState[]> => {
  const response = await axios.get(urls.deaths_state);
  const data: string = response.data;

  let object = csvToObjectArray(data);

  return object as IDeathsState[];
};

export const hospital = async (): Promise<IHospital[]> => {
  const response = await axios.get(urls.hospital);
  const data: string = response.data;

  let object = csvToObjectArray(data);

  return object as IHospital[];
};

export const icu = async (): Promise<IIcu[]> => {
  const response = await axios.get(urls.icu);
  const data: string = response.data;

  let object = csvToObjectArray(data);

  return object as IIcu[];
};

export const pkrc = async (): Promise<IPkrc[]> => {
  const response = await axios.get(urls.pkrc);
  const data: string = response.data;

  let object = csvToObjectArray(data);

  return object as IPkrc[];
};

export const testsMalaysia = async (): Promise<ITestsMalaysia[]> => {
  const response = await axios.get(urls.tests_malaysia);
  const data: string = response.data;

  let object = csvToObjectArray(data);

  return object as ITestsMalaysia[];
};

// mysejahtera
export const checkinMalaysia = async (): Promise<ICheckinMalaysia[]> => {
  const response = await axios.get(urls.checkin_malaysia);
  const data: string = response.data;

  let object = csvToObjectArray(data);

  return object as ICheckinMalaysia[];
};

export const checkinMalaysiaTime = async (): Promise<
  ICheckinMalaysiaTime[]
> => {
  const response = await axios.get(urls.checkin_malaysia_time);
  const data: string = response.data;

  let object = csvToObjectArray(data);

  return object as ICheckinMalaysiaTime[];
};

export const checkinState = async (): Promise<ICheckinState[]> => {
  const response = await axios.get(urls.checkin_state);
  const data: string = response.data;

  let object = csvToObjectArray(data);

  return object as ICheckinState[];
};

export const traceMalaysia = async (): Promise<ITraceMalaysia[]> => {
  const response = await axios.get(urls.trace_malaysia);
  const data: string = response.data;

  let object = csvToObjectArray(data);

  return object as ITraceMalaysia[];
};

// static
export const population = async (): Promise<IPopulation[]> => {
  const response = await axios.get(urls.population);
  const data: string = response.data;

  let object = csvToObjectArray(data);

  return object as IPopulation[];
};

function csvToObjectArray(data: string): object[] {
  const rows = data.split('\n');
  const headers = rows[0].split(',');

  let objectArray = [];
  rows.forEach((row) => {
    const data = row.split(',');
    const object: object = {};
    for (let index in data) {
      if (!data[index]) {
        object[headers[index]] = null;
      } else {
        object[headers[index]] = data[index];
      }
    }
    objectArray.push(object);
  });

  // Remove header
  objectArray.shift();

  // Remove extra line
  objectArray.pop();

  return objectArray;
}

// function setDateAsKey(data: object): object {
//   let newData = {};
//   for (const i in data) {
//     let date = data[i].date;
//     newData[date] = data[i];
//   }
//   return newData;
// }

// function setStateAsKey(data: object): object {
//   let newData = {};
//   for (const i in data) {
//     let state = data[i].state;
//     newData[state] = data[i];
//   }
//   return newData;
// }
