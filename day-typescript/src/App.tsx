import React from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainPage from './components/MainPage';
function App() {
  // const [songs, setSongs] = React.useState<Song[]>([]);
  // interface Song {
  //   id: number,
  //   title: string,
  //   duration: number,
  //   artist: {
  //     id: number,
  //     name: string,
  //     picture: string,
  //   },
  //   album: {
  //     id: number,
  //     title: string,
  //     cover: string
  //   }


  return (
    <div className="App">
      <MainPage />
    </div>
  );
}

export default App;
