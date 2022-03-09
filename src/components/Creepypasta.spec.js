import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Creepypasta from './Creepypasta.js';

describe('Creepypasta', () => {
  it('renders a title, image, text and wordcount', () => {
    render(
      <MemoryRouter>
        <Creepypasta
          title="Slenderman"
          image="https://www.creepypasta.com/wp-content/uploads/2010/01/slenderman-1.jpg.webp"
          text="This is a story about Slenderman"
          wordcount="1978"
        />
      </MemoryRouter>
    );

    const title = screen.getByText('Slenderman');
    expect(title).toBeInTheDocument();

    const image = screen.getByAltText('Slenderman');
    expect(image).toBeInTheDocument();

    const text = screen.getByText('This is a story about Slenderman');
    expect(text).toBeInTheDocument();

    const wordcount = screen.getByText(/1978/);
    expect(wordcount).toBeInTheDocument();
  });
});
