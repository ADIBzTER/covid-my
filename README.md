# covid-my

**Unofficial** client api for getting Covid-19 data from Official github repo of Ministry of Health of Malaysia

Sources of data:  
- https://github.com/MoH-Malaysia/covid19-public
- https://github.com/CITF-Malaysia/citf-public

## Features

☑️ **Promise-based**  
☑️ **Intellisense (Atleast for VS Code)**

## Getting Started

### Install using npm

```
npm install covid-my
```

## Usage

### Using promise

```
const covid = require('covid-my')

covid.deathsMalaysia()
  .then(res => console.log(res))
  .catch(err => console.error(err));
```

### Using async/await

```
const covid = require('covid-my')

(async () => {
  try {
    const nationalDeaths = await covid.deathsMalaysia();
    console.log(nationalDeaths);
  } catch (err) {
    console.error(err);
  }
})();
```

### Response
All responses are **array of object**. You need to loop through the responses to get a specific data. This might change in future since I am planning to add in-built functionality for it.

## License

This project is licenced under the [MIT License](https://github.com/ADIBzTER/arkib/blob/master/LICENSE)

**BUT**

The data fetched may be used per the terms of reference found in Appendix B of the Pekeliling Pelaksanaan Data Terbuka Bil.1/2015, accessible here:

https://www.data.gov.my/p/pekeliling-data-terbuka