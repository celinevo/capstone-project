import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Searchbar from './Searchbar';

describe('Searchbar', () => {
  it('renders a label and an input', () => {
    render(<Searchbar />);

    const inputElement = screen.getByLabelText(/Search/i);

    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute('placeholder');
  });

  it('calls onChange function when change input value', () => {
    const changeValue = jest.fn();
    render(<Searchbar handleChange={changeValue} />);

    const inputElement = screen.getByLabelText(/Search/i);

    userEvent.type(inputElement, 'Story Name');

    expect(changeValue).toHaveBeenCalled();
  });
});
