import { useEffect, useState } from "react";
import "./Searchresults.scss";
import { Categories } from "lancer-keyword";
import { keyword } from "lancer-keyword";

function Searchresults({ search }: { search: string }) {
  const [directSearchResults, setDirectSearchResults] = useState<keyword[]>([]);
  const [indirectSearchResults, setIndirectSearchResults] = useState<keyword[]>(
    []
  );

  useEffect(() => {
    const directResults: keyword[] = [];
    const indirectResults: keyword[] = [];

    Object.keys(Categories).forEach((category) => {
      const categoryKeywords = Categories[category].keywords;
      Object.keys(categoryKeywords).forEach((keyword) => {
        const keywordData = categoryKeywords[keyword];
        if (keywordData.name.toLowerCase().includes(search.toLowerCase())) {
          directResults.push(keywordData);
        } else if (
          keywordData.text.toLowerCase().includes(search.toLowerCase())
        ) {
          indirectResults.push(keywordData);
        }
      });
    });

    setDirectSearchResults(directResults);
    setIndirectSearchResults(indirectResults);
  }, [search]);

  return (
    <div className="search-results">
      <h1>Search results for: {search}</h1>
      <h2>Found directly in keyword:</h2>
      {directSearchResults.length > 0 ? (
        <div className="results">
          {directSearchResults.map((keyword) => (
            <lancer-keyword keyword={keyword}></lancer-keyword>
          ))}
        </div>
      ) : (
        <p>No direct results found</p>
      )}
      <h2>Found indirectly in card text:</h2>
      {indirectSearchResults.length > 0 ? (
        <div className="results">
          {indirectSearchResults.map((keyword) => (
            <lancer-keyword keyword={keyword}></lancer-keyword>
          ))}
        </div>
      ) : (
        <p>No indirect results found</p>
      )}
    </div>
  );
}

export default Searchresults;
