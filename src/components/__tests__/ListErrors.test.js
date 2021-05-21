// Link.react.test.js
import React from 'react';
import renderer from 'react-test-renderer';
import ListErrors from '../ListErrors';

test('Link changes the class when hovered', () => {
  const component = renderer.create(
    <ListErrors errors={['errror']}/>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

});