import React from 'react';
import { shallow } from 'enzyme';
import RepositoryList from '.';

describe('Link', () => {
  it('Renders link to Google', () => {
    const link = shallow(<RepositoryList href="http://google.com">Link to Google</RepositoryList>);
    expect(link).toMatchSnapshot();
  });

  it('Renders link to Google with classname', () => {
    const link = shallow(<RepositoryList href="http://google.com" className="my-link-class">Link to Google</RepositoryList>);
    expect(link).toMatchSnapshot();
  });
});
