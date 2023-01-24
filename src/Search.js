import React from "react";
import "./Search.css";
import itemslist from "./itemslist.json";
import { useNavigate } from "react-router-dom";
function Search({ searchitem, setSearchtitle }) {
  const history = useNavigate();
  let newlist = [];
  if (searchitem) {
    newlist = itemslist.data.itemslist.filter((cur) =>
      cur.title.toLowerCase().includes(searchitem.toLowerCase())
    );
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
          <div>Not found</div>
        )
      ) : (
        <div>Type Something....</div>
      )}
    </div>
  );
}

export default Search;
