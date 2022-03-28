import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Profile from './Profile.js';

describe('Profile', () => {
  it('renders two images, two textboxes and a link', () => {
    render(
      <MemoryRouter>
        <Profile />
      </MemoryRouter>
    );

    const image = screen.getAllByRole('img');
    const textbox = screen.getAllByRole('textbox');
    const link = screen.getByRole('link');

    expect(image).toHaveLength(4);
    expect(textbox).toHaveLength(2);
    expect(link).toBeInTheDocument();
  });
});
