const loginUser = localStorage.getItem('users');
    document.addEventListener('DOMContentLoaded', () => {
        // Periksa apakah pengguna sudah login

        if (loginUser) {
            // Jika belum login, redirect ke halaman login
            const users = JSON.parse(loginUser);
            console.log(users);
            users.forEach(user => {
                renderProfile(user);
            });
            
        } else {
            window.location.href = 'login.html';
        }

    });

    function renderProfile(user) {
        const profileContainer = document.getElementById('profile-container');
        profileContainer.innerHTML = 
        `<div class="card-body">
            <img id="profile-picture" 
                 src="${user.file}" 
                 alt="Profile Picture" 
                 class="rounded-circle mb-3 img-thumbnail" 
                 style="width: 120px; height: 120px; object-fit: cover;">
            <h3 id="username" class="card-title">${user.username}</h3>
        </div>`
    }

