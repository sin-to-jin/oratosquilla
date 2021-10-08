import { useApiCall } from '@/custom/hooks';
import React from 'react';

const Main = () => {
  const [loading, api] = useApiCall({
    endpoint: `${process.env.BACKEND_HOST}/api/human`,
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
    </div>
  );
};

export default Main;
