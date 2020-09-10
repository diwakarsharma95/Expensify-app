//Higher order Components

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
	<div>
		<h1>Info</h1>
		<p>The info is: {props.info}</p>
	</div>
);

const withAdminWarning = (WrappedComponent) => {
	return (props) => (
		<div>
			{props.isAdmin && <p>This is private info. Please don't share!</p>}
			<WrappedComponent {...props}></WrappedComponent>
		</div>
	);
};

const requireAuthentication = (WrappedComponent) => {
	return (props) => (
		<div>
			{props.isAuthentcated ? (
				<WrappedComponent {...props}></WrappedComponent>
			) : (
				<p>Please Login To see Message</p>
			)}
		</div>
	);
};

// const AdminInfo=withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo info='Diwakar' isAdmin={true}></AdminInfo>,document.getElementById('app'));
ReactDOM.render(<AuthInfo info='Diwakar' isAuthentcated={false}></AuthInfo>, document.getElementById('app'));
