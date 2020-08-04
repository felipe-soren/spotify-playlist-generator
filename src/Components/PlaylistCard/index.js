import React from "react";

import { Container } from "./styles";

function PlaylistCard({ playListData, generateNewPlaylist }) {
  function openLink(link) {
    window.open(link, "_blank");
  }

  return (
    <Container>
      <h3>Sua playlist foi gerada com sucesso!</h3>
      <button
        type="button"
        onClick={() => openLink(playListData.external_urls.spotify)}
      >
        Clique aqui para acessar
      </button>

      <button
        type="button"
        className="new-playlist"
        onClick={() => generateNewPlaylist()}
      >
        Gerar outra playlist
      </button>
    </Container>
  );
}

export default PlaylistCard;
