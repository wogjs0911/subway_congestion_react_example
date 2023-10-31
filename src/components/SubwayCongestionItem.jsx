import { useNavigate } from "react-router-dom";
import style from "./SubwayCongestionItem.module.css";

export function SubwayCongestionItem({
    // subwayLine,
    // trainY,
    // congestionResult
    subwayCongestion
}) {
    console.log(subwayCongestion);
    
    // **해당 에러 해결법** : const로 변수에 담아서 반환!!
    const subwayLine = subwayCongestion.subwayLine;
    const trainY = subwayCongestion.trainY;
    // const congestionTrain = subwayCongestion.congestionResult.congestionTrain;
    // const congestionCar = subwayCongestion.congestionResult.congestionCar;
    // const congestionType = subwayCongestion.congestionResult.congestionType;

    // 최상위 태그는 항상 필요! 그 내부에서 구성해야 한다.
    return (
        <div>
            <div className={style.container}>
                <div className={style.subwayLine}>
                    지하철 호선 : {subwayLine}
                </div>
                <div className={style.trainY}>
                    차량 번호 : {trainY}
                </div>
                {/* <div className={style.congestionTrain}>
                    평균 혼잡도 : {congestionTrain}
                </div>
                <div className={style.congestionCar}>
                    각 지하철/칸별 혼잡도 : {congestionCar}
                </div>
                <div className={style.congestionType}>
                    혼잡도 타입 : {congestionType}
                </div> */}
            </div>
        </div>
    );
}

