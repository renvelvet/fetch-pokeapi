import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const PokeAva = styled.img`
  border: 1px solid black;
`;
const DetailPoke = styled.div`
  margin-top: 40px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  & h1 {
    margin-bottom: 4px;
  }
  & h2 {
    margin-top: 4px;
    font-weight: 400;
  }
`;
function DetailPokemon() {
  const { name } = useParams();

  const [detail, setdetail] = useState({});

  const fetchDetail = async () => {
    const url = `https://pokeapi.co/api/v2/pokemon/${name}`;

    const response = await fetch(url);
    const results = await response.json();
    setdetail(results);
    console.log(detail.name);
  };

  useEffect(() => {
    fetchDetail();

    // eslint-disable-next-line
  }, []);

  return (
    <DetailPoke>
      <div>
        {detail.sprites !== undefined && (
          <PokeAva src={detail.sprites.back_default} alt={detail.name} />
        )}
      </div>

      <div>
        {detail.name !== undefined && <h1>{detail.name}</h1>}
        {detail.weight !== undefined && <h2>{detail.weight} kg</h2>}
      </div>

      <div>
        <table>
          <tr>
            <th>Base Statistic</th>
            <th>Expertise</th>
          </tr>
          {detail.stats !== undefined &&
            detail.stats.map((element) => {
              return (
                <tr>
                  <td>{element.base_stat}</td>
                  <td>{element.stat.name}</td>
                </tr>
              );
            })}
        </table>

        <table>
          <tr>
            <th>Abilities</th>
          </tr>
          {detail.abilities !== undefined &&
            detail.abilities.map((element) => {
              return (
                <tr>
                  <td>{element.ability.name}</td>
                </tr>
              );
            })}
        </table>

        <table>
          <tr>
            <th>Moves</th>
          </tr>
          {detail.moves !== undefined &&
            detail.moves.map((element) => {
              return (
                <tr>
                  <td>{element.move.name}</td>
                </tr>
              );
            })}
        </table>
      </div>
    </DetailPoke>
  );
}

export default DetailPokemon;
