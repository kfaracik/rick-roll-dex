import React from 'react';
import {render} from '@testing-library/react-native';
import {Button} from './Button';

describe('Button component', () => {
  it('should generate snapshot', () => {
    const {toJSON} = render(
      <Button title={'TEST BUTTON'} onPress={jest.fn} mode={'primary'} />,
    );
    expect(toJSON()).toMatchSnapshot();
  });
});
