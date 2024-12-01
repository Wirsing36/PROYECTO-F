// Array de servicios
const services = [
    { id: 1, name: 'Reparación de Computadoras', description: 'Se reparan computadoras, impresoras y celulares', price: 175, image: 'images/reparacion-computadoras.jpg' },
    { id: 2, name: 'Mantenimiento', description: 'Se realizan mantenimientos preventivos y correctivos', price: 150, image: 'images/mantenimiento.jpg' },
    { id: 3, name: 'Trámites y Tutorías', description: 'Se realizan trámites ante la SAT, Contraloría General de Cuentas, MINEDUC', price: 100, image: 'images/tramites-tutorias.jpg' }
];

document.addEventListener('DOMContentLoaded', () => {
    const servicesSlider = document.getElementById('services-slider');
    services.forEach(service => {
        const serviceDiv = document.createElement('div');
        serviceDiv.classList.add('service');
        serviceDiv.innerHTML = `
            <img src="${service.image}" alt="${service.name}">
            <h2>${service.name}</h2>
            <p>${service.description}</p>
            <p>Precio: Q${service.price}</p>
            <button onclick="addToCart(${service.id})">Añadir al carrito</button>
        `;
        servicesSlider.appendChild(serviceDiv);
    });
});

// Función para añadir servicios al carrito
function addToCart(serviceId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const service = services.find(item => item.id === serviceId);
    if (service) {
        const cartItem = cart.find(item => item.id === serviceId);
        if (cartItem) {
            cartItem.quantity += 1;
        } else {
            cart.push({ id: serviceId, name: service.name, price: service.price, quantity: 1 });
        }
        localStorage.setItem('cart', JSON.stringify(cart));
        alert('Servicio añadido al carrito');
        displayCart(); // Actualizar el carrito después de añadir un servicio
    } else {
        alert('No se encontró el servicio');
    }
}

// Función para mostrar y actualizar el carrito
function displayCart() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartElement = document.getElementById('cart');
    cartElement.innerHTML = '';

    if (cart.length > 0) {
        cart.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');
            cartItem.innerHTML = `
                <h3>${item.name}</h3>
                <p>Precio: Q${item.price}</p>
                <p>Cantidad: ${item.quantity}</p>
                <p>Total: Q${item.price * item.quantity}</p>
                <button onclick="removeFromCart(${item.id})">Eliminar</button>
            `;
            cartElement.appendChild(cartItem);
        });
    } else {
        cartElement.innerHTML = '<p>El carrito está vacío</p>';
    }
}

// Función para eliminar servicios del carrito
function removeFromCart(serviceId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const updatedCart = cart.filter(item => item.id !== serviceId);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    alert('Servicio eliminado del carrito');
    displayCart(); // Actualizar el carrito después de eliminar un servicio
}
