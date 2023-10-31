import axios from "axios";

export async function fetchSubwayCongestion() {

    // ** 방식 1 : async - await 실패 방식
    // const options = {
    //     method: 'GET',
    //     url: 'https://apis.openapi.sk.com/puzzle/subway/congestion/rltm/trains/2/2312',
    //     headers: {
    //       accept: 'application/json',
    //       'Content-Type': 'application/json',
    //       appkey: '59p9xneoNs7x8lPVFXMpd7TGSutHHeO9SKwji7Jg'
    //     }
    // };

    // try {
    //     const response = await axios.get(options); 
    //     return response.data;

    // } catch (e) {
    //     return [];
    // }

    // ** 방식 2 : axios get 방식에서 then - catch 방식
    // axios.get('/user', {
    //     params: {
    //       ID: 12345
    //     }
    //   })
    //   .then(function (response) {
    //     console.log(response);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   })
    //   .finally(function () {
    //     // always executed
    //   });  

    // ** 방식 3 : async - await + try - catch 방식
    try {
        // ** 쿼리스트링 인자나 경로 인자를 추가해주긴 해야 한다.
        // 실시간 데이터라서 새벽에는 지하철이 운행하지 않아 API의 호출 값을 얻을 수 없다. 현재 400 에러 발생
        // 2호선 차량 번호 : 2312, 2132, 2332
        const response = await axios.get("https://apis.openapi.sk.com/puzzle/subway/congestion/rltm/trains/2/2172", {
            headers: {
                accept: 'application/json',
                'Content-Type': 'application/json',
                appkey: '59p9xneoNs7x8lPVFXMpd7TGSutHHeO9SKwji7Jg'
            }
        }); 
        return response.data;

    } catch (e) {
        return [];
    }
}


