import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Form from './Form';

describe('Form', () => {
  it('renders a form with two inputs, a textarea and a button to submit the form', () => {
    render(
      <MemoryRouter>
        <Form />
      </MemoryRouter>
    );

    const titleInput = screen.getByLabelText(/title/i);
    const imageInput = screen.getByLabelText(/image/i);
    const textTextarea = screen.getByLabelText(/text/i);
    const saveButton = screen.getByRole('button');

    expect(titleInput).toBeInTheDocument();
    expect(imageInput).toBeInTheDocument();
    expect(textTextarea).toBeInTheDocument();
    expect(saveButton).toBeInTheDocument();
  });
});
