import React, { Component } from 'react';

import Header from '../../components/header'
import Product from '../../components/product'

import api from '../../services/api'

export default class Home extends Component {

	state = {
		products: []
	}

	componentDidMount () {
		this._getProducs()
	}

	_getProducs = async () => {
		try {
			const response = await api.get('/products');
			this.setState({ products: response.data })
		} catch (err) {
			alert(err.message);
		}
 	}

	render () {
		return (
			<div className="container-fluid">

			<Header />
			
			<div className="container" style={{
				display: 'grid',
				gridTemplateColumns: 'repeat(3, 1fr)',
				gridGap: 20
			}}>
				{this.state.products.map(p => <Product item={p} />)}
			</div>
		</div>
		)
	}
}
