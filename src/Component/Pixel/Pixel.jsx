import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [games, setGames] = useState([]);
  const [selectedGame, setSelectedGame] = useState(null);

  useEffect(() => {
    axios
      .get("https://free-to-play-games-database.p.rapidapi.com/api/games", {
        params: { category: "pixel" },
        headers: {
          "x-rapidapi-key": "49ebdeb0b7msh066cd3f13b6de9cp1ac212jsnca9c955d773e",
          "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
        },
      })
      .then((res) => setGames(res.data))
      .catch(console.error);
  }, []);

  const fetchGameDetails = async (id) => {
    try {
      const res = await axios.get(
        "https://free-to-play-games-database.p.rapidapi.com/api/game",
        {
          params: { id },
          headers: {
            "x-rapidapi-key":
              "49ebdeb0b7msh066cd3f13b6de9cp1ac212jsnca9c955d773e",
            "x-rapidapi-host":
              "free-to-play-games-database.p.rapidapi.com",
          },
        }
      );
      setSelectedGame(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const closeDetails = () => setSelectedGame(null);

  return<div  className="bg-gray-900 min-h-screen "
  >
        <div className="bg-gray-900 min-h-screen text-white py-6 container mx-auto px-4">
      <div
        className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ${
          selectedGame ? "blur-sm pointer-events-none" : ""
        }`}
      >
        {games.map((game) => (
          <div
            key={game.id}
            onClick={() => fetchGameDetails(game.id)}
            className="cursor-pointer bg-gray-800 rounded-lg shadow-md overflow-hidden border border-gray-700 group transition duration-300"
          >
            <img
              src={game.thumbnail}
              alt={game.title}
              className="w-full h-48 object-cover brightness-75 group-hover:brightness-110 transform group-hover:scale-110 transition duration-500"
            />
            <div className="p-4">
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-lg font-semibold">{game.title}</h2>
                <span className="text-sm bg-blue-600 px-2 py-1 rounded font-medium">
                  Free
                </span>
              </div>
              <p className="text-gray-400 text-sm h-12 overflow-hidden text-ellipsis">
                {game.short_description}
              </p>
              <div className="flex justify-between mt-4 text-xs bg-gray-700 px-2 py-1 rounded">
                <span>{game.genre}</span>
                <span>{game.platform}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedGame && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex justify-center items-start z-50 overflow-auto py-6">
          <div className="bg-gray-900 rounded-lg shadow-xl w-full max-w-4xl p-6 relative">
            <button
              onClick={closeDetails}
              className="absolute top-4 right-4 text-gray-300 hover:text-white text-2xl"
            >
              &times;
            </button>
            <div className="md:flex gap-6">
              <img
                src={selectedGame.thumbnail}
                alt={selectedGame.title}
                className="md:w-1/3 w-full h-64 object-cover rounded border border-gray-700"
              />
              <div className="md:w-2/3 text-gray-100 flex flex-col mt-4 md:mt-0">
                <h2 className="text-3xl font-bold mb-2">{selectedGame.title}</h2>
                <div className="flex flex-wrap gap-2 mb-4 text-xs">
                  <span className="bg-blue-500 px-3 py-1 rounded-full">
                    {selectedGame.genre}
                  </span>
                  <span className="bg-gray-700 px-3 py-1 rounded-full">
                    {selectedGame.platform}
                  </span>
                  {selectedGame.status && (
                    <span className="bg-green-600 px-3 py-1 rounded-full">
                      {selectedGame.status}
                    </span>
                  )}
                </div>
                <p className="text-gray-300 flex-1 overflow-auto mb-4 max-h-60">
                  {selectedGame.description}
                </p>
                {selectedGame.game_url && (
                  <a
                    href={selectedGame.game_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-4 py-2 border border-yellow-400 rounded hover:bg-yellow-400 hover:text-black transition"
                  >
                    Show Game
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>


  </div>

 
}

export default App;
