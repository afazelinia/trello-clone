import React from 'react';
import { render } from '@testing-library/react';
import user from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import EditButtons from '../EditButtons';

describe('EditButtons', () => {
  test('calls the onSave function when save button is clicked', () => {
    const onSaveMock = jest.fn();
    const onDeleteMock = jest.fn();
    const onCancelMock = jest.fn();
    const { getByText } = render(<EditButtons onSave={onSaveMock} onDelete={onDeleteMock} onCancel={onCancelMock} />);
    const saveButton = getByText(/save/i);
    act(() => {
      user.click(saveButton);
    });
    expect(onSaveMock).toHaveBeenCalledTimes(1);
  });

  test('calls the onDelete function when delete button is clicked', () => {
    const onSaveMock = jest.fn();
    const onDeleteMock = jest.fn();
    const onCancelMock = jest.fn();
    const { getByText } = render(<EditButtons onSave={onSaveMock} onDelete={onDeleteMock} onCancel={onCancelMock} />);
    const deleteButton = getByText(/delete/i);
    act(() => {
      user.click(deleteButton);
    });
    expect(onDeleteMock).toHaveBeenCalledTimes(1);
  });

  test('calls the onCancel function when cancel button is clicked', () => {
    const onSaveMock = jest.fn();
    const onDeleteMock = jest.fn();
    const onCancelMock = jest.fn();
    const { getByText } = render(<EditButtons onSave={onSaveMock} onDelete={onDeleteMock} onCancel={onCancelMock} />);
    const cancelButton = getByText(/cancel/i);
    act(() => {
      user.click(cancelButton);
    });
    expect(onCancelMock).toHaveBeenCalledTimes(1);
  });
});
