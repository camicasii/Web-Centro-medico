import { SHOW_USERS, SHOW_USER, SING_FIRST } from "./types";
import Axios from "axios";
import jwt_decode from 'jwt-decode';


const url = "https://myapp256.herokuapp.com/api/";
//const url='http://localhost:4000/api/';
export const handleShowUsers = () => async dispatch => {
  console.log(Axios.defaults.xsrfHeaderName);

  await Axios(url + "user")
    .then(res => {
      if (res.status === 200) {
        console.log(res.data.data);
        dispatch({
          type: SHOW_USERS,
          payload: res.data.data
        });
      } else {
        console.log("error de coneccion");
      }
    })
    .catch(e => console.log(e));
};

export const handleShowUser=() => async dispatch => {
  const token = localStorage.getItem("token")
  const user = jwt_decode(token)
  console.log("paso");
  await Axios(url + "patient/" + user._id)
    .then(res => {
      if (res.status === 200) {
        console.log(res.data.data);
        dispatch({
          type: SHOW_USER,
          payload: res.data.data
        });
      } else {
        console.log("error de coneccion");
      }
    })
    .catch(e => console.log(e));
};

export const modifyData = formData => async dispatch => {
  console.log("modifyData");
};
export const handleSingFirst = (formData, userId) => async dispatch => {
  let firstLogin;
  await Axios(url + "user/" + userId)
    .then(res => (firstLogin = res.data.data.firstLogin))
    .catch(res => console.log(res));

  if (firstLogin === true || firstLogin === false)
    await Axios.post(url + "patient", formData)
      .then(async res => {
        const data = {
          firstLogin: false
        };
        dispatch({
          type: SING_FIRST,
          payload: data.firstLogin
        });
        handlefirstLogin(userId, data);
      })
      .catch(e => {
        console.log(e);
      });
};











const handlefirstLogin = async (id, data) => {
  await Axios.put(url + "user/" + id, data).catch(e => console.log(e));
};
