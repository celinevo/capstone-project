import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { userEvent } from '@storybook/testing-library';
import CustomCard from './CustomCard.js';

const title = 'Slenderman';

const wordcount = '1978';

describe('CustomCard', () => {
  it('renders a title and wordcount and three  buttons', () => {
    render(
      <MemoryRouter>
        <CustomCard title={title} wordcount={wordcount} />
      </MemoryRouter>
    );

    const storyTitle = screen.getByText('Slenderman');
    expect(storyTitle).toBeInTheDocument();

    const storyWordcount = screen.getByText(/1978/);
    expect(storyWordcount).toBeInTheDocument();

    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(2);
  });

  it('calls function to show the delete message when the delete icon is clicked', () => {
    render(
      <MemoryRouter>
        <CustomCard />
      </MemoryRouter>
    );

    const deleteButton = screen.getByRole('button', { name: /delete/i });
    userEvent.click(deleteButton);

    const confirmDeleteButton = screen.getByRole('button', {
      name: 'Yes',
    });
    expect(confirmDeleteButton).toBeInTheDocument();
  });

  it('calls function to delete the story when yes in delete message is clicked', () => {
    const deleteCreepypasta = jest.fn();
    render(
      <MemoryRouter>
        <CustomCard handleDeleteCreepypasta={deleteCreepypasta} />
      </MemoryRouter>
    );

    const deleteButton = screen.getByRole('button', { name: /delete/i });
    userEvent.click(deleteButton);

    const confirmDeleteButton = screen.getByRole('button', {
      name: 'Yes',
    });
    userEvent.click(confirmDeleteButton);
    expect(deleteCreepypasta).toBeCalled();
  });

  it('leaves message when no is clicked in delete message', () => {
    render(
      <MemoryRouter>
        <CustomCard />
      </MemoryRouter>
    );

    const deleteButton = screen.getByRole('button', { name: /delete/i });
    userEvent.click(deleteButton);

    const cancelDeleteButton = screen.getByRole('button', {
      name: 'No',
    });
    userEvent.click(cancelDeleteButton);

    expect(cancelDeleteButton).not.toBeInTheDocument();
  });
});
