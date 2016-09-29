import React from 'react';


export default class Cart extends React.Component{
    constructor(){
        super();
        this.state={
            total : "$0"
        }
    }

    // componentWillUpdate(){
    //     let len = this.props.cart.length;
    //     if(len > 0){
    //         let total = this.props.cart.reduce(function(prev, curt){
    //             console.log(prev.price);
    //             return parseInt(prev.price.slice(1), 10) + parseInt(curt.price.slice(1), 10);
    //         });
    //         this.setState({total: total});
    //     }else{
    //         var total = 0;
    //         this.setState({total: total});
    //     }
    // }

	render(){
        let len = this.props.cart.length;
        let sum = 0;
        for(var i = 0; i < len; i++){
             sum = sum + parseInt(this.props.cart[i].price.slice(1), 10);
        }
            
		return(
            <div class="row" id="cart" >
                <div class="col-md-6">
                    <img src="img/cart.png" class="img-responsive"/>
                </div>
                <div class="col-md-6" id="checkout">
                    <p>{this.props.cart.length} Item</p>
                    <p>${sum}</p>
                    <button class="btn btn-danger">Checkout</button>
                </div>

            </div>
	    )
	}
}