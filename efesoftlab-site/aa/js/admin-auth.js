(function () {
  var AUTH_KEY = 'aaguvenlik-admin-auth';
  var AUTH_EXPIRY = 2 * 60 * 60 * 1000;

  function isAuthenticated() {
    try {
      var data = JSON.parse(localStorage.getItem(AUTH_KEY));
      if (data && data.expires > Date.now()) { return true; }
    } catch (e) {}
    return false;
  }

  function doLogin() {
    if (isAuthenticated()) { return; }
    var password = prompt('Admin Paneli\'ne erişmek için şifre girin:');
    if (password === null) { window.location.href = 'index.html'; return; }

    var formData = new FormData();
    formData.append('password', password);

    fetch('api/admin-login.php', { method: 'POST', body: formData, credentials: 'same-origin' })
      .then(function (res) { return res.json(); })
      .then(function (result) {
        if (result.success) {
          localStorage.setItem(AUTH_KEY, JSON.stringify({ authenticated: true, expires: Date.now() + AUTH_EXPIRY }));
          location.reload();
        } else {
          alert(result.message || 'Hatalı şifre!');
          doLogin();
        }
      })
      .catch(function () {
        alert('Sunucuya bağlanılamadı. Lütfen daha sonra tekrar deneyin.');
        doLogin();
      });
  }

  document.addEventListener('DOMContentLoaded', function () {
    if (!isAuthenticated()) { doLogin(); }
  });
})();