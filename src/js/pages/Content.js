import React from 'react';
import List from './Content/List';
import Items from './Content/Items';

export default class Content extends React.Component {
    constructor(){
    	super();
    	this.state = {
    		category : "Apple",
    		products: [],
    		cart: [],
    		price: 0
    	};

    }

    changeCategory(category){
    	this.setState({category});   	
    	this.setState({products: this.props.products[category]});

    }

	componentWillMount(){
		let cat = this.state.category;
		this.setState({products: this.props.products[cat]});
	}

	addToCart(product){
		console.log(product)
		let cart = this.state.cart;
		cart.push(product);
		this.setState({cart: cart});

	}

	componentWillUpdate(){
		console.log(this.state.cart);
	}
	
	render(){

		return(
			<div class="container-fluid">
			    <div class="row">
			        <List titles={this.props.titles} changeCategory={this.changeCategory.bind(this)} cart={this.state.cart} />
			        <Items products={this.state.products} category={this.state.category} addToCart={this.addToCart.bind(this)} />
			    </div>
			</div>
		)
	}
}