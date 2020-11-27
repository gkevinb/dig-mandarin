import React from "react";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import { makeStyles } from "@material-ui/core/styles";
import "./Search.css";

const useStyles = makeStyles((theme) => ({
    search: {
        backgroundColor: 'red',
        color: 'white',
        width: '40px',
        height: '40px',
        borderRadius: '10px',
        margin: '4px',
        "&:hover, &.Mui-focusVisible": { backgroundColor: "#e96f6f" }
    }
}));

function Search() {
    const classes = useStyles();

    return (
        <div className="search">
            <form>
                <input
                    type="text"
                    id="search"
                    name="search"
                    placeholder="Enter ，文字 Pinyin or English"
                />
                <IconButton disableRipple className={classes.search}>
                    <SearchIcon fontSize="large" />
                </IconButton>
            </form>
        </div>
    );
}

export default Search;
