import React, { useState } from "react";

import { FaSpinner } from "react-icons/fa";

import MaterialInput from "../../Components/MaterialInput";
import Header from "../../Components/Header";
import PlaylistCard from "../../Components/PlaylistCard";
import Footer from "../../Components/Footer";

import { Container } from "./styles";

import api from "../../services/api";

function Home({ location }) {
  const [artists, setArtists] = useState([]);
  const [access_token, setAccess_token] = useState(
    location.state?.access_token
  );
  const [playListData, setPlalystData] = useState();
  const [loading, setLoading] = useState(false);

  async function handleClick() {
    const artistsId = artists.map((artist) => artist.id);

    try {
      setLoading(true);
      const { data } = await api.post(
        "/playlist",
        {
          artists: artistsId,
        },
        {
          headers: {
            Authorization: access_token,
          },
        }
      );

      setPlalystData(data);
    } catch (error) {
      setAccess_token(null);
    }
    setLoading(false);
  }

  function generateNewPlaylist() {
    setPlalystData(null);
    setArtists([]);
  }

  function login() {
    window.location.replace("http://localhost:8888/login");
  }

  return (
    <>
      <Header />
      <Container>
        <div className="title-container">
          <h1>Crie sua playlist Incrível</h1>
          <p>
            Busque seus artistas preferidos e gere uma playlist incrível para
            ouvir na sua conta do spotify
          </p>
        </div>
        <section className="content">
          {access_token ? (
            <>
              {!playListData ? (
                <>
                  <MaterialInput
                    setArtists={setArtists}
                    access_token={access_token}
                  />
                  <button
                    type="button"
                    className="prymary-btn generate"
                    disabled={loading}
                    onClick={() => handleClick()}
                  >
                    {loading ? (
                      <FaSpinner className="fa-spin" />
                    ) : (
                      "GERAR PLAYLIST"
                    )}
                  </button>
                </>
              ) : (
                <PlaylistCard
                  playListData={playListData}
                  generateNewPlaylist={generateNewPlaylist}
                />
              )}
            </>
          ) : (
            <>
              <button
                type="button"
                className="prymary-btn"
                onClick={() => login()}
              >
                ENTRAR COM SPOTIFY
              </button>
            </>
          )}
        </section>
        <Footer />
      </Container>
    </>
  );
}

export default Home;
