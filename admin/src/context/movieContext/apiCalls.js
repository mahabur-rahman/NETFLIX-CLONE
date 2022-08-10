import axios from "axios";
import {
  createMovieStart,
  createMovieSuccess,
  deleteMovieFailure,
  deleteMovieStart,
  deleteMovieSuccess,
  getMoviesFailure,
  getMoviesStart,
  getMoviesSuccess,
} from "./MovieActions";

// get movies ##############
export const getMovies = async (dispatch) => {
  dispatch(getMoviesStart());
  try {
    const res = await axios.get("/movies", {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    // console.log(res.data);
    dispatch(getMoviesSuccess(res.data));
  } catch (err) {
    dispatch(getMoviesFailure());
  }
};

// CREATE MOVIE ##############

export const createMovie = async (movie, dispatch) => {
  dispatch(createMovieStart());

  try {
    const res = await axios.post("/movies", movie, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });

    dispatch(createMovieSuccess(res.data));
    console.log(res.data);
  } catch (err) {
    dispatch(getMoviesFailure());
  }
};

// DELETE MOVIE ##############

export const deleteMovie = async (id, dispatch) => {
  dispatch(deleteMovieStart());

  try {
    await axios.delete("/movies/" + id, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
  } catch (err) {
    dispatch(deleteMovieFailure());
  }
};
