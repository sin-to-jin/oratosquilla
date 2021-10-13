import React from 'react';

type Props = {
  type?: 'button' | 'submit';
  children: string | React.ReactElement;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const Button = ({
  type = 'button',
  children,
  onClick,
}: Props): React.ReactElement => {
  return (
    <>
      <button type={type} onClick={onClick}>
        {children}
      </button>
    </>
  );
};

export default Button;
