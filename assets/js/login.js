const loginUser = localStorage.getItem('users');
if (loginUser) {
    window.location.href = 'profil.html';
}

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    
    form.addEventListener('submit', async (event) => {
        event.preventDefault(); 

        // Ambil nilai dari form
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const fileInput = document.getElementById('file');
        const file = fileInput.files.length > 0 ? fileInput.files[0] : null;

        let fileData = null;

        if (file) {
            // Gunakan FileReader untuk membaca file sebagai base64
            try {
                fileData = await new Promise((resolve, reject) => {
                    const reader = new FileReader();
                    reader.onload = () => resolve(reader.result);
                    reader.onerror = () => reject(reader.error);
                    reader.readAsDataURL(file); // Membaca file sebagai base64
                });
            } catch (error) {
                console.error('Error reading file:', error);
            }
        }

        // Struktur data untuk disimpan
        const user = {
            username,
            password,
            file: fileData,
        };

        // Ambil data user dari localStorage jika sudah ada
        const existingUsers = JSON.parse(localStorage.getItem('users')) || [];

        // Tambahkan data user baru ke array
        existingUsers.push(user);

        // Simpan kembali ke localStorage
        localStorage.setItem('users', JSON.stringify(existingUsers));

        // Redirect ke profil.html
        window.location.href = 'profil.html';
    });
});
