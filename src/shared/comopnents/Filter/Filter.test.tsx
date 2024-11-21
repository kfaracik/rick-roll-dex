import React from 'react';
import {render} from '@testing-library/react-native';
import {Filter} from './Filter';

describe('Button component', () => {
  it('should generate snapshot', () => {
    const {toJSON} = render(<Filter onApplyFilters={jest.fn} />);
    expect(toJSON()).toMatchSnapshot();
  });
});
