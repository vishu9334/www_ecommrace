import { Link } from 'react-router-dom'
import WishlistItem from '../components/WishlistItem'
import { useWishlist } from '../context/WishlistContext'

export default function Wishlist() {
    const { wishlist } = useWishlist()

    if (wishlist.length === 0) {
        return (
            <div className="page empty-page">
                <div className="empty-state">
                    <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.4"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" /></svg>
                    <h2>Your wishlist is empty</h2>
                    <p>Save your favorite items to buy them later.</p>
                    <Link to="/" className="continue-shopping-btn">Explore Products</Link>
                </div>
            </div>
        )
    }

    return (
        <div className="page wishlist-page">
            <div className="page-header">
                <h1>My Wishlist</h1>
                <p className="page-subtitle">{wishlist.length} item{wishlist.length !== 1 ? 's' : ''} saved</p>
            </div>
            <div className="wishlist-grid">
                {wishlist.map(item => (
                    <WishlistItem key={item.id} item={item} />
                ))}
            </div>
        </div>
    )
}
