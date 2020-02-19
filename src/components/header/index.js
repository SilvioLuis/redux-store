import React from 'react';
import { connect } from 'react-redux'

function Header({ cartSize }) {
    return (
        <div style={{
            background: "#2c3e50",
            height: 100,
            marginBottom: 30,
            justifyContent: 'center',
            alignContent: 'center'
        }} className="row">
            <h1 style={{ color: "#fff" }}>{cartSize} item no carrinho</h1>
        </div>
    );
}

export default connect((state) => ({
    cartSize: state.cart.length
}))(Header)