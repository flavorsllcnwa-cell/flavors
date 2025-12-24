document.addEventListener('DOMContentLoaded', function () {
  // For each day card, populate .day-highlight from the image's data-highlights attribute
  document.querySelectorAll('.day-card').forEach(function (card) {
    var img = card.querySelector('.menu-image img');
    var highlightEl = card.querySelector('.day-highlight');
    if (!img || !highlightEl) return;
    var highlights = (img.dataset && img.dataset.highlights) ? img.dataset.highlights.trim() : '';

    if (!highlights && img.alt) {
      highlights = img.alt;
    }

    if (!highlights) {
      highlightEl.innerHTML = '<strong>Highlights:</strong> See menu image';
      return;
    }

    // If the highlights string contains '|' assume it's a separator and render as list
    if (highlights.indexOf('|') !== -1) {
      var parts = highlights.split('|').map(function (s) { return s.trim(); }).filter(Boolean);
      if (parts.length === 1) {
        highlightEl.innerHTML = '<strong>Highlights:</strong> ' + parts[0];
      } else {
        var list = '<strong>Highlights:</strong> <ul>' + parts.map(function (p) { return '<li>' + p + '</li>'; }).join('') + '</ul>';
        highlightEl.innerHTML = list;
      }
    } else {
      highlightEl.innerHTML = '<strong>Highlights:</strong> ' + highlights;
    }
  });
});
