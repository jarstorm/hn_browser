import {
  LOADED_DATA
} from './types';


export const loadData = () => {
  return (dispatch) => {
  	
    fetch('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty')
    .then(data => data.json())
    .then(data => {
      for (var i = 0; i < 10; i++) {
        getElement(data[i], dispatch);
      }
    });

  };
};


function getElement(id, dispatch) {
  fetch('https://hacker-news.firebaseio.com/v0/item/'+id+'.json?print=pretty')
    .then(data => data.json())
    .then(data => {
      dispatch({ type: LOADED_DATA, payload: data });
    });
}