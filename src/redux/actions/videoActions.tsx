import {ADD_VIDEO_LIST, DELETE_VIDEO_LIST, GET_VIDEO_LIST} from '../type';

export const addVideo = (data: any) => {
  return (dispatch: any) => {
    dispatch({
      type: ADD_VIDEO_LIST,
      payload: data,
    });
  };
};

export const deleteVideo = (data: any) => {
  return (dispatch: any) => {
    dispatch({
      type: DELETE_VIDEO_LIST,
      payload: data,
    });
  };
};
