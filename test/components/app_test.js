import { renderComponent, expect } from '../test_helper';
import App from '../../src/components/app';

// Use describe to group together similar tests.
  // Use 'it' to test a single atribute of a target
      // Use 'expect' to make an assertion about a target
describe('App', () => {
  it ('shows the correct text', () => {
    // create an instance of App
    const component = renderComponent(App);
    expect(component).to.contain('React simple starter');
  });
});
