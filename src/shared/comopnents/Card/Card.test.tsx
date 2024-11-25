import React from 'react';
import {render} from '@testing-library/react-native';
import {Card} from './Card';
import {Text} from 'react-native-paper';

describe('Card component', () => {
  it('should generate snapshot', () => {
    const {toJSON} = render(
      <Card>
        <Text>Test texts</Text>
      </Card>,
    );
    expect(toJSON()).toMatchSnapshot();
  });
});
