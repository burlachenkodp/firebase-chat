import React from "react";

const Search = () => {
  return (
    <div className="search">
      <div className="searchForm">
        <input type="text" placeholder="Find contact"/>
      </div>
      <div className="userChat">
        <img
          alt="das"
          src="https://img.icons8.com/office/30/000000/circled-user-female-skin-type-5.png"
        />
        <div className="userChatInfo">
          <span>JANE</span>
        </div>
      </div>
    </div>
  );
};

export default Search;
