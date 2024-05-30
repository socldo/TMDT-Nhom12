import React from 'react';

const CartItem = ({ item, onRemove }) => {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0' }}>
            <span>{item.name}</span>
            <span>{item.price}</span>
            <button onClick={() => onRemove(item.id)}>Remove</button>
        </div>
    );
};

export default CartItem;