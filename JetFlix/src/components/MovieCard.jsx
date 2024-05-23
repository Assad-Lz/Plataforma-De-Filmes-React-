import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { FaStar } from 'react-icons/fa';

const imageUrl = import.meta.env.VITE_IMG;

const MovieCard = ({ movie, showLink = true }) => {
  // Estado para controlar se o mouse está sobre o link
  const [isHovered, setIsHovered] = useState(false);

  // Função para lidar com o hover
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <div className="movie-card">
      <img src={imageUrl + movie.poster_path} alt={movie.title} />
      <h2>{movie.title}</h2>
      <p>
        <FaStar /> {movie.vote_average}
      </p>
      {showLink && (
        <Link
          to={`/movie/${movie.id}`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{
            color: isHovered ? 'rgb(255, 160, 0)' : 'black',
            fontFamily: 'Helvetica',
          }}
        >
          Detalhes
        </Link>
      )}
    </div>
  )
}

export default MovieCard;