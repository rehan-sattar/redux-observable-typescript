import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createEpicMiddleware, combineEpics } from 'redux-observable';
import { addTodo, readAllTodos } from './epics';
import todoReducer from './reducer';

export default () => {
  /**
   * Middleware creation
   */
  const epicMiddleware = createEpicMiddleware();

  /** Root epic creation */
  const rootEpic = combineEpics(addTodo, readAllTodos);

  const store = createStore(
    todoReducer,
    composeWithDevTools(applyMiddleware(epicMiddleware))
  );
  epicMiddleware.run(rootEpic);
  return store;
};
