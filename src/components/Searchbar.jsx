import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import style from "./Searchbar.module.css";

export function Searchbar( { q } ) {
    const nav = useNavigate();
    const [query, setQuery] = useState(""); 

    const onChangeQuery = (e) => {
        setQuery(e.target.value);        
    }

    const onClickSearchButton = () => {
        if(query !== ""){
            nav(`/search?q=${query}`);
        }
    }
    
    const onKeyDown = (e) => {
        if(e.keyCode === 13){
            onClickSearchButton();
        } 
    }

    useEffect(()=>{
        setQuery(q);
    }, [q]);


    // 최상위 태그는 항상 필요! 그 내부에서 구성해야 한다.
    return (
        <div className={style.container}>
            <input 
                value={query || ""} 
                className={style.searchBar}
                onChange={onChangeQuery}
            />
            <button 
                className={style.searchButton}
                onClick={onClickSearchButton}  
                onKeyDown={onKeyDown}
            >
                검색
            </button>
        </div>
    );
}