import { useEffect, useState } from "react";
import { getAllWineries } from "../helpers/apikald";

const Winerys = () => {
  const [winerys, setWinerys] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    getAllWineries()
      .then((data) => {
        console.log(data);
        setWinerys(data);
        setError();
      })
      .catch((err) => {
        console.log(err);
        setError("There is an error!");
        setWinerys();
      });
  }, []);

  return (
    <div className="allWinerys">
      {winerys && (
        <>
          {winerys.map((w) => (
            <div key={w._id}>
              <h1>{w.name}</h1>
              <h1>{w.country}</h1>
            </div>
          ))}
        </>
      )}
      {!winerys && !error && (
        <div>
          <h1>Loader ...</h1>
        </div>
      )}
      {error && <h1>{error}</h1>}
    </div>
  );
};

export default Winerys;
