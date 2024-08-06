const API_KEY = process.env.REACT_APP_API_KEY;

export async function fetchReq(id) {
  // console.log(id);
  const res = await fetch(
    `https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}&plot=full`
  );

  // console.log(await res.json());
  const response = await res.json();
  return response;
}
export async function fetchSearchMovie(title) {
  // console.log(title);
  const res = await fetch(
    `https://www.omdbapi.com/?apikey=${API_KEY}&s=${title}`
  );
  const resonse = await res.json();
  // console.log(resonse.Search);
  return resonse.Search;
}
