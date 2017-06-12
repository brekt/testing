import { renderComponent, expect } from '../test_helper';
import App from '../../src/components/app';

// Use describe to group together similar tests.
  // Use 'it' to test a single atribute of a target
      // Use 'expect' to make an assertion about a target
describe('App', () => {
	let component;
	beforeEach(() => {
		component = renderComponent(App);
	});
  it ('shows a comment box', () => {
		expect(component.find('.comment-box')).to.exist;
  });
	it('shows a comment list', () => {
		expect(component.find('.comment-list')).to.exist;
	});
});
