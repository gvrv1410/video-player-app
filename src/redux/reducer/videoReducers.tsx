import {ADD_VIDEO_LIST, DELETE_VIDEO_LIST, GET_VIDEO_LIST} from '../type';

const initialState = {
  videoListData: [],
};

const videoReducers = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_VIDEO_LIST:
      return {
        ...state,
        videoListData: action.payload,
      };
    case DELETE_VIDEO_LIST:
      return {
        ...state,
        videoListData: action.payload,
      };
    default:
      return state;
  }
};

export default videoReducers;
