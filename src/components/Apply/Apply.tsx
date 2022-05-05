import { Bool, Button, Field, Text, Textarea, MultiChoice } from 'components';
import { useFormValues } from 'hooks';
import { ThemeProvider } from 'styled-components';
import * as S from './styles';
import { useFormData } from 'hooks';
import { Fragment, useState } from 'react';
import handler from 'pages/api/apply';

//a map to
const componentMap: any = {
  text: Text,
  textarea: Textarea,
  boolean: Bool,
  multichoice: MultiChoice,
};

//a map to conditionally render one field based on another
//key: what we want to conditionally render value: value it depends on
const conditionalRenderMap: any = {
  experience: 'age',
};

const conditionalRender = (values: any, content: any) => {
  const key = content.id; //experience
  const dependentKey = conditionalRenderMap[key]; //age
  //if they key of interest doesnt depend on another value, render that component
  if (!dependentKey) return true;
  const dependentValue = values[dependentKey]; //dependent
  if (!dependentValue) {
    //if false, don't render
    return false;
  } else {
    return true;
  }
};

export const Apply = () => {
  const { response, status } = useFormData();
  const { values, handleChange } = useFormValues();
  const [errors, setErrors] = useState(false);

  if (!response) {
    // API request failed, display error message or something.
    return null;
  }

  const theme: Frontier.Theme = response?.theme;

  const onChangeFn = (id: string) => (nextVal: string) =>
    handleChange(id, nextVal);

  const validateInfo = () => {
    let errorMap = {};
    response.sections.forEach(section => {
      section.content?.forEach((content: any) => {
        if (content?.metadata?.required && values[content.id] == null) {
          //@ts-ignore
          errorMap[content.id] = true;
        }
      });
    });
    return Object.keys(errorMap).length > 0;
  };

  const handleResetForm = () => {
    response.sections.forEach(section => {
      section.content.forEach((content: any) => {
        //@ts-ignore
        return (values[content.id] = null);
      });
    });
  };

  const handleSubmit = async () => {
    validateInfo();
    if (!errors) {
      try {
        const res = await fetch('/api/apply', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values),
        });
      } catch (err) {
        console.log(err);
      } finally {
        handleResetForm();
      }
    }
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
                const shouldRender = conditionalRender(values, content);
                //make sure it exists in component map
                if (!Component || !shouldRender) return null;
                return (
                  <Field
                    label={content.question_text}
                    key={content.question_text}
                  >
                    {content.metadata.required &&
                      values[content.id] == null && (
                        <p style={{ color: 'red' }}>*Required</p>
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
