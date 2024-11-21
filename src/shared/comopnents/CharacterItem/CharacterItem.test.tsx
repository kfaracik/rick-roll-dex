import React from 'react';
import {render} from '@testing-library/react-native';
import {CharacterItem} from './CharacterItem';

describe('CharacterItem component', () => {
  it('should generate snapshot', () => {
    const {toJSON} = render(
      <CharacterItem
        image={'1234'}
        status={'Alive'}
        id={123}
        name={'naem'}
        species={'species'}
        onPress={jest.fn}
      />,
    );
    expect(toJSON()).toMatchSnapshot();
  });
});
