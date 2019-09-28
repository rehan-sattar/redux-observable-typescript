/**
 * Types for todo
 */
export const ADD_TODO = 'ADD_TODO';
export const ADD_TODO_SUCCESS = 'ADD_TODO_SUCCESS';
export const ADD_TODO_ERROR = 'ADD_TODO_ERROR';

export const FETCH_TODOS = 'FETCH_TODOS';
export const FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS';
export const FETCH_TODOS_ERROR = 'FETCH_TODOS_ERROR';

/**
 * Actions
 */

/**
 * [ADD TODO ACTIONS]
 */
export const addTodoStarted = () => ({
  type: ADD_TODO
});

export const addTodoSuccess = () => ({
  type: ADD_TODO_SUCCESS
});

export const addTodoError = err => ({
  type: ADD_TODO_ERROR,
  payload: err
});
/**
 * [FETCHING TODOS ACTIONS]
 */
export const fetchTodosStarted = () => ({
  type: FETCH_TODOS
});

export const fetchTodosSuccess = payload => ({
  type: FETCH_TODOS_SUCCESS,
  payload
});

export const fetchTodosError = err => ({
  type: FETCH_TODOS_ERROR,
  payload: err
});
