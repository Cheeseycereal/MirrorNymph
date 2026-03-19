const startDate = new Date('2026-02-18'); 
const today = new Date();
const days = Math.floor((today - startDate) / (1000 * 60 * 60 * 24));
document.getElementById('day-counter').textContent = days + ' 🐑';