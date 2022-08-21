import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { MovieCard } from "../components/MovieCard";
import "./SearchMovies.css";

const API_KEY = "f3076c4a5a1999ec752596ae43fc689e";

const Pagination = ({ booksPerPage, booksAmount, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(booksAmount / booksPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="container-mt-5">
      <nav>
        <ul className="search-pagination">
          {pageNumbers.slice(0, 20).map((number) => {
            return (
              <li className="page-item" key={number}>
                <a
                  href="!#"
                  onClick={(e) => {
                    paginate(number);
                    e.preventDefault();
                  }}
                  className="page-link"
                >
                  {number}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default function SearchMovies() {
  const [isFetching, setIsFetching] = useState(false);
  const [movieData, setMovieData] = useState(null);
  const [page, setPage] = useState(1);
  const [booksPerPage, setBooksPerPage] = useState(20);
  const [booksAmount, setBooksAmount] = useState(null);
  const [searchQuery, setSearchQuery] = useState(null);
  const prevQueryRef = useRef();

  //search query
  const queryString = useLocation().search;
  const queryParams = new URLSearchParams(queryString);
  const query = queryParams.get("q");

  //pagination
  const paginate = (pageNumber) => {
    console.log("paginate function", pageNumber);
    setPage(pageNumber);
  };

  // useEffect(() => {
  //   console.log("Effect 1 run");
  //   setPage(1);
  // }, [query]);

  useEffect(() => {
    // console.log("Effect 2 run");
    const searchQueriedMovies = async (pageNo) => {
      setIsFetching(true);
      console.log(`Useffect page`, page);
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=${
          pageNo ?? page
        }&include_adult=false`
      );
      const data = await response.json();
      setMovieData(data.results);
      setBooksAmount(data.total_results);
      setSearchQuery(query);
      setIsFetching(false);
      console.log(data);
    };

    setSearchQuery((prevQuery) => {
      if (prevQuery && prevQuery !== query) {
        // prevQueryRef.current = prevQuery;
        searchQueriedMovies(1);
      } else {
        searchQueriedMovies();
      }
    });
  }, [query, page]);

  return (
    <div className="search-movies-container">
      <div className="search-movies-grid">
        {isFetching && <p>Loading movies...</p>}
        {movieData &&
          movieData.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
      <div className="search-pagination-container">
        <Pagination
          booksPerPage={booksPerPage}
          booksAmount={booksAmount}
          paginate={paginate}
        />
      </div>
    </div>
  );
}
