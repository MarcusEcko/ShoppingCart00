import { Button, Container } from "react-bootstrap";
import { useCart } from "../Context/CartProvider"; 
import Table from "react-bootstrap/Table";
import  Header  from "../Components/Header"
import Footer from "../Components/Footer";

function Cart() {
    const { cart, removeFromCart, clearCart } = useCart();

    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                minHeight: "100vh", //toda la altura de la ventana
            }}
        >
            <Header />

            <main style={{ flex: 1 }}>
                <Container className="my-5 text-center">
                    <h2 className="mb-4">Shopping Cart</h2>

                    {cart.length === 0 ? (
                        <p className="text-muted">Your cart is empty</p>
                    ) : (
                        <>
                            <Table bordered hover responsive>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Quantity</th>
                                        <th>Price</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cart.map((item) => (
                                        <tr key={item.id}>
                                            <td>{item.id}</td>
                                            <td>{item.title}</td>
                                            <td>{item.quantity}</td>
                                            <td>${item.price}</td>
                                            <td>
                                                <Button
                                                    variant="danger"
                                                    onClick={() => removeFromCart(item.id)}
                                                >
                                                    Remove
                                                </Button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>

                            <p className="fw-bold mt-3">Total: ${total.toFixed(2)}</p>
                            <Button variant="primary" onClick={clearCart}>
                                Empty Cart
                            </Button>
                        </>
                    )}
                </Container>
            </main>

            <Footer />
        </div>
    )
}

export default Cart;