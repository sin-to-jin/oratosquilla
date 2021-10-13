import { Api } from '@/constants/api';
import { useApiCall } from '@/custom/hooks';
import React from 'react';
import Inputs from './lib/Inputs';

const Main = () => {
  const [loading, api] = useApiCall({
    endpoint: Api.human.index(),
    options: { waitMS: 500, cors: 'no-cors' },
  });
  const [response, setResponse] = React.useState('');
  console.log(loading);

  return (
    <div>
      Main: {response}
      <br />
      <button
        onClick={() =>
          api.all({
            successCallback: (response) => {
              setResponse(JSON.stringify(response));
            },
          })
        }
      >
        all
      </button>
      <br />
      <br />
      <Inputs />
    </div>
  );
};

export default Main;
