import { Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import { CartProvider } from './context/CartContext'
import { WishlistProvider } from './context/WishlistContext'
import Navbar from './components/Navbar'
import ProductListing from './pages/ProductListing'
import Cart from './pages/Cart'
import Wishlist from './pages/Wishlist'

export default function App() {
    return (
        <ThemeProvider>
            <CartProvider>
                <WishlistProvider>
                    <div className="app">
                        <Navbar />
                        <main className="main-content">
                            <Routes>
                                <Route path="/" element={<ProductListing />} />
                                <Route path="/cart" element={<Cart />} />
                                <Route path="/wishlist" element={<Wishlist />} />
                            </Routes>
                        </main>
                    </div>
                </WishlistProvider>
            </CartProvider>
        </ThemeProvider>
    )
}
