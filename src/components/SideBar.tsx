import { Button } from "./Button";

import '../styles/sidebar.scss';

import { GenreResponseProps } from "../services/interfaces/IGenreResponse";

interface SideBarProps {
  genres: GenreResponseProps[],
  selectedGenreId: number,
  handleClickButton: (n: number) => void,
}

export function SideBar (props: SideBarProps) {
  const { genres, selectedGenreId, handleClickButton } = props;

  return (
      <nav className="sidebar">
        <span>
          Watch<p>Me</p>
        </span>

        <div className="buttons-container">
          {genres.map((genre) => (
            <Button
              key={String(genre.id)}
              title={genre.title}
              iconName={genre.name}
              onClick={() => handleClickButton(genre.id)}
              selected={selectedGenreId === genre.id}
            />
          ))}
        </div>
      </nav>
  );
}
