import {
  LOADED_DATA
} from './types';


export const loadData = () => {
  return (dispatch) => {
  	fetch('https://hacker-news.firebaseio.com/v0/item/8863.json?print=pretty')
  	.then(data => data.json())
  	.then(data => {
  		const arr = [];
  		arr.push(data);
      arr.push(data);
      arr.push(data);
      arr.push(data);
      arr.push(data);
      arr.push(data);
      arr.push(data);
  		dispatch({ type: LOADED_DATA, payload: arr });
  	});
  };
};
