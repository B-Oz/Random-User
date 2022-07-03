import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./components/Card.js";
import "./App.scss";

const url = "https://randomuser.me/api/";

function App() {
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState([]);

  const users = async () => {
    // const response = await axios.get(url);
    // const {data} = response;
    try {
      const { data } = await axios.get(url);
      setUser(data.results[0]);
      setLoading(false)
    } catch (error) {
      alert(error);
    }
  };

  // const users = async () =>{
  //   const response = await fetch(url)
  //   console.log(response);
  //   const person = await response.json()
  //   console.log(person);
  //   setUser(person.results[0])
  // }

  useEffect(() => {
    users();
  }, []);

  if(loading){
    return <h2>Loading...</h2>
  }

  return (
    <>

    <div className="App">
      <Card user={user}/>
      {/* <h2>{user.email}</h2> */}
    </div>
      <button className="button" onClick={() => users()}>Random User</button>
    </>
  );
}

export default App;
