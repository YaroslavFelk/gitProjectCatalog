import React from 'react';
import { shallow } from 'enzyme';
import MainAttributeVariations from './MainAttributeVariations';

describe('<MainAttributeVariations />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<MainAttributeVariations />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
