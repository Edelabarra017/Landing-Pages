document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('toggleMenu');
    const menu = document.getElementById('menu');
  
    toggleButton.addEventListener('click', function () {
      if (menu.style.display === 'block') {
        menu.style.display = 'none';
      } else {
        menu.style.display = 'block';
      }
    });
  });
  