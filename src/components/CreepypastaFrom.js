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
    <Grid onSubmit={handleSubmit(creepypasta => onSubmit(creepypasta))}>
      <form aria-label="Create a creepypasta">
        <label htmlFor="title">Title:</label>
        <input
          {...register('title', {
            required: 'You need a spooky title!',
            maxLength: {
              value: 25,
              message: 'Calm down there! Your title is too long.',
            },
          })}
          id="title"
        />
        <label htmlFor="text">Text:</label>
        <textarea
          {...register('text', { required: 'You need a scary text!' })}
          id="text"
          onChange={e => setWordCount(e.target.value.split(' ').length)}
        />
        <p {...register('wordcount')} id="wordcount">
          {wordCount}
        </p>
        <label htmlFor="image">Image:</label>
        <input
          {...register('image', { required: 'You need a creepy image!' })}
          id="image"
        />
        <button type="submit">Save</button>
        <p>{errors.title && errors.title.message}</p>
        <p>{errors.text && errors.text.message}</p>
        <p>{errors.image && errors.image.message}</p>
      </form>
    </Grid>
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

const Grid = styled.main`
  display: grid;
  gap: 20px;
`;
