import React from 'react';
import Button from '../Button';
import InputText from './InputText';

export type InputValue = {
  index: number;
  value: string;
};

const Inputs = (): React.ReactElement => {
  const [inputLength, setInputLength] = React.useState(1);
  const [inputValues, setInputValues] = React.useState<Array<InputValue>>([
    { index: 1, value: '' },
  ]);
  const getInputValue = (index: number): InputValue => {
    return inputValues.find((v) => v.index === index + 1) as InputValue;
  };
  const newInputValues = (index: number, value: string): Array<InputValue> => {
    return inputValues.map((inputValue) => {
      return inputValue.index === index + 1
        ? { ...inputValue, value }
        : inputValue;
    });
  };
  const deleteInputValues = (index: number): Array<InputValue> => {
    return inputValues.filter((v) => v.index !== index);
  };

  const incrementInput = () => {
    const newIndex = inputLength + 1;
    setInputLength(newIndex);
    setInputValues([...inputValues, { index: newIndex, value: '' }]);
  };
  const decrementInput = () => {
    setInputLength(inputLength - 1);
    setInputValues(deleteInputValues(inputLength));
  };

  return (
    <>
      {[...Array(inputLength)].map((_, i) => {
        return (
          <div key={i} style={{ alignItems: 'center', display: 'flex' }}>
            <InputText
              value={getInputValue(i).value}
              onChange={(e) =>
                setInputValues(newInputValues(i, e.target.value))
              }
            />
            <Button onClick={decrementInput}>-</Button>
          </div>
        );
      })}
      <Button onClick={incrementInput}>+</Button>
    </>
  );
};

export default Inputs;
