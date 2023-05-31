import { render } from '@testing-library/react';
import user from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import Icon from '../Icon';

describe('Icon', () => {
  test('renders the icon with correct children', () => {
    const { getByText } = render(
      <Icon onClick={() => {}}>
        <span>Icon Content</span>
      </Icon>,
    );

    const iconElement: HTMLElement = getByText('Icon Content');
    expect(iconElement).toBeInTheDocument();
  });

  test('calls onClick when the icon is clicked', () => {
    const onClickMock = jest.fn();
    const { container } = render(<Icon onClick={onClickMock}>Icon</Icon>);
    const iconElement: HTMLElement | null = container.firstChild as HTMLElement;
    act(() => {
      user.click(iconElement);
    });
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});
