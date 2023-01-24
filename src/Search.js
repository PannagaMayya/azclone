import React from "react";
import "./Search.css";
import { searchitemtoList } from "./StateHandler/searchitemtoList";
function Search({ searchitem, setSearchtitle }) {
  let newlist = [];
  if (searchitem) {
    newlist = searchitemtoList(searchitem);
  }
  return (
    <div className="Search_popover">
      {searchitem ? (
        newlist.length ? (
          newlist.slice(0, 5).map((cur, i) => (
            <div key={i} onClick={() => setSearchtitle(cur)}>
              {cur.title.length > 65
                ? cur.title.slice(0, 60) + "......."
                : cur.title}
            </div>
          ))
        ) : (
          <div style={{ color: "Red", fontWeight: "600" }}>Not found!!!</div>
        )
      ) : (
        <div style={{ color: "green", fontWeight: "400" }}>
          Type Something....
        </div>
      )}
    </div>
  );
}

export default Search;
