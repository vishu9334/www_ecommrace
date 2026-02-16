import { useWishlist } from '../context/WishlistContext'
import { useCart } from '../context/CartContext'

export default function WishlistItem({ item }) {
    const { removeFromWishlist } = useWishlist()
    const { addToCart } = useCart()

    const handleMoveToCart = () => {
        addToCart(item)
        removeFromWishlist(item.id)
    }

    return (
        <div className="wishlist-item">
            <img src={item.image} alt={item.name} className="wishlist-item-image" />
            <div className="wishlist-item-details">
                <h4 className="wishlist-item-name">{item.name}</h4>
                <div className="wishlist-item-prices">
                    <span className="wishlist-original">${item.price.toFixed(2)}</span>
                    <span className="wishlist-discounted">${item.discountedPrice.toFixed(2)}</span>
                    <span className="wishlist-discount-tag">-{item.discount}%</span>
                </div>
                <div className="wishlist-item-actions">
                    <button className="move-to-cart-btn" onClick={handleMoveToCart}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" /><path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6" /></svg>
                        Move to Cart
                    </button>
                    <button className="wishlist-remove-btn" onClick={() => removeFromWishlist(item.id)}>
                        Remove
                    </button>
                </div>
            </div>
        </div>
    )
}
