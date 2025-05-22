document.addEventListener('DOMContentLoaded', function() {
    const toggleTheme = document.createElement('button');
    toggleTheme.innerText = 'Changer de thème';
    document.body.appendChild(toggleTheme);
  
    toggleTheme.addEventListener('click', function() {
      document.body.classList.toggle('dark-theme');
    });
  });
  