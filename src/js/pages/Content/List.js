import React from 'react';
import ListComponent from './ListComponent';
import Cart from './Cart';

export default class List extends React.Component{
	render(){
		const listTitie=this.props.titles.map((title, i) => <ListComponent key={i} title={title.name} num={title.number} changeCategory={this.props.changeCategory}/>);
		return(
			<div class="col-sm-4">
				<ul class="list-group">
				    {listTitie}
				</ul>
				<Cart cart={this.props.cart} />
			</div>
	    )
	}
}