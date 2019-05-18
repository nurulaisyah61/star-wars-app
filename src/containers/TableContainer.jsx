import React from 'react';

export class TableContainer extends React.Component {

	render() {
		return (
			<div>
				<h2>{this.props.title}</h2>
				<br/>
				<table className="display" width="100%" >
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