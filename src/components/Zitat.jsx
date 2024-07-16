import { useEffect, useState } from "react";

const Zitat = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    fetchZitate();
  }, []);

  const fetchZitate = () => {
    fetch("https://api.api-ninjas.com/v1/quotes", {
      headers: { "X-Api-Key": "5vPScc+BR7cFyzODtVaEyQ==Puzki19hBZYpi82Z" },
      
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok " + response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        if (data.length > 0) {
          setQuote(data[0].quote);
          setAuthor(data[0].author);
          setCategory(data[0].category);
        }
      })
      .catch((error) => {
        console.error("Error fetching the quote:", error);
      });
  };

  return (
    <div className="zitat-container">
      <h2>Zitat des Tages</h2>
      {quote ? (
        <div style={{width: "90%"}}>
          <p>{quote}</p>
          <p>
            <em>- {author}</em>
          </p>
          <p>
            <em>- {category}</em>
          </p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
      <button onClick={fetchZitate}>Neues Zitat</button>
    </div>
  );
};

export default Zitat;
