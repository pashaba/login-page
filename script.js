
// Menangani form submission
document.getElementById('loginForm').addEventListener('submit', function(event) {
event.preventDefault();  // Mencegah form dari refresh otomatis

    // Jika form di-submit, langsung arahkan ke halaman lain
    window.location.href = 'https://center.vpskita.my.id';  // Ganti dengan URL tujuan
});
```
