import React from 'react';

export default class ListComponent extends React.Component{
	 handleChange(e){
	 	let category = e.target.innerText;
	 	this.props.changeCategory(category);
	 }
	 render(){
	 	return(
	 		<li class="list-group-item">
	 		    <a onClick={this.handleChange.bind(this)}>
	 		        {this.props.title}	 		        
	 		    </a>
	 		    <span class="badge">{this.props.num}</span>
	 		</li>
	 	)
	 }
}