import { useReducer } from 'react';

export type SupportedValues =
  | Frontier.ElementMeta['options']
  | string
  | number
  | boolean;

export type FormValues = {
  [field: string]: SupportedValues;
};

type UseFormValuesHookValue = {
  handleChange: (id: string, nextValue?: SupportedValues) => void;
  values: FormValues;
};

type FormReducerAction = {
  type: 'change';
  id: string;
  nextVal?: SupportedValues;
};

/**
 * Manage values from the form
 */
export const useFormValues = (job?: Frontier.Job): UseFormValuesHookValue => {
  const valueReducer = (state: FormValues, action: FormReducerAction) => {
    console.log('action', action, 'state', state);
    switch (action.type) {
      case 'change':
        console.log('change field: %s=%s', action.id, action.nextVal);
        return {
          ...state,
          [action.id]: action.nextVal,
        };
      default:
        return state;
    }
  };

  // Return an object with { id: undefined }
  const defaultValues =
    job?.sections
      .flatMap(s => s.content)
      .reduce((val, field) => {
        return {
          [field.id]: undefined,
          ...val,
        };
      }, {}) || {};

  const [values, dispatch] = useReducer(valueReducer, defaultValues);

  const handleChange: UseFormValuesHookValue['handleChange'] = (
    id,
    nextVal,
  ) => {
    dispatch({ type: 'change', nextVal, id });
  };
  console.log('values from the reducer', values);
  return {
    handleChange,
    values,
  };
};
