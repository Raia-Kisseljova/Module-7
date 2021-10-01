import {
  InputGroup,
  FormControl,
  Container,
  Row,
  Col

} from 'react-bootstrap'
import { ChangeEvent, FormEvent, useState } from 'react'
import React from 'react'

interface Events {

}

interface Song {
  id: number,
  title: string,
  duration: number,
  artist: {
    id: number,
    name: string,
    picture: string,
  },
  album: {
    id: number,
    title: string,
    cover: string
  }

}

const redirect = (e: any): any => {
  return window.location.replace(`https://striveschool-api.herokuapp.com/api/deezer/search?q=&${e.target.innerHTML}`)
}

export default function MainPage() {
  const searchRef = React.createRef<HTMLInputElement>();
  const [songs, setSongs] = React.useState<Song[]>([]);

  const fetchSongs = async () => {
    const response = await fetch(
      `https://striveschool-api.herokuapp.com/api/deezer/search?q=${searchRef.current?.value}`
    );
    const data = await response.json();
    setSongs(data.data);
    console.log(songs);
    console.log(searchRef.current?.value);
  };

  // const redirect = (e:) => {
  //   window.location.replace(
  //     `http://localhost:3000/company_detail/`
  //   );
  // };
  return (
    <div className="search-field">
      <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Text id="basic-addon1">Search</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl ref={searchRef}
          onChange={(e) => fetchSongs()}
        // placeholder="Username"
        // aria-label="Username"
        // aria-describedby="basic-addon1"
        />
      </InputGroup>

      <Container>
        <Row>


          {
            songs.map(song =>
              <Col lg={6} md={6} sm={6}>
                <div className="card-song">
                  <img src={song.artist.picture} alt="" />
                  <span>Song: {song.title}</span>
                  <span className="artist" onClick={(e) => redirect(e)}>{song.artist.name}</span>
                  <span className="album">{song.album.title}</span>
                </div>
              </Col>
            )
          }

        </Row>


      </Container>

    </div >
  )
}


