import ProductCard from '../components/ProductCard'
import products from '../data/products'

export default function ProductListing() {
    return (
        <div className="page product-listing-page">
            <div className="page-header">
                <h1>Trending Products</h1>
                <p className="page-subtitle">Discover our latest collection with exclusive discounts</p>
            </div>
            <div className="product-grid">
                {products.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    )
}
