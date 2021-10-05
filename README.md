# oratosquilla

fetch api wrapper on frontend react hooks.

## SetUp

git clone git@github.com:ogasawaraShinnosuke/oratosquilla.git
cd oratosquilla
yarn install

## Started

- yarn dev
- yarn server

1. Please open 'http://localhost:8080'
2. When you click 'all' button, fetch express server api with "oratosquilla"

## How to use

```ts
const [loading, api] = useApiCall({
  endpoint: 'http://localhost:3001/api/human',
});

api.all({
  successCallback: (response) => {
    console.info(response);
  },
});
```
