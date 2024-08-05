import { useState , useEffect} from 'react'
// import {db} from "./config/firebase"
// import {set, ref, onValue} from "firebase/database"

import Auth from "./components/authUser"
import { db} from "./config/firebase";
import { getDocs, collection} from "firebase/firestore"
import './App.css'


function App() {
  const [movieList, setMovieList] = useState([]);

  const moviesCollectionRef = collection(db, "movies");

  const getMovieList = async () => {
    try {
      const data = await getDocs(moviesCollectionRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setMovieList(filteredData);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getMovieList();
  }, []);


  return (
    <>
      {/* <h1>Hello G!</h1>
      <input type='text' placeholder='Name'/>
      <button onClick={putData} >Put Data</button>
      {Object.keys(data).map((users, i)=>(
        <h1 key={i}>{users}</h1>
      ))}
      {data[zaman]} */}

      <Auth />


    </>
  )
}

export default App
