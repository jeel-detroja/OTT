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
      searchQuery = e.target.value.trim();
      filterMovies(activeCategory, searchQuery);
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
        searchQuery = searchInput?.value.trim() || '';
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

  /* ── Render Top 10 strip ── */
  const top10Grid = document.querySelector('.top10-grid');
  if (top10Grid) {
    const top10Names = [
      "The Dark Knight",
      "Inception",
      "Interstellar",
      "The Godfather",
      "Avengers: Endgame",
      "The Matrix",
      "Gladiator",
      "Titanic",
      "Avatar",
      "The Shawshank Redemption"
    ];
    const top10 = top10Names.map(name => movies.find(m => m.name === name)).filter(Boolean);
    top10.forEach((movie, i) => {
      const card = createTop10Card(movie, i + 1);
      top10Grid.appendChild(card);
    });
  }

  /* ── Filter function ── */
  function filterMovies(category, query) {
    const lowerQuery = query.toLowerCase();
    const filtered = movies.filter(m => {
      const matchCat = category === 'All' || m.category === category;
      const matchQuery = !lowerQuery || m.name.toLowerCase().includes(lowerQuery);
      return matchCat && matchQuery;
    });

    if (grid) {
      grid.innerHTML = '';
      if (filtered.length === 0) {
        grid.innerHTML = `<div class="no-results"><h3>No films found</h3><p>Try a different search or category.</p></div>`;
      } else {
        renderMovies(filtered, grid);
      }
    }

    // Update section count and title for the All Films grid
    const moviesSection = document.getElementById('movies');
    if (moviesSection) {
      const countEl = moviesSection.querySelector('.section-count');
      if (countEl) countEl.textContent = `${filtered.length} titles`;

      const titleEl = moviesSection.querySelector('.section-title');
      if (titleEl) {
        if (query) {
          titleEl.textContent = `Search Results for "${query}"`;
        } else {
          titleEl.textContent = category === 'All' ? 'All Films' : `${category} Films`;
        }
      }
    }

    // Toggle search-active state to hide hero/featured
    const isSearchActive = !!query || category !== 'All';
    if (isSearchActive) {
      document.body.classList.add('search-active');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      document.body.classList.remove('search-active');
    }
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

  /* ── Create top 10 card ── */
  function createTop10Card(movie, rank) {
    const card = document.createElement('div');
    card.className = 'top10-card';
    card.style.animationDelay = `${rank * 80}ms`;
    card.innerHTML = `
      <div class="rank-number">${rank}</div>
      <div class="card-poster-wrap">
        <img class="card-poster" src="${movie.poster}" alt="${movie.name}" loading="lazy" />
        <div class="card-overlay">
          <div class="card-play-btn">
            <svg viewBox="0 0 24 24"><polygon points="5,3 19,12 5,21"/></svg>
          </div>
        </div>
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