import React from 'react';
import {render} from '@testing-library/react-native';
import {CategoryValueText} from './CategoryValueText';

describe('CategoryValueText component', () => {
  it('should generate snapshot', () => {
    const {toJSON} = render(
      <CategoryValueText category={'Category'} value={'some calue 1234'} />,
    );
    expect(toJSON()).toMatchSnapshot();
  });
});
