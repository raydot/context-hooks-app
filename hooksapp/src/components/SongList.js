import React, { useState, useEffect } from 'react';
import uuid from 'uuid/v1';
import NewSongForm from './NewSongForm';

const SongList = () => {
  const [songs, setSongs] = useState([
    { title: 'walking in the dark', id: 1 },
    { title: 'hot time in the city', id: 2 },
    { title: 'why oh why?', id: 3 },
  ]);

  const [age, setAge] = useState(20);

  const addSong = (title) => {
    setSongs([...songs, { title, id: uuid() }]); // Add everything in songs plus a new song
  };

  // callback function that runs every time the component renders or re-renders
  useEffect(() => {
    console.log('useEffect in effect:', songs);
  }, [songs]);

  useEffect(() => {
    console.log('useEffect in effect:', age);
  }, [age]);

  return (
    <div className="song-list">
      <ul>
        {songs.map((song) => {
          return <li key={song.id}>{song.title}</li>;
        })}
      </ul>
      <NewSongForm addSong={addSong} />
      <button onClick={() => setAge(age + 1)}>Add Age: {age}</button>
    </div>
  );
};

export default SongList;
