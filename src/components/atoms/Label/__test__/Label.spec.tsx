import { render } from '@testing-library/react';
import Label from '../Label';

describe('Label', () => {
  test('renders the label with correct children', () => {
    const { getByText } = render(<Label>Label Content</Label>);
    const labelElement = getByText('Label Content');
    expect(labelElement).toBeInTheDocument();
  });
});
