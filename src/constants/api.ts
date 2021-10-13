import { ApiName, Apis } from '@/types/api';

export const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
} as const;

export const DEFAULT_CORS = 'cors';

const collection = (name: ApiName['name']) =>
  `${process.env.BACKEND_HOST}/api/${name}`;
const member = (name: ApiName['name'], id: string) =>
  `${collection(name)}/${id}`;

export const ApiNames: Array<ApiName> = [
  {
    name: 'healthcheck',
    resources: ['index'],
  },
  {
    name: 'human',
  },
  {
    name: 'animal',
  },
];

export const Api: Apis = Object.assign(
  {},
  ...ApiNames.map((apiName) => ({
    [apiName.name]: {
      ...((!apiName.resources || apiName.resources.includes('index')) && {
        index: () => collection(apiName.name),
      }),
      ...((!apiName.resources || apiName.resources.includes('show')) && {
        show: (id: string) => member(apiName.name, id),
      }),
    },
  }))
);
