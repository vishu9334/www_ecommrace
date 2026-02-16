import { useState } from 'react'
import { useCart } from '../context/CartContext'
import { useWishlist } from '../context/WishlistContext'

export default function ProductCard({ product }) {
    const { addToCart } = useCart()
    const { toggleWishlist, isInWishlist } = useWishlist()
    const [addedAnim, setAddedAnim] = useState(false)

    const liked = isInWishlist(product.id)

    const handleAddToCart = () => {
        addToCart(product)
        setAddedAnim(true)
        setTimeout(() => setAddedAnim(false), 600)
    }

    return (
        <div className="product-card">
            <div className="product-image-wrapper">
                <img src={product.image} alt={product.name} className="product-image" loading="lazy" />
                <span className="discount-badge">-{product.discount}%</span>
                <button
                    className={`wishlist-btn ${liked ? 'liked' : ''}`}
                    onClick={() => toggleWishlist(product)}
                    aria-label={liked ? 'Remove from wishlist' : 'Add to wishlist'}
                >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill={liked ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2">
                        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                    </svg>
                </button>
            </div>

            <div className="product-info">
                <span className="product-category">{product.category}</span>
                <h3 className="product-name">{product.name}</h3>
                <div className="product-pricing">
                    <span className="original-price">${product.price.toFixed(2)}</span>
                    <span className="discounted-price">${product.discountedPrice.toFixed(2)}</span>
                </div>
                <button
                    className={`add-to-cart-btn ${addedAnim ? 'added' : ''}`}
                    onClick={handleAddToCart}
                >
                    {addedAnim ? '✓ Added!' : 'Add to Cart'}
                </button>
            </div>
        </div>
    )
}
