import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import styled from 'styled-components';
import { nanoid } from 'nanoid';

export default function CreepypastaFrom({ handleCreateCreepypasta }) {
  const [wordCount, setWordCount] = useState(0);

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <Form
      aria-label="Create a creepypasta"
      onSubmit={handleSubmit(creepypasta => onSubmit(creepypasta))}
    >
      <Field>
        <Label htmlFor="title">Title:</Label>
        <Input
          {...register('title', {
            required: 'You need a spooky title!',
            maxLength: {
              value: 25,
              message: 'Calm down there! Your title is too long.',
            },
          })}
          id="title"
        />
        <Error>{errors.title && errors.title.message}</Error>
      </Field>
      <Field>
        <Label htmlFor="text">Text:</Label>
        <Textarea
          {...register('text', { required: 'You need a scary text!' })}
          id="text"
          onChange={e => setWordCount(e.target.value.split(' ').length)}
        />
        <Error>{errors.text && errors.text.message}</Error>
        <Wordcount {...register('wordcount')} id="wordcount">
          Wordcount: {wordCount}
        </Wordcount>
      </Field>
      <Field>
        <Label htmlFor="image">Image:</Label>
        <Input
          {...register('image', { required: 'You need a creepy image!' })}
          id="image"
          placeholder=" Please use a link"
        />
        <Error>{errors.image && errors.image.message}</Error>
      </Field>
      <Button type="submit">Save</Button>
    </Form>
  );

  function onSubmit(creepypasta) {
    handleCreateCreepypasta({
      id: nanoid(),
      title: creepypasta.title,
      text: creepypasta.text,
      wordcount: wordCount,
      image: creepypasta.image,
      isSpookmarked: false,
    });
    navigate('/');
  }
}

const Form = styled.form`
  display: grid;
  gap: 25px;
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
  @media (min-width: 500px) {
    height: 200px;
    width: 500px;
  }
`;

const Button = styled.button`
  background-color: #990000;
  border: none;
  border-radius: 6px;
  color: #e6e6e6;
  font-family: 'Special Elite';
  font-size: 18px;
  padding: 12px 10px 10px 10px;
  width: 80px;
  justify-self: center;
`;

const Error = styled.p`
  color: #990000;
  margin: 5px 0px 0px 0px;
  font-size: 16px;
`;

const Wordcount = styled.p`
  margin-bottom: -10px;
`;
