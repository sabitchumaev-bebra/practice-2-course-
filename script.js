const navToggle = document.querySelector('.nav-toggle');
const navList = document.querySelector('.nav-list');
if (navToggle) {
  navToggle.addEventListener('click', () => {
    const opened = navList.style.display === 'flex' || navList.style.display === 'block';
    navList.style.display = opened ? 'none' : 'block';
    navToggle.setAttribute('aria-expanded', String(!opened));
  });
}
/**/
document.getElementById('year').textContent = new Date().getFullYear();

const dateFilter = document.getElementById('dateFilter');
const categoryFilter = document.getElementById('categoryFilter');
const eventsList = document.getElementById('eventsList');

function visible(li) { li.style.display = ''; }
function hidden(li) { li.style.display = 'none'; }

function filterEvents() {
  const dateVal = dateFilter.value;
  const catVal = categoryFilter.value;
  [...eventsList.querySelectorAll('.event')].forEach(li => {
    const time = li.querySelector('time').getAttribute('datetime');
    const cat = li.querySelector('.muted').textContent.trim();
    let ok = true;
    if (dateVal) ok = ok && (time >= dateVal);
    if (catVal) ok = ok && (cat === catVal);
    ok ? visible(li) : hidden(li);
  });
}
if (eventsList) {
  dateFilter?.addEventListener('change', filterEvents);
  categoryFilter?.addEventListener('change', filterEvents);
}
