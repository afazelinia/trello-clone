import { render } from '@testing-library/react';
import user from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import Button from '../Button';

describe('Button', () => {
  test('renders button with correct text', () => {
    const { getByText } = render(
      <Button onClick={() => {}} type='save'>
        Save
      </Button>,
    );
    const buttonElement = getByText('Save');
    expect(buttonElement).toBeInTheDocument();
  });

  test('calls onClick when button is clicked', () => {
    const onClickMock = jest.fn();
    const { getByText } = render(
      <Button onClick={onClickMock} type='delete'>
        Delete
      </Button>,
    );
    const buttonElement = getByText('Delete');
    act(() => {
      user.click(buttonElement);
    });
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});
