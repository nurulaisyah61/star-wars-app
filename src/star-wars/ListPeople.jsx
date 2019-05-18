import React from 'react';
import { ListPeopleRow } from '../components/ListPeopleRow';
import { Loading } from '../components/Loading';
import { TableContainer } from '../containers/TableContainer';
import { StarWars } from '../utils/StarWars';

export class ListPeople extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			loading: true,
			ListPeopleStarWars: [],
			count: 0,
			page: 1,
			items: []
		}
		StarWars.getAllPeople(1).then(response =>{
			this.setState({
				loading: false,
				ListPeopleStarWars: response.results,
				count: response.count,
			})
			let i = 0;
			let t = []
			let npages = this.state.count%10+1;
			while (i <= npages) {
				if (this.state.count >= 0 ){
					t.push(<button key={i+1} onClick={this.switchPage.bind(this, i+1)} className="btn btn-default">{ i+1 }</button>)
					this.setState((state) => {
						return {count: state.count - 10};
					});
				}
				i++;				
			}
			this.setState({
				items: t
			})
		});
		
		
		
	}
	
	
	switchPage(page){
		console.log(page);
		StarWars.getAllPeople(page).then(response =>{
			this.setState({
				loading: false,
				ListPeopleStarWars: response.results,
				page: page
			})
		})
	}
	  
  
	render() {
		
        if (this.state.loading) {
            return (
                <Loading msg="Fetching Data..."/>
            )
        } else {
            return (
							<div className="table">
								<TableContainer title="List People of Star-Wars" header={['People name', 'Gender', 'Action']}>
									<ListPeopleRow listPeople={this.state.ListPeopleStarWars}/>
								</TableContainer>	
								{this.state.items}
							</div>
            )
        }
	}
}