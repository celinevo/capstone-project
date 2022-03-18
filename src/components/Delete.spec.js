import { userEvent } from '@storybook/testing-library';
import { render, screen } from '@testing-library/react';
import Delete from './Delete';

describe('Delete', () => {
  it('renders a Message with a delete and cancel button', () => {
    render(<Delete />);

    const message = screen.getByText(
      'Are you sure you want to delete your creepypasta?'
    );
    const cancelButton = screen.getByRole('button', { name: /No/i });
    const deleteButton = screen.getByRole('button', { name: /Yes/i });

    expect(message).toBeInTheDocument();
    expect(cancelButton).toBeInTheDocument();
    expect(deleteButton).toBeInTheDocument();
  });

  it('clicking delete button calls the function to delete', () => {
    const onConfirmDelete = jest.fn();
    render(<Delete onConfirmDelete={onConfirmDelete} />);

    const deleteButton = screen.getByRole('button', { name: /Yes/i });

    userEvent.click(deleteButton);
    expect(onConfirmDelete).toHaveBeenCalled();
  });

  it('clicking cancel button calls the function to close the message', () => {
    const onCancelDelete = jest.fn();
    render(<Delete onCancelDelete={onCancelDelete} />);

    const cancelButton = screen.getByRole('button', { name: /No/i });

    userEvent.click(cancelButton);
    expect(onCancelDelete).toHaveBeenCalled();
  });
});
