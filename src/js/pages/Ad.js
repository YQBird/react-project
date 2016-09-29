import React from 'react';

export default class Ad extends React.Component{
	render(){
		return(
			<div id="AdContainer" class="container-fluid">
			    <div class="row">
			        <img id="ad" class="col-xs-12 " src="/img/laptop.jpg" ></img>
			    </div>
			</div>
		)
	}
}