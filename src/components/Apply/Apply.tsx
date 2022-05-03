import { Bool, Button, Field, Text, Textarea } from 'components';
import { useFormValues } from 'hooks';
import { ThemeProvider } from 'styled-components';
import * as S from './styles';
import { useFormData } from 'hooks';

const componentMap: any = {
  text: Text,
  textarea: Textarea,
  boolean: Bool,
  multichoice: () => null,
};

export const Apply = () => {
  const { response, status } = useFormData();
  const { values, handleChange } = useFormValues();

  if (!response) {
    // API request failed, display error message or something.
    return null;
  }

  const theme: Frontier.Theme = response?.theme;

  const onChangeFn = (id: string) => (nextVal: string) =>
    handleChange(id, nextVal);

  const handleSubmit = () => {
    console.log('values');
    console.log('submit vals: %o', values);
  };

  return (
    <ThemeProvider theme={theme}>
      <S.Frame>
        {response.sections.map(section => {
          return (
            <S.Elements id={section.id}>
              <h1>{section.title}</h1>
              {section.content.map((content: any) => {
                const Component = componentMap[content.type];
                console.log('the values', values);
                return (
                  <Field label={content.question_text}>
                    <Component
                      value={values?.text}
                      options={content.metadata}
                      onChange={onChangeFn(content.type)}
                    ></Component>
                  </Field>
                );
                return null;
              })}
            </S.Elements>
          );
        })}
        <Button onClick={handleSubmit}>Button</Button>
      </S.Frame>
    </ThemeProvider>
  );
};
