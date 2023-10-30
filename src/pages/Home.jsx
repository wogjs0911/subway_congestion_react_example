import { Searchbar } from "../components/Searchbar";
import style from "./Home.module.css";

export function Home() {
    return (
        <div className={style.container}>
            <Searchbar />
            <div className={style.imgBox}>
                <img 
                    className={style.subwayLineImg}
                    src="/subwayline2.png" 
                    alt="지하철 2호선 노선도입니다."
                />
            </div>
        </div>
    );
}