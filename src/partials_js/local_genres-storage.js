import { Movie } from './api';
const movie = new Movie({
  searchValue: '',
});

/**
 *
 * @param {*} array
 * @returns an object contains key=id & value=genre
 */
function createGenresObject(array) {
  const genres = {};

  array.forEach(({ id, name }) => {
    genres[id] = name;
  });
  console.log('Genres created Object: ', genres);
  return genres;
}

/**
 *
 * @param {*} genres key
 * @returns an object {id: genre} saved in the Local Storage
 */
function saveStorageGenres(genres) {
  try {
    const key = 'genres';
    const genresState = JSON.stringify(genres);
    return localStorage.setItem(key, genresState);
  } catch (error) {
    console.error('Set state error: ', error.message);
  }
}
/**
 *
 * @param {*} genre_ids
 * @param {*} loadGenres
 * @returns array of genres and can use for modal
 */
function markUpModalGenres(genre_ids, loadGenres) {
  let genersArray = []; // array for genres value
  if (genre_ids) {
    for (const key in loadGenres) {
      if (genre_ids.includes(Number(key))) {
        genersArray.push(' ' + loadGenres[key]);
      }
    }
  } else {
    genersArray = 'Sorry, but no information about genres';
  }
  return genersArray;
}
/**
 *
 * @param {*} genre_ids
 * @param {*} loadGenres
 * @returns array of genres (can use for main)
 */
function markUpMainGenres(genre_ids, loadGenres) {
  let genresForMain = markUpModalGenres(genre_ids, loadGenres);
  if (genresForMain) {
    if (genresForMain.length > 3) {
      genresForMain.splice(2, 0, ' Other');
      genresForMain.splice(3);
      return genresForMain;
    } else return genresForMain;
  } else return (genresForMain = 'Sorry, but no information about genres');
}

function genresCreate() {
  movie
    .fetchMovieGenres()
    .then(createGenresObject)
    .then(saveStorageGenres)
    .catch();
}

export {
  saveStorageGenres,
  createGenresObject,
  markUpMainGenres,
  markUpModalGenres,
  genresCreate,
};
