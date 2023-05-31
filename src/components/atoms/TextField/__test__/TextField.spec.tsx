import { render } from '@testing-library/react';
import TextField from '../TextField';

describe('TextField', () => {
  test('renders the text field with the provided value and placeholder', () => {
    const { getByPlaceholderText } = render(
      <TextField value='initial value' placeholder='enter text' onChange={() => {}} />,
    );
    const textFieldElement = getByPlaceholderText('enter text');
    expect(textFieldElement).toBeInTheDocument();
    expect(textFieldElement).toHaveValue('initial value');
  });
});
