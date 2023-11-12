function validateForm() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Array untuk menyimpan daftar username yang diarahkan ke admindb.html
    var adminUsernames = ['wahyu', 'diva', 'nasywa', 'mozzel', 'walikelas', 'kou'];

    // Array untuk menyimpan daftar username yang diarahkan ke portalsiswa.html
    var siswaUsernames = ['rama', 'ghani', 'andhika', 'asnia', 'aurelyo', 'chalel', 'diaz', 'ghatan', 'glenn', 'hilal', 'ibran', 'abizar', 'aldiansyah', 'farhan', 'fauzan', 'habibi', 'ikhsan', 'luthfi', 'navies', 'mrifqi', 'zidan', 'bregas', 'nabilah', 'nizar', 'rafif', 'rafik', 'reza', 'ridho', 'rifqi ahmad', 'tristan', 'weka', 'widhi'];

    // Buat akun dengan password yang sama dengan username
    var accounts = {};
    siswaUsernames.forEach(function (siswaUsername) {
        accounts[siswaUsername] = siswaUsername;
    });
    adminUsernames.forEach(function (adminUsername) {
        accounts[adminUsername] = adminUsername;
    });

    // Cek apakah username ada di dalam objek accounts dan password sesuai
    if (accounts.hasOwnProperty(username) && accounts[username] === password) {
        // Tampilkan SweetAlert untuk login berhasil
        Swal.fire({
            icon: 'success',
            title: 'Login Successful!',
            text: 'Welcome, ' + username + '!',
        }).then(() => {
            // Arahkan ke halaman yang sesuai berdasarkan peran pengguna
            if (adminUsernames.includes(username)) {
                window.location.href = 'scrtacc/admindb.html';
            } else if (siswaUsernames.includes(username)) {
                window.location.href = 'scrtacc/portalsiswa.html';
            }
        });
        return false; // Tidak perlu kembalikan true, karena kita ingin menghentikan submit form
    } else {
        // Tampilkan SweetAlert untuk login gagal
        Swal.fire({
            icon: 'error',
            title: 'Login Failed',
            text: 'Invalid username or password. Please try again.',
        });
        return false;
    }
}
