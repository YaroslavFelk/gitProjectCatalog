import React from 'react';
import { shallow } from 'enzyme';
import InputRange from './InputRange';

describe('<InputRange />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<InputRange />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
