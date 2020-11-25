import React from 'react'
import './Search.css'

function Search() {
    return (
        <div className="search">
            <form>
                <input type="text" id="search" name="search" placeholder="Enter ，文字 Pinyin or English"/>
            </form>
        </div>
    )
}

export default Search
