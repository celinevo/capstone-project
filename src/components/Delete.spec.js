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
});
