import React from 'react';
import ReactDOM from 'react-dom';


const HellowWorld = () => {
	return (
		<div 
			style={{ 
	  		display: 'flex',
	  		flexDirection: 'column',
  			alignItems: 'center'
			}}
	  >
			<h4>React App Project with the basic configuration</h4>
			<p>without (create-react-app) tool</p>
			<a href="https://seven-bi.github.io/MyPage/">Author</a>
		</div>
	);
};

ReactDOM.render(<HellowWorld />, document.getElementById("root"));
