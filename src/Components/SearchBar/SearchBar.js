import React, { useState } from 'react';
import './SearchBar.css'


function SearchBar({searchYelp}){

    const sortingOptions = {
        'Best Match': 'best_match',
        'Highest Rated': 'rating',
        'Most Reviewed': 'review_count'
    }

    const [term, setTerm] = useState('');
    const [location, setLocation] = useState('');
    const [sortBy, setSortBy] = useState('best_match')

    const toggleActive = (sortOption) =>{
        if(sortBy === sortOption){
            return 'active'
        }else{
            return ""
        }
    }

    const handleSortByChange = (sortOption) =>{
        setSortBy(sortOption)
    }

    const handleTermChange = (e) => {
        setTerm(e.target.value)
    }

    const handleLocationChange = (e) => {
        setLocation(e.target.value)
    }

    const handleSearch = (event) =>{
        event.preventDefault();
        searchYelp(term, location, sortBy)

    }

    const objectList = Object
    .keys(sortingOptions)
    .map((option) => 
        <li 
            onClick={()=>{handleSortByChange(sortingOptions[option])}} 
            id={toggleActive(sortingOptions[option])} 
            key={sortingOptions[option]}
        >                
        {option}
        </li>
        )

    return (
        <div className="SearchBar">
            <div className="SearchBarOptions">
                <ul>
                    {objectList}
                </ul>
            </div>
            <form onSubmit={handleSearch}>
            <div className="SearchBarInputs">
                <input placeholder="Search Businesses" onChange={handleTermChange}></input>
                <input placeholder="Where?" onChange={handleLocationChange}></input>
            </div>
            <div className="SearchBarButton">
                <button type="submit">Let's Go</button>
            </div>
            </form>
        </div>
    )
}

export default SearchBar