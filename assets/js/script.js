// script.js

// Fungsi untuk menangani pengiriman form
document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    
    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Mencegah pengiriman form secara default

        // Mengambil nilai dari input
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        // Menampilkan pesan konfirmasi
        alert(`Terima kasih, ${name}! Pesan Anda telah dikirim.\n\nDetail:\nEmail: ${email}\nPesan: ${message}`);

        // Mengosongkan form setelah pengiriman
        form.reset();
    });
});
document.getElementById("myButton").addEventListener("click", function() {
    alert("Tombol telah diklik!");
});