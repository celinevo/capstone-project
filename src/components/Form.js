import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import styled from 'styled-components';
import { RedButton } from './Button';

export default function Form({ onCreateCreepypasta, creepypastaEdit }) {
  const initialWordcount = creepypastaEdit ? creepypastaEdit[0].wordcount : 0;

  const [wordCount, setWordCount] = useState(initialWordcount);
  const [counter, setCounter] = useState(20);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: creepypastaEdit
      ? creepypastaEdit[0]
      : { title: '', text: '', image: '' },
  });

  function onSubmit(creepypasta) {
    onCreateCreepypasta({
      id: creepypasta.isWritten ? creepypasta.id : nanoid(),
      title: creepypasta.title,
      text: creepypasta.text,
      wordcount: wordCount,
      image: creepypasta.image,
      isBookmarked: false,
      isWritten: true,
    });
    navigate('/');
  }
  function handleTextareaChange(e) {
    if (e.target.value === '') {
      setWordCount(0);
    } else {
      setWordCount(e.target.value.split(' ').length);
    }
  }

  return (
    <StyledForm
      aria-label="Create a creepypasta"
      onSubmit={handleSubmit(creepypasta => onSubmit(creepypasta))}
    >
      <Field>
        <Format>
          <Label htmlFor="title">Title:</Label>
          <TitleCounter name="Counter of characters from title">
            {counter}
          </TitleCounter>
        </Format>
        <Input
          {...register('title', {
            onChange: e => {
              setCounter(20 - e.target.value.length);
            },
            required: {
              value: true,
              message: 'You need a spookie title!',
            },
            minLength: 1,
            maxLength: {
              value: 20,
              message: 'Calm down there! Your title is too long.',
            },
          })}
          id="title"
          autoFocus
          maxLength="20"
        />
        <Error>{errors.title && errors.title.message}</Error>
      </Field>
      <Field>
        <Label htmlFor="text">Text:</Label>
        <Textarea
          {...register('text', { required: 'You need a scary text!' })}
          id="text"
          onChange={e => handleTextareaChange(e)}
        />
        <Error>{errors.text && errors.text.message}</Error>
        <Wordcount {...register('wordcount')} id="wordcount">
          Wordcount: {wordCount}
        </Wordcount>
      </Field>
      <Field>
        <Label htmlFor="image">Image:</Label>
        <Input
          {...register('image', {
            required: 'You need a creepy image!',
          })}
          id="image"
          placeholder=" Please use an URL: https://"
        />
        <Error>{errors.image && errors.image.message}</Error>
      </Field>
      <RedButton type="submit">Save</RedButton>
    </StyledForm>
  );
}

const StyledForm = styled.form`
  display: grid;
  gap: 25px;
  margin-bottom: 85px;
`;

const Format = styled.div`
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 1fr 1fr;
`;

const TitleCounter = styled.span`
  text-align: end;
`;

const Field = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const Label = styled.label``;

const Input = styled.input`
  border-radius: 6px;
  padding-bottom: 0px;
  border: 2px solid var(--passive);
  cursor: pointer;
  &:focus {
    outline: none;
    border: 2.5px solid var(--active-main);
  }
  @media (min-width: 600px) {
    height: 100%;
    width: 500px;
  }
`;

const Textarea = styled.textarea`
  width: 320px;
  height: 150px;
  padding: 2px;
  border-radius: 6px;
  border: 2px solid var(--passive);
  cursor: pointer;
  &:focus {
    outline: none;
    border: 2.5px solid var(--active-main);
  }
  @media (min-width: 500px) {
    height: 200px;
    width: 500px;
  }
`;

const Error = styled.p`
  color: var(--active);
  margin-top: 5px;
  font-size: 16px;
`;

const Wordcount = styled.p`
  margin-bottom: -10px;
`;
