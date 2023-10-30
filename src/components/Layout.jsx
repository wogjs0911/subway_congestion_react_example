import { useNavigate } from "react-router-dom";
import style from "./Layout.module.css";

export function Layout( { children } ) {
    const nav = useNavigate();

    const onClickHeader = () => {
        nav("/");
    }

    // 최상위 태크는 항상 필요! 그 내부에서 구성해야 한다.
    return (
        <div>
            <header
                className={style.header}
                onClick={onClickHeader}
            >
                🚇 Subway Congestion
            </header>
            <main className={style.main}>{children}</main>
        </div>
    );
}