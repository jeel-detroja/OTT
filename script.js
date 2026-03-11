// ============================================================
// script.js — CineVault OTT Platform
// Homepage logic: render cards, filter, search, navigation
// ============================================================

document.addEventListener('DOMContentLoaded', () => {

  /* ── Navbar scroll effect ── */
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    navbar?.classList.toggle('scrolled', window.scrollY > 60);
  });

  /* ── Search input ── */
  const searchInput = document.querySelector('.nav-search');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const query = e.target.value.trim().toLowerCase();
      filterMovies(activeCategory, query);
    });
  }

  /* ── State ── */
  let activeCategory = 'All';
  let searchQuery = '';

  /* ── Unique categories ── */
  const categories = ['All', ...new Set(movies.map(m => m.category))];

  /* ── Build filter buttons ── */
  const filterContainer = document.querySelector('.category-filter');
  if (filterContainer) {
    categories.forEach(cat => {
      const btn = document.createElement('button');
      btn.className = 'filter-btn' + (cat === 'All' ? ' active' : '');
      btn.textContent = cat;
      btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        activeCategory = cat;
        searchQuery = searchInput?.value.trim().toLowerCase() || '';
        filterMovies(activeCategory, searchQuery);
      });
      filterContainer.appendChild(btn);
    });
  }

  /* ── Render movies grid ── */
  const grid = document.querySelector('.movies-grid');
  if (grid) {
    renderMovies(movies, grid);
  }

  /* ── Render featured strip ── */
  const featuredGrid = document.querySelector('.featured-grid');
  if (featuredGrid) {
    const featured = movies.filter(m =>
      ['The Dark Knight','Inception','Joker','Interstellar','The Godfather','Mad Max: Fury Road'].includes(m.name)
    );
    featured.forEach((movie, i) => {
      const card = createFeaturedCard(movie, i);
      featuredGrid.appendChild(card);
    });
  }

  /* ── Filter function ── */
  function filterMovies(category, query) {
    const filtered = movies.filter(m => {
      const matchCat = category === 'All' || m.category === category;
      const matchQuery = !query || m.name.toLowerCase().includes(query);
      return matchCat && matchQuery;
    });

    if (grid) {
      grid.innerHTML = '';
      if (filtered.length === 0) {
        grid.innerHTML = `<div class="no-results"><h3>No films found</h3><p>Try a different search or category.</p></div>`;
        return;
      }
      renderMovies(filtered, grid);
    }

    // Update section count
    const countEl = document.querySelector('.section-count');
    if (countEl) countEl.textContent = `${filtered.length} titles`;
  }

  /* ── Create standard movie card ── */
  function createCard(movie, index) {
    const card = document.createElement('div');
    card.className = 'movie-card';
    card.style.animationDelay = `${(index % 20) * 40}ms`;
    card.innerHTML = `
      <div class="card-poster-wrap">
        <img class="card-poster" src="${movie.poster}" alt="${movie.name}" loading="lazy" />
        <div class="card-overlay">
          <div class="card-play-btn">
            <svg viewBox="0 0 24 24"><polygon points="5,3 19,12 5,21"/></svg>
          </div>
        </div>
        <span class="card-category-badge">${movie.category}</span>
      </div>
      <div class="card-info">
        <div class="card-title" title="${movie.name}">${movie.name}</div>
      </div>
    `;
    card.addEventListener('click', () => openMovie(movie));
    return card;
  }

  /* ── Create featured card ── */
  function createFeaturedCard(movie, index) {
    const card = document.createElement('div');
    card.className = 'featured-card';
    card.style.animationDelay = `${index * 80}ms`;
    card.innerHTML = `
      <img class="card-poster" src="${movie.poster}" alt="${movie.name}" loading="lazy" />
      <div class="card-info">
        <span class="card-category-badge">${movie.category}</span>
        <div class="card-title">${movie.name}</div>
      </div>
    `;
    card.addEventListener('click', () => openMovie(movie));
    return card;
  }

  /* ── Render all cards to grid ── */
  function renderMovies(list, container) {
    list.forEach((movie, i) => {
      container.appendChild(createCard(movie, i));
    });
  }

  /* ── Open movie: store data and navigate ── */
  function openMovie(movie) {
    // Store selected movie in localStorage for movie.html to read
    localStorage.setItem('selectedMovie', JSON.stringify(movie));
    // Navigate to movie player page
    window.location.href = 'movie.html';
  }

});