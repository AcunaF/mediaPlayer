import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./musicaStyles.scss";
import imagenspoti from "../../../../assets/images/imagesspoti.png";
import calavera from "../../../../assets/images/imagescalabera.jpeg";

import rock from "../../../../assets/images/fondo.jpg";
import { FaHandRock } from "react-icons/fa";

const topTracksIds = [
  "4VeKaCNnpy9TKQPEi234gE",
  "4CIAEQxIUHWujgpMYTXnJZ",
  "3SfFu1MfHefPC55gW4ngH3",
  "2PMSOgAP1A2TYbRqGCS9ak",
  "5cZqsjVs6MevCnAkasbEOX",
];
const tracksUri = [
  "spotify:track:4VeKaCNnpy9TKQPEi234gE",
  "spotify:track:4AuPpQnGyE61BDNHcfpFxJ",
  "spotify:track:4CIAEQxIUHWujgpMYTXnJZ",
  "spotify:track:0OkeWuIKHKV4vkNdmoayx4",
  "spotify:track:3SfFu1MfHefPC55gW4ngH3",
  "spotify:track:230fvom9jD849sjBMSSxsm",
  "spotify:track:2PMSOgAP1A2TYbRqGCS9ak",
  "spotify:track:2aIB1CdRRG7YLBu9hNw9nR",
  "spotify:track:5cZqsjVs6MevCnAkasbEOX",
  "spotify:track:0exIZeuMV5MBvjsWOhUTuK",
];
const playlistId = "5k4Xl3b1qF56T1MDUXw3m8";

const Music = () => {
  const navigate = useNavigate();
  const [topTracks, setTopTracks] = useState([]);
  const [recommendedTracks, setRecommendedTracks] = useState([]);
  /*  const tokenHaExpirado = () => {
    const expiracion = localStorage.getItem("token_expiracion");
    if (!expiracion) return true;
    return Date.now() > new Date(expiracion).getTime();
  };

  // Función para refrescar el token
  async function refrescarToken() {
    try {
      // obtener un nuevo token
      const respuesta = await fetch("/ruta/para/refrescar/token", {
        method: "POST",
      });
      const data = await respuesta.json();
      if (respuesta.ok) {
        return data.nuevoToken;
      } else {
        throw new Error("No se pudo refrescar el token");
      }
    } catch (error) {
      return null;
    }
  }

  // Función para realizar una solicitud que requiere autenticación
  async function realizarSolicitudConAutenticacion(url, opciones) {
    try {
      const respuesta = await fetch(url, opciones);
      if (respuesta.status === 401) {
        // Error 401: No autorizado
        console.log(
          "Error 401: No autorizado. Intentando refrescar el token..."
        );
        const nuevoToken = await refrescarToken();
        if (nuevoToken) {
          opciones.headers.Authorization = `Bearer ${nuevoToken}`;
          // Reintenta la solicitud con el nuevo token
          return fetch(url, opciones);
        } else {
          throw new Error("No se pudo obtener un nuevo token");
        }
      }
      return respuesta;
    } catch (error) {
      console.error("Error al realizar la solicitud:", error);
    }
  }*/

  useEffect(() => {
    const fetchWebApi = async (endpoint, method, body = null) => {
      return <smal>no ando</smal>;
    };

    const getTopTracks = async () => {
      const data = await fetchWebApi(
        "v1/me/top/tracks?time_range=long_term&limit=5",
        "GET"
      );
      setTopTracks(data.items || []);
    };

    async function fetchData() {
      async function getRecommendations() {
        return (
          await fetchWebApi(
            `v1/recommendations?limit=5&seed_tracks=${topTracksIds.join(",")}`,
            "GET"
          )
        ).tracks;
      }

      const recommendedTracks = await getRecommendations();
      setRecommendedTracks(recommendedTracks || []);
    }

    const createPlaylist = async (tracksUri) => {
      const { id: user_id } = await fetchWebApi("v1/me", "GET");

      const playlist = await fetchWebApi(
        `v1/users/${user_id}/playlists`,
        "POST",
        {
          name: "My recommendation playlist",
          description:
            "Playlist created by the tutorial on developer.spotify.com",
          public: false,
        }
      );

      await fetchWebApi(
        `v1/playlists/${playlist.id}/tracks?uris=${tracksUri.join(",")}`,
        "POST"
      );
      return playlist;
    };

    fetchData();
    getTopTracks();
    createPlaylist(tracksUri);
  }, []);

  return (
    <>
      <div className="musicaStyles">
        <div className="text-center">
          <a href="#!">
            <img
              className="img-fluid"
              src={imagenspoti}
              alt="BootstrapBrain Logo"
              width="auto"
              height="200"
            />
          </a>
          <h2 className="fs-6 fw-normal text-center text-secondary">
            Enjoy the best recitals via streaming. You register, you choose the
            recital, you pay!! and to enjoy
          </h2>
        </div>
        <div className="flex">
          <h1>Tu lista</h1>
          <img src={calavera}></img>
        </div>
        <iframe
          className="spotistyles"
          title="Spotify Embed: Recommendation Playlist "
          src={`https://open.spotify.com/embed/playlist/5k4Xl3b1qF56T1MDUXw3m8?utm_source=generator&theme=0`}
          width="100%"
          height="90%"
          style={{ minHeight: "600px" }}
          frameborder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        />
        <div className="topStyles">
          <h1>Top 5 tracks</h1>
          <div style={{ color: "white" }} className="container">
            {console.log("Top Tracks:", topTracksIds)}

            {topTracksIds && topTracksIds.length > 0 ? (
              topTracksIds.map((track) => (
                <div key={track.id} className="card">
                  <p
                    style={{ color: "white" }}
                  >{`${track.id} by ${track.name}`}</p>
                </div>
              ))
            ) : (
              <p>No se encontraron pistas</p>
            )}
          </div>
        </div>

        <div className="recomendaciones">
          <div className="d-flex">
            <h1>Para vos</h1>
            {console.log("Recommended Tracks:", tracksUri)}
            <img src={calavera} alt="calavera" />
          </div>
          <div>
            {tracksUri && tracksUri.length > 0 ? (
              tracksUri.map(({ name, artists }) => (
                <p key={name}>{`${name} by ${tracksUri
                  .map((artist) => artist.name)
                  .join(", ")}`}</p>
              ))
            ) : (
              <p>No se encontraron recomendaciones</p>
            )}
          </div>
        </div>

        <div className="">
          <h1>Guardar las 10 canciones en una playlist</h1>
        </div>
        <div className="row">
          <button onClick={() => navigate("/principal")}>
            Ir al principal
            <FaHandRock />
          </button>
        </div>
        <div className="container">
          <img style={{ width: "100%" }} src={rock}></img>
        </div>
      </div>
    </>
  );
};

export default Music;
