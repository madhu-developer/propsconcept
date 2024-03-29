import React, { useState, useEffect } from "react";
import Props from "./Props";
import {Info} from "./Info";
import { Login } from "./Login";


const Api = "https://dummyjson.com/products/1";

const CredentialsApi =
  "https://mocki.io/v1/7353bed7-312f-4853-b808-f85b859dd689";

const usersData = [
    {
      id:"1",
      name: "Madhu",
      mailid: "madhu@gmail.com",
      standard: "First",
      location: "AP",
    },
    {
      id:"2",
      name: "Harshi",
      mailid: "harshi@gmail.com",
      standard: "Second",
      location: "KA",
    },
    {
      id:"3",
      name: "Moksha",
      mailid: "moksha@gmail.com",
      standard: "Third",
      location: "AP",
    },
  ];

export const Home = () => {
  const [data,setData] = useState(usersData)
  const [details, setDetails] = useState([]);
  const [credentials, setCredentials] = useState([]);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const response = await fetch(Api);
        const result = await response.json();
        setDetails(result);
       // console.log(result);
      } catch (err) {
        console.error("Error fetching details:", err);
      }
    };
    fetchDetails();
  }, []);

  useEffect(() => {
    const fetchCredentials = async () => {
      try {
        const response = await fetch(CredentialsApi);
        const result = await response.json();
        setCredentials(result);
       // console.log(result);
      } catch (err) {
        console.error("Error fetching credentials:", err);
      }
    };
    fetchCredentials();
  }, []);

  return (
    <div>
      <h3>Home Component</h3>
      <Login credentials={credentials} setCredentials={setCredentials} />
      <Info details={details} setDetails={setDetails}/>
      <Props data={data} setData={setData} />
    </div>
  );
};
