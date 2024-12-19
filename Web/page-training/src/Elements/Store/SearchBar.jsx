import { useState, useContext } from 'react';

const SearchBar = () => {
    return (
        <div className="flex-initial w-3/5 flex">
            <select className="rounded-l-lg p-2 h-10 text-[#f3f1f2ff] bg-[#811d2eff] rounded-r-none w-1/6 min-w-1/12">
                <option value="all">All</option>
                <option value="electronics">Electronics</option>
                <option value="fashion">Fashion</option>
                <option value="home">Home</option>
                <option value="beauty">Beauty</option>
            </select>
            <input type="text" placeholder="Search for products..." className="rounded-l-none p-2 bg-[#f3f1f2ff] text-[#811d2eff] w-4/5 h-10 rounded-r-none min-w-1/3 focus:outline-none"/>
            <button className="rounded-r-lg p-2 h-10 text-[#f3f1f2ff] bg-[#811d2eff] rounded-l-none w-1/12 min-w-1/12">Search</button>
        </div>
    );
};

export default SearchBar;