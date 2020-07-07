import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const CardList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
const Card = styled.div`
  width: 200px;
  text-align: center;
  & img {
    width: 100%;
  }
`;

function ListPokemon() {
  const [list, setlist] = useState({});
  async function fetchPokeapi() {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=40&limit=100`;
    const response = await fetch(url);
    const results = await response.json();
    await setlist(results);
  }

  useEffect(() => {
    fetchPokeapi();
  }, []);

  return (
    <div>
      <CardList>
        {list.results !== undefined &&
          list.results.map((item) => {
            const id = item.url.split("/")[6];

            return (
              <Card key={id}>
                <img
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
                  alt="pokemon"
                />

                <p>{item.name}</p>
                <Link to={`/pokemon/${item.name}`}>{item.name}</Link>
              </Card>
            );
          })}
      </CardList>
    </div>
  );
}

export default ListPokemon;
