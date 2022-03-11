import { Bool, Button, Field, Text, Textarea } from 'components';
import { useFormValues } from 'hooks';
import { ThemeProvider } from 'styled-components';
import * as S from './styles';


export const Demo = () => {
  const jobTheme: Frontier.Theme = {
    primary_color: '#3888E7',
    secondary_color: '#38E7DC',
    background_color: '#ECF9FE',
    text_color: '#2A2431',
  };

  const { values, handleChange } = useFormValues();

  const onChangeFn = (id: string) => (nextVal: string) =>
    handleChange(id, nextVal);

  const handleSubmit = () => {
    console.log('submit vals: %o', values);
  };

  return (
    <ThemeProvider theme={jobTheme}>
      <S.Frame>
        <S.Elements>
          <Field label="Text field">
            <Text onChange={onChangeFn('text')} value={values?.text} />
          </Field>
          <Field label="Textarea field">
            <Textarea
              onChange={onChangeFn('textarea')}
              value={values?.textarea}
            />
          </Field>
          <Field label="Boolean field">
            <Bool onChange={onChangeFn('bool')} value={values?.bool} />
          </Field>
          <Button onClick={handleSubmit}>Button</Button>
        </S.Elements>
        <S.Readout>
          {JSON.stringify(values, null, 4)}
        </S.Readout>
      </S.Frame>
    </ThemeProvider>
  );
};
