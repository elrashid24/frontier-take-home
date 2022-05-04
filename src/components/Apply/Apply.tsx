import { Bool, Button, Field, Text, Textarea, MultiChoice } from 'components';
import { useFormValues } from 'hooks';
import { ThemeProvider } from 'styled-components';
import * as S from './styles';
import { useFormData } from 'hooks';
import { Fragment, useState } from 'react';
import handler from 'pages/api/apply';

const componentMap: any = {
  text: Text,
  textarea: Textarea,
  boolean: Bool,
  multichoice: MultiChoice,
};

export const Apply = () => {
  const { response, status } = useFormData();
  const { values, handleChange } = useFormValues();
  const [errors, setErrors] = useState('');

  if (!response) {
    // API request failed, display error message or something.
    return null;
  }

  const theme: Frontier.Theme = response?.theme;

  const onChangeFn = (id: string) => (nextVal: string) =>
    handleChange(id, nextVal);

  const handleSubmit = async () => {
    handleResetErrors();
    validateInfo();
    if (!!errors) {
      console.log('values');
      console.log('submit vals: %o', values);
    }
    // fetch('/api/route-name', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(values),
    // });
  };

  const handleResetErrors = () => {
    setErrors('');
  };

  const validateInfo = () => {
    response.sections.map(section => {
      section.content.map((content: any) => {
        console.log(
          'required',
          content?.metadata?.required,
          'value',
          values[content.id],
        );
        if (content?.metadata?.required && values[content.id] === undefined) {
          setErrors('Required Field');
        }
      });
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <S.Frame>
        {response.sections.map(section => {
          return (
            <S.Elements key={section.id}>
              <h1>{section.title}</h1>
              {section.content.map((content: any) => {
                const Component = componentMap[content.type];
                return (
                  <Field
                    label={content.question_text}
                    key={content.question_text}
                  >
                    {content.metadata.required &&
                      values[content.id] === undefined && (
                        <p style={{ color: 'red' }}>{errors}</p>
                      )}
                    <Component
                      value={values[content.id]}
                      options={content.metadata}
                      onChange={onChangeFn(content.id)}
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
