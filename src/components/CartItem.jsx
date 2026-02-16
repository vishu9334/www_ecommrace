import { useCart } from '../context/CartContext'

export default function CartItem({ item }) {
    const { increase, decrease, removeFromCart } = useCart()

    return (
        <div className="cart-item">
            <img src={item.image} alt={item.name} className="cart-item-image" />
            <div className="cart-item-details">
                <h4 className="cart-item-name">{item.name}</h4>
                <div className="cart-item-prices">
                    <span className="cart-item-original">${item.price.toFixed(2)}</span>
                    <span className="cart-item-discounted">${item.discountedPrice.toFixed(2)}</span>
                </div>
                <div className="cart-item-controls">
                    <div className="quantity-controls">
                        <button className="qty-btn" onClick={() => decrease(item.id)} aria-label="Decrease quantity">−</button>
                        <span className="qty-value">{item.quantity}</span>
                        <button className="qty-btn" onClick={() => increase(item.id)} aria-label="Increase quantity">+</button>
                    </div>
                    <span className="cart-item-total">${(item.discountedPrice * item.quantity).toFixed(2)}</span>
                    <button className="remove-btn" onClick={() => removeFromCart(item.id)} aria-label="Remove item">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="3 6 5 6 21 6" /><path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2" /></svg>
                    </button>
                </div>
            </div>
        </div>
    )
}
