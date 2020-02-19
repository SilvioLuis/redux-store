import React, { Component } from 'react';
import { connect } from 'react-redux'

import {
    Button,
    Card
} from 'react-bootstrap';

class Product extends Component {

	_handleProduct = () => {
		const { dispatch, item } = this.props;
		dispatch({
			type: '@cart/ADD',
			product: item
		})
	}

	render () {
		return (
			<Card style={{ width: '18rem' }}>
				<Card.Img variant="top" src={this.props.item.image} />
				<Card.Body>
					<Card.Title>{this.props.item.title}</Card.Title>
					<Button 
						className="btn-block" 
						variant="primary"
						onClick={() => this._handleProduct()}
					>Adicionar R$ {this.props.item.price}</Button>
				</Card.Body>
			</Card>
		  );
	}
}

export default connect()(Product);
