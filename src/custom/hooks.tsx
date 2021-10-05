import { headers } from '@/constants/api';
import {
  ApiCollection,
  ApiMember,
  ApiRequest,
  Collection,
  Member,
} from '@/types/api';
import React from 'react';

const apiCall = ({
  endpoint,
  method,
  payload,
  successCallback,
}: ApiRequest): Promise<void> => {
  const body = payload ? JSON.stringify({ ...payload }) : null;

  return fetch(endpoint, { method, headers, body })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error(`Error: ${response.status}`);
      }
    })
    .then((response) => {
      successCallback(response);
    })
    .catch((error) => {
      console.error(error);
    });
};

export const useApiCall = ({
  endpoint,
  options,
}: Pick<ApiRequest, 'endpoint' | 'options'>): [
  boolean,
  {
    all: ApiCollection;
    create: ApiCollection;
    one: ApiMember;
    update: ApiMember;
    destroy: ApiMember;
  }
] => {
  const [loading, setLoading] = React.useState(false);

  const apiCallWrapper = ({
    endpoint,
    method,
    payload,
    successCallback,
  }: ApiRequest) => {
    setLoading(true);
    apiCall({
      endpoint,
      method,
      payload,
      successCallback,
    }).finally(() => {
      setTimeout(() => setLoading(false), options?.waitMS ?? 0);
    });
  };

  const all = ({ successCallback }: Collection): void => {
    apiCallWrapper({ endpoint, method: 'GET', successCallback });
  };

  const create = ({ payload, successCallback }: Collection): void => {
    apiCallWrapper({ endpoint, method: 'POST', payload, successCallback });
  };

  const one = ({ resourceId, successCallback }: Member): void => {
    apiCallWrapper({
      endpoint: `${endpoint}/${resourceId}`,
      method: 'GET',
      successCallback,
    });
  };

  const update = ({ resourceId, payload, successCallback }: Member): void => {
    apiCallWrapper({
      endpoint: `${endpoint}/${resourceId}`,
      method: 'PATCH',
      payload,
      successCallback,
    });
  };

  const destroy = ({ resourceId, successCallback }: Member): void => {
    apiCallWrapper({
      endpoint: `${endpoint}/${resourceId}`,
      method: 'DELETE',
      successCallback,
    });
  };

  return [
    loading,
    {
      all,
      create,
      one,
      update,
      destroy,
    },
  ];
};
