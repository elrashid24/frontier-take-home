import * as S from './styles';
import { ChangeEvent } from 'react';
import { BaseField } from '../form';
import Select from 'react-select';

type MultiChoiceProps = BaseField & {};

export const MultiChoice = ({ onChange, value, options }: MultiChoiceProps) => {
  //@ts-ignore
  const languages = options?.options;
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    //@ts-ignore
    onChange(event?.value || undefined);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <Select
            options={languages}
            onChange={handleChange}
            value={value}
            placeholder={value}
          />
        </div>
        <div className="col-md-4"></div>
      </div>
    </div>
  );
};
