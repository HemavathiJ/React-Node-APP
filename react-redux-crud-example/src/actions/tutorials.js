import {
    CREATE_TUTORIAL,
    RETRIEVE_TUTORIALS,
    UPDATE_TUTORIAL,
    DELETE_TUTORIAL,
    DELETE_ALL_TUTORIALS
} from './types';

import TutorialDataService from "../services/tutorial.service";

export const createTutorial = (title, description) => async (dispacth) => {
    try {
        const res = await TutorialDataService.create({
            title, description
        });

        dispacth({
            type: CREATE_TUTORIAL,
            payload: res.data
        });

        return Promise.resolve(res.data);
    } catch(err) {
        return Promise.reject(err);
    }
}

export const retrieveTutorials = () => async (dispacth) => {
    try {
        const res = await TutorialDataService.getAll();

        dispacth({
            type: RETRIEVE_TUTORIALS,
            payload: res.data
        });
        Promise.resolve(res.data);
    } catch(err) {
        return Promise.reject(err);
    }
}

export const updateTutorial = (id, data) => async (dispacth) => {
    try {
        const res = await TutorialDataService.update(id, data);

        dispacth({
            type: UPDATE_TUTORIAL,
            payload: data
        });

        return Promise.resolve(res.data);
    } catch(err) {
        return Promise.reject(err);
    }
}

export const deleteTutorial = (id) => async (dispatch) => {
    try {
      await TutorialDataService.delete(id);
  
      dispatch({
        type: DELETE_TUTORIAL,
        payload: { id },
      });
    } catch (err) {
      console.log(err);
    }
  };
  
  export const deleteAllTutorials = () => async (dispatch) => {
    try {
      const res = await TutorialDataService.deleteAll();
  
      dispatch({
        type: DELETE_ALL_TUTORIALS,
        payload: res.data,
      });
  
      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
  };
  
  export const findTutorialsByTitle = (title) => async (dispatch) => {
    try {
      const res = await TutorialDataService.findByTitle(title);
  
      dispatch({
        type: RETRIEVE_TUTORIALS,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
  