document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');
    const cartItemsList = document.getElementById('cart-items');
    const checkoutButton = document.getElementById('checkout-button');
    const sections = document.querySelectorAll('.content-section');
    
    let cartItems = [];

    // Toggle menu hamburger
    menuToggle.addEventListener('click', () => {
        menu.classList.toggle('visible');
    });

    
    // Menu navigasi dengan efek animasi
    const menuLinks = document.querySelectorAll('nav ul li a');
    menuLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetSection = event.target.getAttribute('href').substring(1);

            // Sembunyikan semua section dan hapus animasi sebelumnya
            sections.forEach(section => {
                section.classList.remove('visible');
                section.classList.add('hidden');
            });

            // Tampilkan section yang dipilih dengan animasi
            const activeSection = document.getElementById(targetSection);
            activeSection.classList.remove('hidden');
            activeSection.classList.add('visible');

            // Tutup menu setelah klik
            menu.classList.remove('visible');
        });
    });

    // Fungsi untuk menambahkan item ke keranjang
    window.addToCart = function(item) {
        cartItems.push(item);
        updateCart();
    };

    // Fungsi untuk memperbarui keranjang
    function updateCart() {
        cartItemsList.innerHTML = ''; // Kosongkan daftar sebelumnya
        cartItems.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            cartItemsList.appendChild(li);
        });
    }

    // Fungsi checkout
    checkoutButton.addEventListener('click', () => {
        if (cartItems.length === 0) {
            alert('Keranjang Anda kosong.'); } else {
            alert('Checkout berhasil! Anda telah membeli: ' + cartItems.join(', '));
            cartItems = []; // Kosongkan keranjang setelah checkout
            updateCart();
        }
    });
    
});

// script.js
const toggleButton = document.getElementById('toggle-dark-mode');

// Cek preferensi mode gelap dari localStorage
if (localStorage.getItem('dark-mode') === 'enabled') {
    document.body.classList.add('dark-mode');
}

toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    // Simpan preferensi pengguna ke localStorage
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('dark-mode', 'enabled');
    } else {
        localStorage.setItem('dark-mode', 'disabled');
    }
});

function openFixedPage() {
    document.getElementById('fixedPage').style.display = 'block';
}

function closeFixedPage() {
    document.getElementById('fixedPage').style.display = 'none';
}

function removeItem(button) {
    // Menghapus item dari keranjang
    const cartItem = button.parentElement;
    cartItem.parentElement.removeChild(cartItem);
}

function checkout() {
    alert('Proceeding to checkout!');
}

