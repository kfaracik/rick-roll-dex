import React from 'react';
import {render} from '@testing-library/react-native';
import {RickAndMortyHeader} from './RickAndMortyHeader';

describe('RickAndMortyHeader component', () => {
  it('should generate snapshot', () => {
    const {toJSON} = render(<RickAndMortyHeader />);
    expect(toJSON()).toMatchSnapshot();
  });
});
