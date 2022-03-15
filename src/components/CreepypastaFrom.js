import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export default function CreepypastaFrom({ handleCreateCreepypasta }) {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    trigger,
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
          onKeyUp={() => {
            trigger('title');
          }}
        />
        <label htmlFor="text">Text:</label>
        <textarea
          {...register('text', { required: 'You need a scary text!' })}
          id="text"
          onKeyUp={() => {
            trigger('text');
          }}
        />
        <label htmlFor="image">Image:</label>
        <input
          {...register('image', { required: 'You need a creepy image!' })}
          id="image"
          onKeyUp={() => {
            trigger('image');
          }}
        />
        <button type="submit">Save</button>
        <p>{errors.title && errors.title.message}</p>
        <p>{errors.text && errors.title.message}</p>
        <p>{errors.image && errors.title.message}</p>
      </form>
    </Grid>
  );

  function onSubmit(creepypasta) {
    handleCreateCreepypasta({
      title: creepypasta.title,
      text: creepypasta.text,
      image: creepypasta.image,
    });
    navigate('/');
  }
}

const Grid = styled.main`
  display: grid;
  gap: 20px;
`;
