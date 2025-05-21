// =============== LOGIN SESSION CHECK ==============
document.addEventListener('DOMContentLoaded', () => {
  const currentPage = window.location.pathname.split("/").pop();

  // Redirect to login if user is not authenticated
  if (currentPage !== 'userinterface.html') {
    const user = localStorage.getItem('user');
    if (!user) {
      alert('You must log in to access the dashboard.');
      window.location.href = 'userinterface.html';
    }
  }
  document.addEventListener('DOMContentLoaded', () => {
  const logoutBtn = document.getElementById('logout-btn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      localStorage.removeItem('user');
      alert('Logged out successfully.');
      window.location.href = 'userinterface.html';
    });
  }
});


  // Logout functionality
  const logoutBtn = document.getElementById('logout-btn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      localStorage.removeItem('user'); // Clear session
      alert('You have been logged out.');
      window.location.href = 'userinterface.html';
    });
  }
});