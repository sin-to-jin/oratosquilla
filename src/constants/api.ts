export const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
} as const;

export const DEFAULT_CORS = 'cors';

// const collection = (name: string) => `${process.env.BACKEND_HOST}/api/${name}`;
// const member = (name: string, id: string) =>
//   `${process.env.BACKEND_HOST}/api/${name}/${id}`;
// export type Action = 'index' | 'show';
// export type ApiName = {
//   name: 'healthcheck' | 'human' | 'animal';
//   resources?: Array<Action>;
// };
// export const ApiNames: Array<ApiName> = [
//   {
//     name: 'healthcheck',
//     resources: ['index'],
//   },
//   {
//     name: 'human',
//   },
//   {
//     name: 'animal',
//   },
// ];
// type Resource = Partial<
//   Record<'show', (id: string) => string> | Record<'index', () => string>
// >;
// const resources = (
//   name: ApiName['name'],
//   resources?: Array<Action>
// ): Partial<Record<ApiName['name'], Resource>> => {
//   return {
//     [name]: {
//       ...((!resources || resources.includes('index')) && {
//         index: () => collection(name),
//       }),
//       ...((!resources || resources.includes('show')) && {
//         show: (id: string) => member(name, id),
//       }),
//     },
//   };
// };
// export const Api: Partial<Record<ApiName['name'], Resource>> = {
//   ...ApiNames.map((apiNames) => ({
//     ...resources(apiNames.name, apiNames.resources),
//   })),
// };

// const M: Partial<Record<ApiName['name'], Resource>> = {
//   human: {
//     show: (id: string) => id,
//     index: () => '',
//   },
// };

// const R: Partial<Record<ApiName['name'], Resource>> = {

// };
