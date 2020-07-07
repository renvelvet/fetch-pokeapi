import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function DetailPokemon() {
  const { name } = useParams();

  const [detail, setdetail] = useState({});

  const fetchDetail = async () => {
    const url = `https://pokeapi.co/api/v2/pokemon/${name}`;

    const response = await fetch(url);
    const results = await response.json();
    setdetail(results);
  };

  useEffect(() => {
    fetchDetail();

    // eslint-disable-next-line
  }, []);

  return (
    <div>
      {detail.sprites !== undefined && (
        <img src={detail.sprites.back_default} alt={detail.name} />
      )}
    </div>
  );
}

export default DetailPokemon;
