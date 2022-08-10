import ListReducer from "./ListOfListReducer";
import { createContext, useReducer } from "react";

// init state
const INITIAL_STATE = {
  lists: [],
  isFetching: false,
  error: false,
};

// create context
export const ListContext = createContext(INITIAL_STATE);

// context provider
export const ListContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ListReducer, INITIAL_STATE);

  return (
    <ListContext.Provider
      value={{
        lists: state.lists,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </ListContext.Provider>
  );
};
