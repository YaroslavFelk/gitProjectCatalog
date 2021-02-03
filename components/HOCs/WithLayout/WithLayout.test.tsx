import React from 'react';
import { shallow } from 'enzyme';
import WithLayout from './WithLayout';

describe('<WithLayout />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<WithLayout />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
