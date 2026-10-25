// import { useState,useEffect } from 'react'
// import MovieCard from '../MovieCard'
// import { searchMovies,getPopularMovies } from '../service/API';

// function Home() {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [movies,setmovies] = useState([]);
//   const [error,seterror] = useState(null);
//   const [loading,setloading] = useState(true);
  

//   useEffect(() => {
//     const loadpopularmovies = async () => {
//         try{
//           const popularmovies = await getPopularMovies()
//         } catch (error) {
//           console.log(arr)
//          seterror("failed to load....")
//         }  finally {false }
//     }

//     loadpopularmovies()
//   },[])

//     // const movies =getPopularMovies()
//     //  [
//     //     {id:1,title:"john wick",release_date:"2020"},
//     //     {id:2,title:"terminater",release_date:"2010"},
//     //     {id:3,title:"the matrix",release_date:"2023"},
//     //     {id:4,title:"the arrow",release_date:"2015"},
//     // ];

//   const handleSearch = (event) => {
//     event.preventDefault();
//     }

//   const filteredMovies = movies.filter(movie =>
//     movie.title.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   return (
//     <div className='home'>
//         <form onSubmit={handleSearch} className="search_form">
//             <input 
//              type="text" 
//              placeholder="search formovies..." className="search_input" value={searchQuery}
//              onChange={(e) => setSearchQuery(e.target.value)}
//              />
//             <button type="submit" className="search_btn">search</button>
//         </form>

//         {error && <div className='error-message'>{error}</div> }

//         {loading ? (
//         <div className='loading'>loading...<div/> : 
//         ) :(
//       <div className="movies_grid">
//         {Movies.map((movie=> (
//             <MovieCard movie={movie} key={movie.id}/>
//         ))}
//       </div>
//     </div>
//   )
// }

// export default Home


// import { useEffect, useState } from 'react';
// import MovieCard from '../MovieCard';
// import { getPopularMovies } from '../service/API';

// function Home() {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [movies, setMovies] = useState([]);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     async function loadPopularMovies() {
//       try {
//         const popularMovies = await getPopularMovies();
//         setMovies(popularMovies);
//       } catch (err) {
//         console.error(err);
//         setError('Failed to load movies.');
//       } finally {
//         setLoading(false);
//       }
//     }

//     loadPopularMovies();
//   }, []);

//   const filteredMovies = movies.filter((movie) =>
//     movie.title?.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   function handleSearch(event) {
//     event.preventDefault();
//   }

//   return (
//     <div className="home">
//       <form onSubmit={handleSearch} className="search_form">
//         <input
//           type="text"
//           placeholder="Search for movies..."
//           className="search_input"
//           value={searchQuery}
//           onChange={(event) => setSearchQuery(event.target.value)}
//         />
//         <button type="submit" className="search_btn">Search</button>
//       </form>

//       {error && <div className="error-message">{error}</div>}

//       {loading ? (
//         <div className="loading">Loading...</div>
//       ) : (
//         <div className="movies_grid">
//           {filteredMovies.map((movie) => (
//             <MovieCard movie={movie} key={movie.id} />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// export default Home;



import { useEffect, useState } from 'react';
import MovieCard from '../MovieCard';
import { getPopularMovies, searchMovies } from '../service/API';

function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadPopularMovies() {
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
        setError(null);
      } catch (err) {
        console.error(err);
        setError(err.message || 'Failed to load movies.');
      } finally {
        setLoading(false);
      }
    }

    loadPopularMovies();
  }, []);

  const handleSearch = async (event) => {
    event.preventDefault();
    const query = searchQuery.trim();
    if (!query || loading) return;

    setLoading(true);
    try {
      const searchResults = await searchMovies(query);
      setMovies(searchResults);
      setError(null);
    } catch (err) {
      console.error(err);
      setError(err.message || 'Failed to search movies.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search_form">
        <input
          type="text"
          placeholder="Search for movies..."
          className="search_input"
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
        />
        <button type="submit" className="search_btn">Search</button>
      </form>

      {error && <div className="error-message">{error}</div>}

      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div className="movies_grid">
          { movies.map((movie) => (
              <MovieCard movie={movie} key={movie.id} />
            ))}
        </div>
      )}
    </div>
  );
}

export default Home;
