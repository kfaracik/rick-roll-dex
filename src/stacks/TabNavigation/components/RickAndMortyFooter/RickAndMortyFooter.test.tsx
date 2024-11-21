import React from 'react';
import {render} from '@testing-library/react-native';
import {RickAndMortyFooter} from './RickAndMortyFooter';

describe('RickAndMortyFooter component', () => {
  it('should generate snapshot', () => {
    const {toJSON} = render(<RickAndMortyFooter />);
    expect(toJSON()).toMatchSnapshot();
  });
});
