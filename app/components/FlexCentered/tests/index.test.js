import React from 'react';
import { shallow } from 'enzyme';

import FlexContainer from '../index';

describe('<FlexContianer />', () => {
  it('should render a div', () => {
    const renderedComponent = shallow(<FlexContainer />);
    expect(renderedComponent.find('div')).toHaveLength(1);
  });
});
