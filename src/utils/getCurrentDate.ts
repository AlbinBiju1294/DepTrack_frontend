export const getCurrentDate = () => {
    const today = new Date();
    let day = today.getDate();
    console.log(day)
    let month = today.getMonth() + 1;
    const year = today.getFullYear();
    let newday;
    let newmonth;
  
    if (day < 10) {
      newday = '0' + day.toString();
    }
    else{
      newday = day.toString();
    }
    if (month < 10) {
      newmonth = '0' + month.toString();
    }
    return `${year}-${newmonth}-${newday}`;
  }