import React, { useState } from 'react';
import { CheckInputLabel, CheckInput } from './Input.styles';

interface Props {
  value: string;
  onChange: (isChecked: boolean, value: string) => void;
}

export const CheckBox: React.FC<Props> = ({ value, onChange }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckChange = () => {
    setIsChecked(!isChecked);
    onChange(!isChecked, value);
  };

  return (
    <div>
      <CheckInput
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckChange}
        value={value}
      />
      <CheckInputLabel>{value}</CheckInputLabel>
    </div>
  );
};

export default CheckBox;
