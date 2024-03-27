import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useContextGlobal } from "../Components/utils/global.context";



const Detail = () => {
  const { state, dispatch } = useContextGlobal();
  const { doctorSelected } = state;


  const params = useParams();
  const url = `https://jsonplaceholder.typicode.com/users/${params.id}`;

  useEffect(() => {
    axios(url).then((res) =>
      dispatch({ type: "GET_DOCTOR", payload: res.data })
    );
  }, []);

  return (
    <>
      <h1>Detail Dentist {doctorSelected.name}</h1>
      <table>
        <thead>
          <tr>
            <th>Username</th>
            <th>Phone</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          <tr key={doctorSelected.id}>
            <td>{doctorSelected.username}</td>
            <td>{doctorSelected.phone}</td>
            <td>{doctorSelected.email}</td>
          </tr>
        </tbody>
      </table>

      
    </>
  );
};

export default Detail;