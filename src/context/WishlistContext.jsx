import { createContext, useContext, useState, useEffect } from 'react'

const WishlistContext = createContext()

export function WishlistProvider({ children }) {
    const [wishlist, setWishlist] = useState(() => {
        try {
            const saved = localStorage.getItem('shopvibe-wishlist')
            return saved ? JSON.parse(saved) : []
        } catch {
            return []
        }
    })

    useEffect(() => {
        localStorage.setItem('shopvibe-wishlist', JSON.stringify(wishlist))
    }, [wishlist])

    const toggleWishlist = (product) => {
        setWishlist(prev => {
            const exists = prev.find(item => item.id === product.id)
            if (exists) return prev.filter(item => item.id !== product.id)
            return [...prev, product]
        })
    }

    const removeFromWishlist = (id) => {
        setWishlist(prev => prev.filter(item => item.id !== id))
    }

    const isInWishlist = (id) => wishlist.some(item => item.id === id)

    return (
        <WishlistContext.Provider value={{ wishlist, toggleWishlist, removeFromWishlist, isInWishlist }}>
            {children}
        </WishlistContext.Provider>
    )
}

export function useWishlist() {
    const context = useContext(WishlistContext)
    if (!context) throw new Error('useWishlist must be used within WishlistProvider')
    return context
}
