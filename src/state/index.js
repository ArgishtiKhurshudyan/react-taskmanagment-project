const { createContext, useReducer, useContext } = require("react");

const ACTIONS_TYPES = {
  SET_TASKS: "SET_TASKS",
  OPEN_MODAL: "OPEN_MODAL ",
  ADD_TASK: "ADD_TASK",
  UPDATE_CURRENT_TASK: "UPDATE_CURRENT_TASK",
  DELETE: "DELETE",
  EDIT: "EDIT",
};

const defaultState = {
  isModalOpen: false,
  isLoggedIn: false,
  currentTask: {},
  user: null,
  tasks: [],
};

const Context = createContext(defaultState);

const useBootcampContext = () => useContext(Context);

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS_TYPES.SET_TASKS: {
      return { ...state, tasks: action.tasks };
    }
    case ACTIONS_TYPES.ADD_TASK: {
      return { ...state, tasks: [...state.tasks, action.task] };
    }
    case ACTIONS_TYPES.EDIT: {
      let newState = state.tasks.map((task) => {
        if (task.id === action.task.id) {
          return action.task;
        }
        return task;
      });
      return { ...state, tasks: newState };
    }
    case ACTIONS_TYPES.DELETE: {
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.id),
      };
    }
    case ACTIONS_TYPES.OPEN_MODAL: {
      if (state.isModalOpen) {
        return { ...state, isModalOpen: !state.isModalOpen, currentTask: {} };
      }
      return { ...state, isModalOpen: !state.isModalOpen };
    }
    case ACTIONS_TYPES.UPDATE_CURRENT_TASK: {
      return {
        ...state,
        currentTask: { ...state.currentTask, ...action.task },
      };
    }
  }
}

function ContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, defaultState);

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
}

export { ContextProvider, useBootcampContext, ACTIONS_TYPES };
