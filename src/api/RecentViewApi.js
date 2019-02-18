const apiGetAllFoods = 'http://localhost:9999/Khai-Test-Api/API';

// asysn la gi ? la chay ham nay khi nao co ket qua thi quay lai lay ket qua?
async function getFoodFromServer() {
  try {
    // await la gi ? la doi tuong response  hoan thanh xong thi no fetch thi no moi chay ham tiep theo
    let response = await fetch(apiGetAllFoods);
    // .json la goi ham json de bien doi de lieu ve dang json | dang oject cua javascript
    let responseJson = await response.json();
    // console.log(`data`,responseJson)
    return responseJson;
  } catch (error) {
    console.error(`Error is : ${error}`)
  }
}
export {getFoodFromServer}