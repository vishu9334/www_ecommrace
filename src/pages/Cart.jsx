import { Link } from 'react-router-dom'
import CartItem from '../components/CartItem'
import { useCart } from '../context/CartContext'

export default function Cart() {
    const { cart, cartTotal, cartSubtotal } = useCart()
    const savings = cartSubtotal - cartTotal

    if (cart.length === 0) {
        return (
            <div className="page empty-page">
                <div className="empty-state">
                    <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.4"><circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" /><path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6" /></svg>
                    <h2>Your cart is empty</h2>
                    <p>Looks like you haven't added anything yet.</p>
                    <Link to="/" className="continue-shopping-btn">Continue Shopping</Link>
                </div>
            </div>
        )
    }

    return (
        <div className="page cart-page">
            <div className="page-header">
                <h1>Shopping Cart</h1>
                <p className="page-subtitle">{cart.length} item{cart.length !== 1 ? 's' : ''} in your cart</p>
            </div>

            <div className="cart-layout">
                <div className="cart-items">
                    {cart.map(item => (
                        <CartItem key={item.id} item={item} />
                    ))}
                </div>

                <div className="cart-summary">
                    <h3>Order Summary</h3>
                    <div className="summary-row">
                        <span>Subtotal</span>
                        <span className="summary-original">${cartSubtotal.toFixed(2)}</span>
                    </div>
                    <div className="summary-row savings">
                        <span>Savings</span>
                        <span>-${savings.toFixed(2)}</span>
                    </div>
                    <div className="summary-row shipping">
                        <span>Shipping</span>
                        <span className="free-shipping">FREE</span>
                    </div>
                    <div className="summary-divider"></div>
                    <div className="summary-row total">
                        <span>Total</span>
                        <span>${cartTotal.toFixed(2)}</span>
                    </div>
                    <button className="checkout-btn">Proceed to Checkout</button>
                </div>
            </div>
        </div>
    )
}
