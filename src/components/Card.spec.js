import { render, screen } from '@testing-library/react';
import Card from './Card.js';

const title = 'Slenderman';
const image =
  'https://www.creepypasta.com/wp-content/uploads/2010/01/slenderman-1.jpg.webp';
const wordcount = '1978';

describe('Card', () => {
  it('renders a title, image and wordcount', () => {
    render(<Card title={title} image={image} wordcount={wordcount} />);

    const storyTitle = screen.getByText('Slenderman');
    expect(storyTitle).toBeInTheDocument();

    const storyImage = screen.getByRole('img');
    expect(storyImage).toBeInTheDocument();

    const storyWordcount = screen.getByText(/1978/);
    expect(storyWordcount).toBeInTheDocument();
  });
});
