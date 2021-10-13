import React from 'react';
import Button from '../Button';
import InputText from './InputText';
import { v4 as uuidv4 } from 'uuid';

export type InputValue = {
  uuid: string;
  value: string;
};

export const create = (): InputValue => ({ uuid: uuidv4(), value: '' });

const Inputs = (): React.ReactElement => {
  const [inputValues, setInputValues] = React.useState([create()]);

  const update = (uuid: string, value: string) => {
    return inputValues.map((inputValue) => {
      return inputValue.uuid === uuid ? { ...inputValue, value } : inputValue;
    });
  };
  const destroy = (uuid: string) => {
    return inputValues.filter((v) => v.uuid !== uuid);
  };

  return (
    <>
      {inputValues.map(({ uuid, value }) => {
        return (
          <div key={uuid} style={{ alignItems: 'center', display: 'flex' }}>
            <InputText
              value={value}
              onChange={(e) => setInputValues(update(uuid, e.target.value))}
            />
            <Button onClick={() => setInputValues(destroy(uuid))}>-</Button>
          </div>
        );
      })}
      <Button onClick={() => setInputValues([...inputValues, create()])}>
        +
      </Button>
    </>
  );
};

export default Inputs;
