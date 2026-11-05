// Re-sorts meetings into "Upcoming" / "Previous" using the visitor's current date,
// so a meeting moves to "Previous" the day after it happens — even without a rebuild.
(function () {
  var up = document.querySelector('[data-group="upcoming"]');
  var past = document.querySelector('[data-group="past"]');
  if (!up || !past) return;

  var d = new Date();
  var today = d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');

  var cards = Array.prototype.slice.call(document.querySelectorAll('.meeting[data-date]'));
  cards.sort(function (a, b) { return a.dataset.date < b.dataset.date ? -1 : a.dataset.date > b.dataset.date ? 1 : 0; });

  cards.forEach(function (c) { if (c.dataset.date >= today) up.appendChild(c); });
  cards.slice().reverse().forEach(function (c) { if (c.dataset.date < today) past.appendChild(c); });

  document.querySelector('[data-empty="upcoming"]').hidden = up.children.length > 0;
  document.querySelector('[data-empty="past"]').hidden = past.children.length > 0;
})();
