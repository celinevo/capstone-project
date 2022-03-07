import { render, screen } from '@testing-library/react';
import Creepypasta from './Creepypasta.js';

describe('Creepypasta', () => {
  it('renders a title, text and wordcount', () => {
    render(
      <Creepypasta
        title="Slenderman"
        text="This is a story about Slenderman"
        wordcount="1978"
      />
    );

    const title = screen.getByText('Slenderman');
    expect(title).toBeInTheDocument();

    const text = screen.getByText('This is a story about Slenderman');
    expect(text).toBeInTheDocument();

    const wordcount = screen.getByText('1978');
    expect(wordcount).toBeInTheDocument();
  });
});
