import { render } from '@testing-library/react';
import user from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import { Dashboard } from '../../components';

describe('Creating a new list', () => {
  test('renders the page, clicks on the "Add a list" button, adds a new list title and checks the list', async () => {
    const { getByText, getByPlaceholderText } = render(<Dashboard />);

    const title = getByText(/trello clone/i);
    expect(title).toBeInTheDocument();

    const addListButton = getByText(/.*add a list.*/i);
    act(() => {
      user.click(addListButton);
    });

    const listTitleInput = getByPlaceholderText(/list title/i);
    act(() => {
      user.type(listTitleInput, 'test agent list');
    });

    const saveListButton = getByText(/save/i);
    act(() => {
      user.click(saveListButton);
    });

    expect(getByText(/test agent list/i)).toBeInTheDocument();
  });
});
