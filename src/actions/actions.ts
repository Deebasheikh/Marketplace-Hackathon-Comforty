
import { Products } from "@/types/products"

export const addToCart = (product : Products) => {
    const cart : Products[] = JSON.parse(localStorage.getItem('cart')  || '[]')

    const existingProductIndex = cart.findIndex(item => item._id ===product._id)

    if(existingProductIndex > -1) {
        cart[existingProductIndex].inventory += 1 
    }
    else {
        cart.push({
            ...product, inventory: 1
        })
    }
    localStorage.setItem('cart',JSON.stringify(cart))
}

export const removeFromCart = (id: string) => {
    let cartItems = getCartItems().filter((item) => item._id !== id);
    localStorage.setItem("cart", JSON.stringify(cartItems));
    window.dispatchEvent(new Event("cartUpdated")); // Notify header
};

export const updateCartQuantity = (id: string, quantity: number) => {
    let cartItems = getCartItems().map((item) =>
        item._id === id ? { ...item, inventory: quantity } : item
    );
    localStorage.setItem("cart", JSON.stringify(cartItems));
    window.dispatchEvent(new Event("cartUpdated")); // Notify header
};


export const getCartItems = () : Products[] => {
    return JSON.parse(localStorage.getItem('cart') || '[]')
}

export async function createCheckoutSession(cartItems: any) {
    try {
        const response = await fetch("/api/checkout", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ items: cartItems }),
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.log("Stripe API Error Response:", errorText); // Log error response
            throw new Error(`Failed to create checkout session: ${errorText}`);
        }

        const session = await response.json();
        console.log("Stripe API Success Response:", session); // Log successful response
        window.location.href = session.url; // Redirect to Stripe Checkout
    } catch (error) {
        console.log("Checkout Error:", error); // Log error instead of console.error
    }
}
