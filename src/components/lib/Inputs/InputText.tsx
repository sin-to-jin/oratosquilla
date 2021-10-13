import React from 'react';

type Props = {
  value: string;
  className?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
};

const InputText = ({
  value,
  className = '',
  onChange,
  onFocus,
  onBlur,
}: Props): React.ReactElement => {
  return (
    <div className={`${className}`}>
      <input
        type="text"
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
      />
    </div>
  );
};

export default InputText;
