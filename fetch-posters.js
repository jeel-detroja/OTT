// Your TMDB API Key
const apiKey = 'bf84e494c41836766b2d4ad428f551c3';

// All 100 Movie IDs
const movieIds = [
  // Action / Superhero
  299534, 155, 76341, 245891, 98, 284054, 271110, 351286, 361743, 603,
  // Sci-Fi
  27205, 157336, 19995, 335984, 286217, 49047, 333339, 447332, 17654, 137113,
  // Horror
  138843, 1154, 493922, 419430, 377, 948, 439079, 49018, 346364, 565,
  // Comedy
  18785, 8519, 13374, 8467, 771, 72784, 310, 8864, 854, 10625,
  // Romance
  597, 11036, 313369, 433, 900, 296096, 509, 114, 222935, 19913,
  // Thriller / Crime
  807, 550, 210577, 146233, 1949, 274, 11324, 1422, 242582, 65754,
  // Drama
  278, 13, 497, 238, 240, 244786, 453, 37799, 1402, 475557,
  // Fantasy / Adventure
  120, 121, 122, 671, 673, 22, 329, 353486, 254, 411,
  // Animation / Family
  862, 109445, 12, 8587, 808, 9502, 354912, 150540, 20352, 269149,
  // Adventure / Epic
  85, 76600, 281957, 87827, 8358, 1724, 335787, 2059, 278927, 8874
];

async function fetchAllPosters() {
  console.log("Fetching poster URLs from TMDB...\n");
  
  for (let i = 0; i < movieIds.length; i++) {
    const id = movieIds[i];
    
    // Add category headers for easy copying
    if (i === 0) console.log("### Action / Superhero\n");
    if (i === 10) console.log("\n### Sci-Fi\n");
    if (i === 20) console.log("\n### Horror\n");
    if (i === 30) console.log("\n### Comedy\n");
    if (i === 40) console.log("\n### Romance\n");
    if (i === 50) console.log("\n### Thriller / Crime\n");
    if (i === 60) console.log("\n### Drama\n");
    if (i === 70) console.log("\n### Fantasy / Adventure\n");
    if (i === 80) console.log("\n### Animation / Family\n");
    if (i === 90) console.log("\n### Adventure / Epic\n");

    try {
      // Fetch data from TMDB API
      const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`);
      
      if (!response.ok) {
        console.error(`Failed to fetch ID ${id} (Status: ${response.status})`);
        continue;
      }
      
      const data = await response.json();
      const title = data.title;
      const posterPath = data.poster_path;
      
      // Print exactly in the requested format
      if (posterPath) {
        console.log(`${i + 1}. ${title} : https://image.tmdb.org/t/p/w1280${posterPath}`);
      } else {
        console.log(`${i + 1}. ${title} : No poster available`);
      }
      
      // Small delay to prevent hitting TMDB's rate limit
      await new Promise(resolve => setTimeout(resolve, 50)); 
      
    } catch (error) {
      console.error(`Error fetching ID ${id}:`, error);
    }
  }
  
  console.log("\nFinished fetching all URLs!");
}

fetchAllPosters();