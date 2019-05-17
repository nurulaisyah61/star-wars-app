import React from 'react';

const $ = require('jquery')

export class TableContainer extends React.Component {

	render() {
		return (
			<div>
				<h2>{this.props.title}</h2>
				<div className="pagination">
					
				</div>
				<table className="display" width="90%" >
					<thead>
						<tr>
							{this.props.header.map((head, idx) => {
								return (
									<th key={idx}>{head}</th>
								)
							})}
						</tr>
					</thead>
					{this.props.children}
				</table>
			</div>
		)
	}
}