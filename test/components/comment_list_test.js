import { renderComponent, expect } from '../test_helper';
import CommentList from '../../src/components/comment_list';

describe('CommentList', () => {
	const testComments = ['First Comment', 'Second Comment', 'Third Comment'];
	let component;
	beforeEach(() => {
		component = renderComponent(CommentList, null, {comments: testComments});
	});
	it('shows an li for each comment', () => {
		expect(component.find('li').length).to.equal(testComments.length);
	});
	it('shows each comment that is provided', () => {
		expect(component).to.contain(testComments[0]);
		expect(component).to.contain(testComments[1]);
		expect(component).to.contain(testComments[2]);
	});
});
