import axios from 'axios';

import * as urls from './urls';
import { ICasesMalaysia, IPopulation } from './interfaces/ICsv';
import { CasesMalaysiaOptions, PopulationOptions } from './interfaces/IOptions';

// epidemic
export const casesMalaysia = async (
  options?: CasesMalaysiaOptions
): Promise<ICasesMalaysia> => {
  const response = await axios.get(urls.cases_malaysia);
  const data: string = response.data;

  let object = csvToObjectArray(data);
  object = setDateAsKey(object);
  object = handleOptions(object, options);

  return object as ICasesMalaysia;
};

export const casesState = async (): Promise<string> => {
  const response = await axios.get(urls.cases_state);
  const data: string = response.data;
  return data;
};

export const clusters = async (): Promise<string> => {
  const response = await axios.get(urls.clusters);
  const data: string = response.data;
  return data;
};

export const deathsMalaysia = async (): Promise<string> => {
  const response = await axios.get(urls.deaths_malaysia);
  const data: string = response.data;
  return data;
};

export const hospital = async (): Promise<string> => {
  const response = await axios.get(urls.hospital);
  const data: string = response.data;
  return data;
};

export const icu = async (): Promise<string> => {
  const response = await axios.get(urls.icu);
  const data: string = response.data;
  return data;
};

export const testsMalaysia = async (): Promise<string> => {
  const response = await axios.get(urls.tests_malaysia);
  const data: string = response.data;
  return data;
};

export const pkrc = async (): Promise<string> => {
  const response = await axios.get(urls.pkrc);
  const data: string = response.data;
  return data;
};

// mysejahtera
export const checkinMalaysia = async (): Promise<string> => {
  const response = await axios.get(urls.checkin_malaysia);
  const data: string = response.data;
  return data;
};

export const checkinMalaysiaTime = async (): Promise<string> => {
  const response = await axios.get(urls.checkin_malaysia_time);
  const data: string = response.data;
  return data;
};

export const traceMalaysia = async (): Promise<string> => {
  const response = await axios.get(urls.trace_malaysia);
  const data: string = response.data;
  return data;
};

// static
export const population = async (
  options?: PopulationOptions
): Promise<IPopulation> => {
  const response = await axios.get(urls.population);
  const data: string = response.data;

  let object = csvToObjectArray(data);
  object = setStateAsKey(object);
  object = handleOptions(object, options);

  return object as IPopulation;
};

function csvToObjectArray(data: string): object {
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

  // Change from array to object
  objectArray = { ...objectArray };

  return objectArray;
}

function setDateAsKey(data: object): object {
  let newData = {};
  for (const i in data) {
    let date = data[i].date;
    newData[date] = data[i];
  }
  return newData;
}

function setStateAsKey(data: object): object {
  let newData = {};
  for (const i in data) {
    let state = data[i].state;
    newData[state] = data[i];
  }
  return newData;
}

// type IAll = ICasesMalaysia | IPopulation;
function handleOptions(object: any, options: any): any {
  // No options
  if (!options) return object;

  if (options.date) {
    object = object[options.date];
  }

  if (options.state) {
    object = object[options.state];
  }

  return object;
}
