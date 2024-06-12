import React, { useCallback, useEffect, useState } from 'react';



import axios from 'axios';
import Card from './components/Card';
import './index.css';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from './state/store';
import { getPosts } from './state/api';
import { setEntities } from './state/reducer/fetchSlice';


function App() {
  const dispatch = useDispatch<AppDispatch>()
  const entities = useSelector((state: RootState) => state.wikipedia);
  const [loading, setLoading] = useState(true)
  const [showData, setShowData] = useState(false)

  const getPostsFunc = useCallback(() => {
    getPosts().then((data) => {
      dispatch(setEntities(data.articles))
      setLoading(false)

    });
  }, [])
  useEffect(() => {
    getPostsFunc()
  }, [])
  return (
    <div className='main'>
      <h1>Fetch users by button</h1>
      {!loading && (
        <button className='main_button' onClick={() => setShowData(!showData)}>Click to fetch post</button>

      )}

      {loading && (
        <div>
          Loading....
        </div>
      )}
      {!loading && showData && entities?.map((item, index) => (
        // Don't have id from data, that's why i take index
        <Card key={index} data={item} />
      ))}
    </div>
  );
}

export default App;
