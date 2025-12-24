document.addEventListener('DOMContentLoaded', function () {
  // For each day card, populate .day-highlight from the image's data-highlights attribute
  document.querySelectorAll('.day-card').forEach(function (card) {
    var img = card.querySelector('.menu-image img');
    var highlightEl = card.querySelector('.day-highlight');
    if (!highlightEl) return;

    // Prefer data-highlights on the card (useful when there's no image), then image dataset, then image alt
    var highlights = '';
    if (card.dataset && card.dataset.highlights) {
      highlights = card.dataset.highlights.trim();
    } else if (img && img.dataset && img.dataset.highlights) {
      highlights = img.dataset.highlights.trim();
    } else if (img && img.alt) {
      highlights = img.alt.trim();
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
