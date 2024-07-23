import React, { useState, useEffect } from "react";
import Body from "../components/Body";
import axios from "axios";

function PokeAPI() {
  const [num, setNum] = useState(1);
  const [pokemon, setPokemon] = useState(null);
  const [search, setSearch] = useState("");
  const [filteredPokemons, setFilteredPokemons] = useState([]);
  const [searchResult, setSearchResult] = useState(null);

  useEffect(() => {
    const fetchPokemonData = async (id) => {
      try {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        setPokemon(res.data);
        setSearchResult(res.data);
      } catch (error) {
        console.error("Error fetching Pokémon data:", error);
        setSearchResult(null);
      }
    };
    fetchPokemonData(num);
  }, [num]);

  useEffect(() => {
    const fetchAllPokemons = async () => {
      try {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=151`);
        setFilteredPokemons(res.data.results);
      } catch (error) {
        console.error("Error fetching Pokémon list:", error);
      }
    };
    fetchAllPokemons();
  }, []);

  const handleSearch = async () => {
    try {
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${search.toLowerCase()}`);
      setSearchResult(res.data);
    } catch (error) {
      setSearchResult(null);
    }
  };

  return (
    <Body
      slot={
        <div className="p-6">
          <div className="mb-4">
            <input
              type="text"
              placeholder="Search Pokémon"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              className="p-2 border border-gray-300 rounded w-full mb-4"
            />
            <button
              onClick={handleSearch}
              className="p-2 bg-blue-500 text-white rounded w-full mb-4 hover:bg-blue-600"
            >
              Search
            </button>
            <select
              name="pokemon"
              id="pokemon"
              value={num}
              onChange={(event) => setNum(event.target.value)}
              className="p-2 border border-gray-300 rounded w-full"
            >
              {filteredPokemons.map((poke, index) => (
                <option key={index} value={index + 1}>
                  {poke.name}
                </option>
              ))}
            </select>
          </div>
          {searchResult ? (
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h1 className="text-2xl mb-4 capitalize">{searchResult.name}</h1>
              <table className="min-w-full bg-white">
                <thead>
                  <tr>
                    <th className="py-2 px-4 border-b">Attribute</th>
                    <th className="py-2 px-4 border-b">Value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 px-4 border-b">ID</td>
                    <td className="py-2 px-4 border-b">{searchResult.id}</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b">Height</td>
                    <td className="py-2 px-4 border-b">{searchResult.height}</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b">Weight</td>
                    <td className="py-2 px-4 border-b">{searchResult.weight}</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b">Base Experience</td>
                    <td className="py-2 px-4 border-b">{searchResult.base_experience}</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b">Type</td>
                    <td className="py-2 px-4 border-b">
                      {searchResult.types.map((type) => type.type.name).join(", ")}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          ) : (
            search && (
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h1 className="text-2xl mb-4">Pokemon not found</h1>
              </div>
            )
          )}
        </div>
      }
    />
  );
}

export default PokeAPI;
