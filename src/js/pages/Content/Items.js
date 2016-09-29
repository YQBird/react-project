import React from 'react';
import ProductItem from './ProductItem';

export default class Items extends React.Component{


	render(){
	    const products = this.props.products.map((prod, i) => <ProductItem key={i} prod={prod} addToCart={this.props.addToCart}/>);
	 	
	 	return(
	 		<div class="col-sm-8" id="itemContainer">
	 		    <div class="row">{products}</div>
	 		</div>
	 	)
	}
}