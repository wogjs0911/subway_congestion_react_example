import { useNavigate } from "react-router-dom";
import style from "./SubwayCongestionItem.module.css";

export function SubwayCongestionItem({
    subwayLine,
    trainY,
    congestionResult
}) {

    // 최상위 태크는 항상 필요! 그 내부에서 구성해야 한다.
    return (
        <div>
            <div className={style.container}>
                <div className={style.subwayLine}>
                    {subwayLine}
                </div>
                <div className={style.trainY}>
                    {trainY}
                </div>
                <div className={style.congestionTrain}>
                    {congestionResult.congestionTrain}
                </div>
                <div className={style.congestionCar}>
                    {congestionResult.congestionCar}
                </div>
                <div className={style.congestionType}>
                    {congestionResult.congestionType}
                </div>
            </div>
        </div>
    );
}

