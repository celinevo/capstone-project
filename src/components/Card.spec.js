import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Card from './Card.js';

const title = 'Slenderman';

const wordcount = '1978';

describe('Card', () => {
  it('renders a title, a wordcount and a link', () => {
    render(
      <MemoryRouter>
        <Card title={title} wordcount={wordcount} />
      </MemoryRouter>
    );

    const storyTitle = screen.getByText('Slenderman');
    expect(storyTitle).toBeInTheDocument();

    const storyWordcount = screen.getByText(/1978/);
    expect(storyWordcount).toBeInTheDocument();

    const link = screen.getByRole('link');
    expect(link).toBeInTheDocument();
  });
});
