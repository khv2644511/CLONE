import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [input, setInput] = useState("0");

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
        console.log(json);
      });
  }, []);

  const handleInput = (e) => {
    console.log(e.target.value);
    setInput(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setCoins((current) =>
      current.filter((coin) => input > coin.quotes.USD.price)
    );
    console.log(coins.length);
  };
  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      <form onSubmit={handleSubmit}>
        <input onChange={handleInput} type="number" placeholder="input USD" />
        <button>입력</button>
      </form>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <select>
          {coins.map((coin) => (
            <option key={coin.id}>
              {coin.name} ({coin.symbol}) ${coin.quotes.USD.price} USD
            </option>
          ))}
        </select>
      )}
    </div>
  );
}

export default App;

// http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=199ff03db6855d0ed5343e92968fef7e&targetDt=20120101
