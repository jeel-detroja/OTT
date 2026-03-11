// ============================================
// movies.js — Movie Data for CineVault OTT
// ============================================

const movies = [
  // Action / Superhero
  { id: 1, name: "Avengers: Endgame", category: "Action", poster: "https://www.themoviedb.org/t/p/w1280/ulzhLuWrPK07P1YkdWQLZnQh1JL.jpg", link: "https://www.vidking.net/embed/movie/299534" },
  { id: 2, name: "The Dark Knight", category: "Action", poster: "https://www.themoviedb.org/t/p/w1280/qJ2tW6WMUDux911r6m7haRef0WH.jpg", link: "https://www.vidking.net/embed/movie/155" },
  { id: 3, name: "Mad Max: Fury Road", category: "Action", poster: "https://www.themoviedb.org/t/p/w1280/hA2ple9q4qnwxp3hKVNhroipsir.jpg", link: "https://www.vidking.net/embed/movie/76341" },
  { id: 4, name: "John Wick", category: "Action", poster: "https://www.themoviedb.org/t/p/w1280/wXqWR7dHncNRbxoEGybEy7QTe9h.jpg", link: "https://www.vidking.net/embed/movie/245891" },
  { id: 5, name: "Gladiator", category: "Action", poster: "https://www.themoviedb.org/t/p/w1280/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg", link: "https://www.vidking.net/embed/movie/98" },
  { id: 6, name: "Black Panther", category: "Action", poster: "https://www.themoviedb.org/t/p/w1280/uxzzxijgPIY7slzFvMotPv8wjKA.jpg", link: "https://www.vidking.net/embed/movie/284054" },
  { id: 7, name: "Captain America: Civil War", category: "Action", poster: "https://www.themoviedb.org/t/p/w1280/rAGiXaUfPzY7CDEyNKUofk3Kw2e.jpg", link: "https://www.vidking.net/embed/movie/271110" },
  { id: 8, name: "Jurassic World: Fallen Kingdom", category: "Action", poster: "https://www.themoviedb.org/t/p/w1280/x2Us3jR6ToMJjbcPbLimYoxf6xr.jpg", link: "https://www.vidking.net/embed/movie/351286" },
  { id: 9, name: "Top Gun: Maverick", category: "Action", poster: "https://www.themoviedb.org/t/p/w1280/62HCnUTziyWcpDaBO2i1DX17ljH.jpg", link: "https://www.vidking.net/embed/movie/361743" },
  { id: 10, name: "The Matrix", category: "Action", poster: "https://www.themoviedb.org/t/p/w1280/p96dm7sCMn4VYAStA6siNz30G1r.jpg", link: "https://www.vidking.net/embed/movie/603" },

  // Sci-Fi
  { id: 11, name: "Inception", category: "Sci-Fi", poster: "https://www.themoviedb.org/t/p/w1280/xlaY2zyzMfkhk0HSC5VUwzoZPU1.jpg", link: "https://www.vidking.net/embed/movie/27205" },
  { id: 12, name: "Interstellar", category: "Sci-Fi", poster: "https://www.themoviedb.org/t/p/w1280/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg", link: "https://www.vidking.net/embed/movie/157336" },
  { id: 13, name: "Avatar", category: "Sci-Fi", poster: "https://www.themoviedb.org/t/p/w1280/gKY6q7SjCkAU6FqvqWybDYgUKIF.jpg", link: "https://www.vidking.net/embed/movie/19995" },
  { id: 14, name: "Blade Runner 2049", category: "Sci-Fi", poster: "https://www.themoviedb.org/t/p/w1280/gajva2L0rPYkEWjzgFlBXCAVBE5.jpg", link: "https://www.vidking.net/embed/movie/335984" },
  { id: 15, name: "The Martian", category: "Sci-Fi", poster: "https://www.themoviedb.org/t/p/w1280/3ndAx3weG6KDkJIRMCi5vXX6Dyb.jpg", link: "https://www.vidking.net/embed/movie/286217" },
  { id: 16, name: "Gravity", category: "Sci-Fi", poster: "https://www.themoviedb.org/t/p/w1280/kZ2nZw8D681aphje8NJi8EfbL1U.jpg", link: "https://www.vidking.net/embed/movie/49047" },
  { id: 17, name: "Ready Player One", category: "Sci-Fi", poster: "https://www.themoviedb.org/t/p/w1280/pU1ULUq8D3iRxl1fdX2lZIzdHuI.jpg", link: "https://www.vidking.net/embed/movie/333339" },
  { id: 18, name: "A Quiet Place", category: "Sci-Fi", poster: "https://www.themoviedb.org/t/p/w1280/nAU74GmpUk7t5iklEp3bufwDq4n.jpg", link: "https://www.vidking.net/embed/movie/447332" },
  { id: 19, name: "District 9", category: "Sci-Fi", poster: "https://www.themoviedb.org/t/p/w1280/tuGlQkqLxnodDSk6mp5c2wvxUEd.jpg", link: "https://www.vidking.net/embed/movie/17654" },
  { id: 20, name: "Edge of Tomorrow", category: "Sci-Fi", poster: "https://www.themoviedb.org/t/p/w1280/nBM9MMa2WCwvMG4IJ3eiGUdbPe6.jpg", link: "https://www.vidking.net/embed/movie/137113" },

  // Horror
  { id: 21, name: "The Conjuring", category: "Horror", poster: "https://www.themoviedb.org/t/p/w1280/wVYREutTvI2tmxr6ujrHT704wGF.jpg", link: "https://www.vidking.net/embed/movie/138843" },
  { id: 23, name: "Hereditary", category: "Horror", poster: "https://www.themoviedb.org/t/p/w1280/hjlZSXM86wJrfCv5VKfR5DI2VeU.jpg", link: "https://www.vidking.net/embed/movie/493922" },
  { id: 24, name: "Get Out", category: "Horror", poster: "https://www.themoviedb.org/t/p/w1280/tFXcEccSQMf3lfhfXKSU9iRBpa3.jpg", link: "https://www.vidking.net/embed/movie/419430" },
  { id: 25, name: "A Nightmare on Elm Street", category: "Horror", poster: "https://www.themoviedb.org/t/p/w1280/wGTpGGRMZmyFCcrY2YoxVTIBlli.jpg", link: "https://www.vidking.net/embed/movie/377" },
  { id: 26, name: "Halloween", category: "Horror", poster: "https://www.themoviedb.org/t/p/w1280/wijlZ3HaYMvlDTPqJoTCWKFkCPU.jpg", link: "https://www.vidking.net/embed/movie/948" },
  { id: 27, name: "The Nun", category: "Horror", poster: "https://www.themoviedb.org/t/p/w1280/sFC1ElvoKGdHJIWRpNB3xWJ9lJA.jpg", link: "https://www.vidking.net/embed/movie/439079" },
  { id: 28, name: "Insidious", category: "Horror", poster: "https://www.themoviedb.org/t/p/w1280/1egpmVXuXed58TH2UOnX1nATTrf.jpg", link: "https://www.vidking.net/embed/movie/49018" },
  { id: 29, name: "It", category: "Horror", poster: "https://www.themoviedb.org/t/p/w1280/9E2y5Q7WlCVNEhP5GiVTjhEhx1o.jpg", link: "https://www.vidking.net/embed/movie/346364" },
  { id: 30, name: "The Ring", category: "Horror", poster: "https://www.themoviedb.org/t/p/w1280/AeRpUynJKDpJveklBJipOYrVxCS.jpg", link: "https://www.vidking.net/embed/movie/565" },

  // Comedy
  { id: 31, name: "The Hangover", category: "Comedy", poster: "https://www.themoviedb.org/t/p/w1280/A0uS9rHR56FeBtpjVki16M5xxSW.jpg", link: "https://www.vidking.net/embed/movie/18785" },
  { id: 33, name: "Ice Princess", category: "Comedy", poster: "https://www.themoviedb.org/t/p/w1280/oLWeyvu0ZJrpxDsRrzsMeaGzyZp.jpg", link: "https://www.vidking.net/embed/movie/13374" },
  { id: 34, name: "Dumb and Dumber", category: "Comedy", poster: "https://www.themoviedb.org/t/p/w1280/4LdpBXiCyGKkR8FGHgjKlphrfUc.jpg", link: "https://www.vidking.net/embed/movie/8467" },
  { id: 35, name: "Home Alone", category: "Comedy", poster: "https://www.themoviedb.org/t/p/w1280/i5We88HdO9Nsrv8xLyo4toNsLUM.jpg", link: "https://www.vidking.net/embed/movie/771" },
  { id: 36, name: "The Loft", category: "Comedy", poster: "https://www.themoviedb.org/t/p/w1280/msHg4MRKZBcGwIakhMEaYRSdYag.jpg", link: "https://www.vidking.net/embed/movie/72784" },
  { id: 37, name: "Bruce Almighty", category: "Comedy", poster: "https://www.themoviedb.org/t/p/w1280/f0QqG14SZYYZcV4VWykVc5w13dz.jpg", link: "https://www.vidking.net/embed/movie/310" },
  { id: 39, name: "The Mask", category: "Comedy", poster: "https://www.themoviedb.org/t/p/w1280/jPC2eYub74zwf2tPGVtzSlBW6Oy.jpg", link: "https://www.vidking.net/embed/movie/854" },
  { id: 40, name: "Mean Girls", category: "Comedy", poster: "https://www.themoviedb.org/t/p/w1280/2ZkuQXvVhh45uSvkBej4S7Ix1NJ.jpg", link: "https://www.vidking.net/embed/movie/10625" },

  // Romance
  { id: 41, name: "Titanic", category: "Romance", poster: "https://www.themoviedb.org/t/p/w1280/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg", link: "https://www.vidking.net/embed/movie/597" },
  { id: 42, name: "The Notebook", category: "Romance", poster: "https://www.themoviedb.org/t/p/w1280/rNzQyW4f8B8cQeg7Dgj3n6eT5k9.jpg", link: "https://www.vidking.net/embed/movie/11036" },
  { id: 43, name: "La La Land", category: "Romance", poster: "https://www.themoviedb.org/t/p/w1280/uDO8zWDhfWwoFdKS4fzkUJt0Rf0.jpg", link: "https://www.vidking.net/embed/movie/313369" },
  { id: 44, name: "Mary Poppins", category: "Romance", poster: "https://www.themoviedb.org/t/p/w1280/pHyWpWn2pRIfhS3Arcn4SKtKKW4.jpg", link: "https://www.vidking.net/embed/movie/433" },
  { id: 45, name: "Bringing Up Baby", category: "Romance", poster: "https://www.themoviedb.org/t/p/w1280/vTNNOtemaYmtx3k2NpsLMRJKEwZ.jpg", link: "https://www.vidking.net/embed/movie/900" },
  { id: 46, name: "Me Before You", category: "Romance", poster: "https://www.themoviedb.org/t/p/w1280/Ia3dzj5LnCj1ZBdlVeJrbKJQxG.jpg", link: "https://www.vidking.net/embed/movie/296096" },
  { id: 47, name: "Notting Hill", category: "Romance", poster: "https://www.themoviedb.org/t/p/w1280/hHRIf2XHeQMbyRb3HUx19SF5Ujw.jpg", link: "https://www.vidking.net/embed/movie/509" },
  { id: 48, name: "Pretty Woman", category: "Romance", poster: "https://www.themoviedb.org/t/p/w1280/hVHUfT801LQATGd26VPzhorIYza.jpg", link: "https://www.vidking.net/embed/movie/114" },
  { id: 49, name: "The Fault in Our Stars", category: "Romance", poster: "https://www.themoviedb.org/t/p/w1280/kcVuktIlrn9SAN1uBmPDnocTQmF.jpg", link: "https://www.vidking.net/embed/movie/222935" },
  { id: 50, name: "(500) Days of Summer", category: "Romance", poster: "https://www.themoviedb.org/t/p/w1280/qXAuQ9hF30sQRsXf40OfRVl0MJZ.jpg", link: "https://www.vidking.net/embed/movie/19913" },

  // Thriller / Crime
  { id: 51, name: "Se7en", category: "Thriller", poster: "https://www.themoviedb.org/t/p/w1280/191nKfP0ehp3uIvWqgPbFmI4lv9.jpg", link: "https://www.vidking.net/embed/movie/807" },
  { id: 52, name: "Fight Club", category: "Thriller", poster: "https://www.themoviedb.org/t/p/w1280/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg", link: "https://www.vidking.net/embed/movie/550" },
  { id: 53, name: "Gone Girl", category: "Thriller", poster: "https://www.themoviedb.org/t/p/w1280/ts996lKsxvjkO2yiYG0ht4qAicO.jpg", link: "https://www.vidking.net/embed/movie/210577" },
  { id: 54, name: "Prisoners", category: "Thriller", poster: "https://www.themoviedb.org/t/p/w1280/jsS3a3ep2KyBVmmiwaz3LvK49b1.jpg", link: "https://www.vidking.net/embed/movie/146233" },
  { id: 55, name: "Zodiac", category: "Thriller", poster: "https://www.themoviedb.org/t/p/w1280/6YmeO4pB7XTh8P8F960O1uA14JO.jpg", link: "https://www.vidking.net/embed/movie/1949" },
  { id: 56, name: "The Silence of the Lambs", category: "Thriller", poster: "https://www.themoviedb.org/t/p/w1280/uS9m8OBk1A8eM9I042bx8XXpqAq.jpg", link: "https://www.vidking.net/embed/movie/274" },
  { id: 57, name: "Shutter Island", category: "Thriller", poster: "https://www.themoviedb.org/t/p/w1280/nrmXQ0zcZUL8jFLrakWc90IR8z9.jpg", link: "https://www.vidking.net/embed/movie/11324" },
  { id: 58, name: "The Departed", category: "Thriller", poster: "https://www.themoviedb.org/t/p/w1280/nT97ifVT2J1yMQmeq20Qblg61T.jpg", link: "https://www.vidking.net/embed/movie/1422" },
  { id: 59, name: "Nightcrawler", category: "Thriller", poster: "https://www.themoviedb.org/t/p/w1280/j9HrX8f7GbZQm1BrBiR40uFQZSb.jpg", link: "https://www.vidking.net/embed/movie/242582" },
  { id: 60, name: "The Girl with the Dragon Tattoo", category: "Thriller", poster: "https://www.themoviedb.org/t/p/w1280/8bokS83zGdhaXgN9tjidUKmAftW.jpg", link: "https://www.vidking.net/embed/movie/65754" },

  // Drama
  { id: 61, name: "The Shawshank Redemption", category: "Drama", poster: "https://www.themoviedb.org/t/p/w1280/9cqNxx0GxF0bflZmeSMuL5tnGzr.jpg", link: "https://www.vidking.net/embed/movie/278" },
  { id: 62, name: "Forrest Gump", category: "Drama", poster: "https://www.themoviedb.org/t/p/w1280/saHP97rTPS5eLmrLQEcANmKrsFl.jpg", link: "https://www.vidking.net/embed/movie/13" },
  { id: 63, name: "The Green Mile", category: "Drama", poster: "https://www.themoviedb.org/t/p/w1280/8VG8fDNiy50H4FedGwdSVUPoaJe.jpg", link: "https://www.vidking.net/embed/movie/497" },
  { id: 64, name: "The Godfather", category: "Drama", poster: "https://www.themoviedb.org/t/p/w1280/3bhkrj58Vtu7enYsRolD1fZdja1.jpg", link: "https://www.vidking.net/embed/movie/238" },
  { id: 65, name: "The Godfather Part II", category: "Drama", poster: "https://www.themoviedb.org/t/p/w1280/hek3koDUyRQk7FIhPXsa6mT2Zc3.jpg", link: "https://www.vidking.net/embed/movie/240" },
  { id: 66, name: "Whiplash", category: "Drama", poster: "https://www.themoviedb.org/t/p/w1280/7fn624j5lj3xTme2SgiLCeuedmO.jpg", link: "https://www.vidking.net/embed/movie/244786" },
  { id: 67, name: "A Beautiful Mind", category: "Drama", poster: "https://www.themoviedb.org/t/p/w1280/zwzWCmH72OSC9NA0ipoqw5Zjya8.jpg", link: "https://www.vidking.net/embed/movie/453" },
  { id: 68, name: "The Social Network", category: "Drama", poster: "https://www.themoviedb.org/t/p/w1280/n0ybibhJtQ5icDqTp8eRytcIHJx.jpg", link: "https://www.vidking.net/embed/movie/37799" },
  { id: 69, name: "The Pursuit of Happyness", category: "Drama", poster: "https://www.themoviedb.org/t/p/w1280/lBYOKAMcxIvuk9s9hMuecB9dPBV.jpg", link: "https://www.vidking.net/embed/movie/1402" },
  { id: 70, name: "Joker", category: "Drama", poster: "https://www.themoviedb.org/t/p/w1280/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg", link: "https://www.vidking.net/embed/movie/475557" },

  // Fantasy / Adventure
  { id: 71, name: "The Lord of the Rings: Fellowship", category: "Fantasy", poster: "https://www.themoviedb.org/t/p/w1280/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg", link: "https://www.vidking.net/embed/movie/120" },
  { id: 72, name: "The Lord of the Rings: Two Towers", category: "Fantasy", poster: "https://www.themoviedb.org/t/p/w1280/5VTN0pR8gcqV3EPUHHfMGnJYN9L.jpg", link: "https://www.vidking.net/embed/movie/121" },
  { id: 73, name: "The Lord of the Rings: Return of the King", category: "Fantasy", poster: "https://www.themoviedb.org/t/p/w1280/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg", link: "https://www.vidking.net/embed/movie/122" },
  { id: 74, name: "Harry Potter: Philosopher's Stone", category: "Fantasy", poster: "https://www.themoviedb.org/t/p/w1280/wuMc08IPKEatf9rnMNXvIDxqP4W.jpg", link: "https://www.vidking.net/embed/movie/671" },
  { id: 75, name: "Harry Potter: Prisoner of Azkaban", category: "Fantasy", poster: "https://www.themoviedb.org/t/p/w1280/aWxwnYoe8p2d2fcxOqtvAtJ72Rw.jpg", link: "https://www.vidking.net/embed/movie/673" },
  { id: 76, name: "Pirates of the Caribbean", category: "Fantasy", poster: "https://www.themoviedb.org/t/p/w1280/poHwCZeWzJCShH7tOjg8RIoyjcw.jpg", link: "https://www.vidking.net/embed/movie/22" },
  { id: 77, name: "Jurassic Park", category: "Fantasy", poster: "https://www.themoviedb.org/t/p/w1280/maFjKnJ62hDQ9E66dKqDZgbUy0H.jpg", link: "https://www.vidking.net/embed/movie/329" },
  { id: 78, name: "Jumanji: Welcome to the Jungle", category: "Fantasy", poster: "https://www.themoviedb.org/t/p/w1280/pSgXKPU5h6U89ipF7HBYajvYt7j.jpg", link: "https://www.vidking.net/embed/movie/353486" },
  { id: 79, name: "King Kong", category: "Fantasy", poster: "https://www.themoviedb.org/t/p/w1280/6a2HY6UmD7XiDD3NokgaBAXEsD2.jpg", link: "https://www.vidking.net/embed/movie/254" },
  { id: 80, name: "The Chronicles of Narnia", category: "Fantasy", poster: "https://www.themoviedb.org/t/p/w1280/iREd0rNCjYdf5Ar0vfaW32yrkm.jpg", link: "https://www.vidking.net/embed/movie/411" },

  // Animation / Family
  { id: 81, name: "Toy Story", category: "Animation", poster: "https://www.themoviedb.org/t/p/w1280/uXDfjJbdP4ijW5hWSBrPrlKpxab.jpg", link: "https://www.vidking.net/embed/movie/862" },
  { id: 82, name: "Frozen", category: "Animation", poster: "https://www.themoviedb.org/t/p/w1280/kgwjIb2JDHRhNk13lmSxiClFjVk.jpg", link: "https://www.vidking.net/embed/movie/109445" },
  { id: 83, name: "Finding Nemo", category: "Animation", poster: "https://www.themoviedb.org/t/p/w1280/eHuGQ10FUzK1mdOY69wF5pGgEf5.jpg", link: "https://www.vidking.net/embed/movie/12" },
  { id: 84, name: "The Lion King", category: "Animation", poster: "https://www.themoviedb.org/t/p/w1280/sKCr78MXSLixwmZ8DyJLrpMsd15.jpg", link: "https://www.vidking.net/embed/movie/8587" },
  { id: 85, name: "Shrek", category: "Animation", poster: "https://www.themoviedb.org/t/p/w1280/iB64vpL3dIObOtMZgX3RqdVdQDc.jpg", link: "https://www.vidking.net/embed/movie/808" },
  { id: 86, name: "Kung Fu Panda", category: "Animation", poster: "https://www.themoviedb.org/t/p/w1280/wWt4JYXTg5Wr3xBW2phBrMKgp3x.jpg", link: "https://www.vidking.net/embed/movie/9502" },
  { id: 87, name: "Coco", category: "Animation", poster: "https://www.themoviedb.org/t/p/w1280/6Ryitt95xrO8KXuqRGm1fUuNwqF.jpg", link: "https://www.vidking.net/embed/movie/354912" },
  { id: 88, name: "Inside Out", category: "Animation", poster: "https://www.themoviedb.org/t/p/w1280/2H1TmgdfNtsKlU9jKdeNyYL5y8T.jpg", link: "https://www.vidking.net/embed/movie/150540" },
  { id: 89, name: "Despicable Me", category: "Animation", poster: "https://www.themoviedb.org/t/p/w1280/b1BT309QWjtFUlJPLmXmrcHOWEL.jpg", link: "https://www.vidking.net/embed/movie/20352" },
  { id: 90, name: "Zootopia", category: "Animation", poster: "https://www.themoviedb.org/t/p/w1280/hlK0e0wAQ3VLuJcsfIYPvb4JVud.jpg", link: "https://www.vidking.net/embed/movie/269149" },

  // Adventure / Epic
  { id: 91, name: "Raiders of the Lost Ark", category: "Adventure", poster: "https://www.themoviedb.org/t/p/w1280/ceG9VzoRAVGwivFU403Wc3AHRys.jpg", link: "https://www.vidking.net/embed/movie/85" },
  { id: 92, name: "Avatar: The Way of Water", category: "Adventure", poster: "https://www.themoviedb.org/t/p/w1280/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg", link: "https://www.vidking.net/embed/movie/76600" },
  { id: 93, name: "The Revenant", category: "Adventure", poster: "https://www.themoviedb.org/t/p/w1280/ji3ecJphATlVgWNY0B0RVXZizdf.jpg", link: "https://www.vidking.net/embed/movie/281957" },
  { id: 94, name: "Life of Pi", category: "Adventure", poster: "https://www.themoviedb.org/t/p/w1280/iLgRu4hhSr6V1uManX6ukDriiSc.jpg", link: "https://www.vidking.net/embed/movie/87827" },
  { id: 95, name: "Cast Away", category: "Adventure", poster: "https://www.themoviedb.org/t/p/w1280/7lLJgKnAicAcR5UEuo8xhSMj18w.jpg", link: "https://www.vidking.net/embed/movie/8358" },
  { id: 96, name: "The Incredible Hulk", category: "Adventure", poster: "https://www.themoviedb.org/t/p/w1280/gKzYx79y0AQTL4UAk1cBQJ3nvrm.jpg", link: "https://www.vidking.net/embed/movie/1724" },
  { id: 97, name: "Uncharted", category: "Adventure", poster: "https://www.themoviedb.org/t/p/w1280/rJHC1RUORuUhtfNb4Npclx0xnOf.jpg", link: "https://www.vidking.net/embed/movie/335787" },
  { id: 98, name: "National Treasure", category: "Adventure", poster: "https://www.themoviedb.org/t/p/w1280/pxL6E4GBOPUG6CdkO9cUQN5VMwI.jpg", link: "https://www.vidking.net/embed/movie/2059" },
  { id: 99, name: "The Jungle Book", category: "Adventure", poster: "https://www.themoviedb.org/t/p/w1280/2Epx7F9X7DrFptn4seqn4mzBVks.jpg", link: "https://www.vidking.net/embed/movie/278927" },
  { id: 100, name: "My Best Friend's Wedding", category: "Adventure", poster: "https://www.themoviedb.org/t/p/w1280/b5g4bp8gS5ovMyR5439AII6zQ3n.jpg", link: "https://www.vidking.net/embed/movie/8874" },
];