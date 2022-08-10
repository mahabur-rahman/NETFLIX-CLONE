import axios from "axios";
import {
  createListFailure,
  createListStart,
  createListSuccess,
  deleteListFailure,
  deleteListStart,
  getListsFailure,
  getListsStart,
  getListsSuccess,
} from "./ListOfListActions";

// get lists ##############
export const getLists = async (dispatch) => {
  dispatch(getListsStart());
  try {
    const res = await axios.get("/lists", {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    // console.log(res.data);
    dispatch(getListsSuccess(res.data));
  } catch (err) {
    dispatch(getListsFailure());
  }
};

// CREATE MOVIE ##############

export const createList = async (list, dispatch) => {
  dispatch(createListStart());

  try {
    const res = await axios.post("/lists", list, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });

    dispatch(createListSuccess(res.data));
    console.log(res.data);
  } catch (err) {
    dispatch(createListFailure());
  }
};

// DELETE LIST ##############

export const deleteList = async (id, dispatch) => {
  dispatch(deleteListStart());

  try {
    await axios.delete("/lists/" + id, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
  } catch (err) {
    dispatch(deleteListFailure());
  }
};
