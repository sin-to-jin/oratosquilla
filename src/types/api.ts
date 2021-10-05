type Option = {
  waitMS?: number;
  cors?: 'cors' | 'no-cors' | 'same-origin';
};

export interface ApiRequest {
  endpoint: string;
  method: 'GET' | 'PATCH' | 'PUT' | 'POST' | 'DELETE';
  payload?: Record<string, string>;
  successCallback: (response: any) => void;
  options?: Option;
}

type Resource = { resourceId: string | number };
type Collection = Pick<ApiRequest, 'payload' | 'successCallback'>;
type Member = Collection & Resource;
type ApiMember = ({ resourceId, payload, successCallback }: Member) => void;
type ApiCollection = ({ payload, successCallback }: Collection) => void;

export type { Collection, Member, ApiMember, ApiCollection };
