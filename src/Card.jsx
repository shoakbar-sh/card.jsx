const Card = (props) => {
  return (
    <>
      <div className="card">
        <img src={props.pokemons.img} alt="" />
        <hr />
        <h1>{props.pokemons.name}</h1>
        <p>{props.pokemons.type}</p>
        <div className="card-body">
          <h1>{props.pokemons.weight}</h1>
          <h1>{props.pokemons.height}</h1>
        </div>
        <h1
          style={{
            fontSize: "20px",
            marginTop: "25px",
            color: "gray",
          }}
        >
          {props.pokemons.weaknesses.join(" ")}
        </h1>
      </div>
    </>
  );
};

export default Card;
