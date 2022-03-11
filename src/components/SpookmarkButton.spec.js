import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SpookmarkButton from './SpookmarkButton.js';

describe('SpookmarkButton', () => {
  it('renders a button and a image', () => {
    render(<SpookmarkButton />);

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();

    const image = screen.getByRole('img');
    expect(image).toBeInTheDocument();
  });

  it('by clicking the button the bookmark status toggles', () => {
    const toggle = jest.fn();

    render(<SpookmarkButton onSpookmarkClick={toggle} />);

    const button = screen.getByRole('button');
    userEvent.click(button);

    expect(toggle).toHaveBeenCalled();
  });
});
