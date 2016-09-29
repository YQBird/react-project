import React from 'react';

export default class ProductItem extends React.Component{
	 handleCartChange(e){
	 	let item = this.props.prod;
	 	let date = new Date();
	 	item.date = date;
	 	this.props.addToCart(item);
	 	console.log("triggered");
	 }
	 render(){
	 	return(
	 		<div class="col-md-4 items" >
	 		    <div class="row">
                    <img class="img-Thumbnail img-responsive" src={this.props.prod.url} />
	 		    </div>
	 		    <div class="row" >
                    <div class="col-sm-6">
                        <p> {this.props.prod.name} </p>
                    </div>
                    <div class="col-sm-6" class="info">
                        <p> {this.props.prod.price} </p>
                    </div>
	 		    </div>
	 		    <div class="row" class="cart-btn">
                    <button class="btn btn-warning" onClick={this.handleCartChange.bind(this)} type="button">Add to Cart</button>
	 		    </div>

	 		</div>
	 	);
	 }
}