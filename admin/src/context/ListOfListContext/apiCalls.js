import axios from "axios";
import {
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
