import { createContext, useContext, useReducer, useEffect } from 'react'

const CartContext = createContext()

function cartReducer(state, action) {
    switch (action.type) {
        case 'ADD_TO_CART': {
            const existing = state.find(item => item.id === action.payload.id)
            if (existing) {
                return state.map(item =>
                    item.id === action.payload.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                )
            }
            return [...state, { ...action.payload, quantity: 1 }]
        }
        case 'INCREASE': {
            return state.map(item =>
                item.id === action.payload ? { ...item, quantity: item.quantity + 1 } : item
            )
        }
        case 'DECREASE': {
            return state
                .map(item =>
                    item.id === action.payload ? { ...item, quantity: item.quantity - 1 } : item
                )
                .filter(item => item.quantity > 0)
        }
        case 'REMOVE': {
            return state.filter(item => item.id !== action.payload)
        }
        default:
            return state
    }
}

function loadCart() {
    try {
        const saved = localStorage.getItem('shopvibe-cart')
        return saved ? JSON.parse(saved) : []
    } catch {
        return []
    }
}

export function CartProvider({ children }) {
    const [cart, dispatch] = useReducer(cartReducer, [], loadCart)

    useEffect(() => {
        localStorage.setItem('shopvibe-cart', JSON.stringify(cart))
    }, [cart])

    const addToCart = (product) => dispatch({ type: 'ADD_TO_CART', payload: product })
    const increase = (id) => dispatch({ type: 'INCREASE', payload: id })
    const decrease = (id) => dispatch({ type: 'DECREASE', payload: id })
    const removeFromCart = (id) => dispatch({ type: 'REMOVE', payload: id })

    const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0)
    const cartTotal = cart.reduce((sum, item) => sum + item.discountedPrice * item.quantity, 0)
    const cartSubtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

    return (
        <CartContext.Provider value={{
            cart, addToCart, increase, decrease, removeFromCart,
            cartCount, cartTotal, cartSubtotal
        }}>
            {children}
        </CartContext.Provider>
    )
}

export function useCart() {
    const context = useContext(CartContext)
    if (!context) throw new Error('useCart must be used within CartProvider')
    return context
}
