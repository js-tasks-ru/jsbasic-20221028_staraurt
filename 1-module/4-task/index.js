function checkSpam(str) {

  let lowerStr = str.toLowerCase();
  return lowerStr.includes('1xbet now') || lowerStr.includes ('xxx');

  alert( checkSpam ('1xBet') );
  alert(checkSpam ('xxx') );
}
