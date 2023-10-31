import { useNavigate, useSearchParams } from "react-router-dom";
import { Searchbar } from "../components/Searchbar";
import style from "./Search.module.css";
import { useState, useEffect } from "react";
import { fetchSubwayCongestion } from "../api";
import { SubwayCongestionItem } from "../components/SubwayCongestionItem";

export function Search() {
    // ** 중요 : 쿼리스트링 반환하기 위해서 useSearchParams() 이용하는 것, 주의!!
    const [ searchParams, setSearchParams ] = useSearchParams();
    const q = searchParams.get("q");
    const [ subwayCongestion, setSubwayCongestion ] = useState();

    const setInitData = () => {
        // ** 쿼리스트링 인자나 경로 인자를 추가해주긴 해야 한다.
        const data = fetchSubwayCongestion();

        console.log(data);
        setSubwayCongestion(data);
    }

    useEffect(() => {
        setInitData();
        
    }, [q]);

    return (
        <div className={style.container}>
            <Searchbar q={q}/>
            <div>
                검색 결과 : {q}
            </div>
            <SubwayCongestionItem subwayCongestion={subwayCongestion}/>
        </div>
    );
}

SubwayCongestionItem.defaultProps = {
    subwayCongestion: [],
};  