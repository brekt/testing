import React, { Component } from 'react';
import { connect } from 'react-redux';

class CommentList extends Component {
	constructor(props) {
		super(props);
		this.list = props.comments.map(comment => <li key={comment}>{comment}</li>);
	}
	render() {
		return (
			<ul className="comment-list">
				{this.list}
			</ul>
		);
	}
}

// const CommentList = (props) => {
// 	const list = props.comments.map(comment => <li key={comment}>{comment}</li>);
// 	return (
// 		<ul className="comment-list">
// 			{list}
// 		</ul>
// 	);
// }

function mapStateToProps(state) {
	return { comments: state.comments };
}

export default connect(mapStateToProps)(CommentList);
