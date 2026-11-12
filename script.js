// Mobile menu
const nav = document.getElementById('nav');
document.getElementById('menuBtn').addEventListener('click', () => nav.classList.toggle('open'));
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));

// Land filter
const filters = document.querySelectorAll('.filter');
const lands = document.querySelectorAll('.land');
filters.forEach(btn => {
  btn.addEventListener('click', () => {
    filters.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const type = btn.dataset.filter;
    lands.forEach(l => l.classList.toggle('hide', type !== 'all' && l.dataset.type !== type));
  });
});

// "Enquire" buttons fill the property field
document.querySelectorAll('[data-enquire]').forEach(a => {
  a.addEventListener('click', () => {
    document.getElementById('property').value = a.dataset.enquire;
  });
});

// Enquiry form -> WhatsApp
const WHATSAPP_NUMBER = '919655752929'; // owner number with country code
document.getElementById('enquiryForm').addEventListener('submit', e => {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const prop = document.getElementById('property').value.trim();
  const msg = document.getElementById('msg').value.trim();
  const text = `Hello R&R Real Estates,%0AName: ${encodeURIComponent(name)}%0AMobile: ${encodeURIComponent(phone)}%0AProperty: ${encodeURIComponent(prop)}%0AMessage: ${encodeURIComponent(msg)}`;
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank');
});

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();
