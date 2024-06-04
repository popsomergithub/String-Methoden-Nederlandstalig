let result = false;

function emojiOrNot(str) {
  const emojiRegex = /[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{1F700}-\u{1F77F}\u{1F780}-\u{1F7FF}\u{1F800}-\u{1F8FF}\u{1F900}-\u{1F9FF}\u{1FA00}-\u{1FA6F}\u{1FA70}-\u{1FAFF}\u{1FB00}-\u{1FBFF}]/u;
  result = emojiRegex.test(str);
  return result;
}

function string_Length() {
  const str = document.getElementById('grid1_input_1').value;
  emojiOrNot(str);
  result ? grid1_res.innerText = 'Emojies zijn niet toegelaten...' : grid1_res.innerText = str.length;
}

function string_charAt() {
  const str = document.getElementById('grid2_input_1').value;
  const charIndex = document.getElementById('grid2_input_2').value;
  emojiOrNot(str);
  result ? grid2_res.innerText = 'Emojies zijn niet toegelaten...' : grid2_res.innerText = str.charAt(Number(charIndex));
}

function string_charCodeAt() {
  const str = document.getElementById('grid3_input_1').value;
  const charIndex = document.getElementById('grid3_input_2').value;
  emojiOrNot(str);
  result ? grid3_res.innerText = 'Emojies zijn niet toegelaten...' : grid3_res.innerText = str.charCodeAt(charIndex);
}

function string_at() {
  const str = document.getElementById('grid4_input_1').value;
  const charIndex = document.getElementById('grid4_input_2').value;
  emojiOrNot(str);
  result ? grid4_res.innerText = 'Emojies zijn niet toegelaten...' : grid4_res.innerText = str.at(charIndex);
}

function string_array() {
  const str = document.getElementById('grid5_input_1').value;
  const charIndex = document.getElementById('grid5_input_2').value;
  emojiOrNot(str);
  result ? grid5_res.innerText = 'Emojies zijn niet toegelaten...' : grid5_res.innerText = str[charIndex];
}

function string_slice() {
  const str = document.getElementById('grid6_input_1').value;
  const startIndex = Number(document.getElementById('grid6_input_2').value);
  const eindIndex = Number(document.getElementById('grid6_input_3').value);
  emojiOrNot(str);
  result ? grid6_res.innerText = 'Emojies zijn niet toegelaten...' : grid6_res.innerText = str.slice(startIndex, eindIndex);
}

function result35() {
  const resultThirtyfive = document.getElementById('zelf7').value;
  const startIndex = Number(document.getElementById('zelf7-2').value);
  const eindIndex = Number(document.getElementById('zelf7-3').value);
  res35.innerText = resultThirtyfive.substring(startIndex, eindIndex);
}

function result38() {
  const resultThirtyeight = document.getElementById('zelf8').value;
  const startIndex = Number(document.getElementById('zelf8-2').value);
  const eindIndex = Number(document.getElementById('zelf8-3').value);
  res38.innerText = resultThirtyeight.substr(startIndex, eindIndex);
}

function result40() {
  const resultForty = document.getElementById('zelf9').value;
  res40.innerText = resultForty.toUpperCase();
}

function result42() {
  const resultFortytwo = document.getElementById('zelf10').value;
  res42.innerText = resultFortytwo.toLowerCase();
}

function result45() {
  const resultFortyfive = document.getElementById('zelf11').value;
  const resultFortyfive_2 = document.getElementById('zelf11-2').value;
  const resultFortyfive_3 = document.getElementById('zelf11-3').value;
  const n1 = Number(resultFortyfive);
  const n2 = Number(resultFortyfive_2);
  const n3 = Number(resultFortyfive_3);
  if ((n1 === 0) && (n2 === 0) && (n3 === 0)) {
    res45.innerText = "empty string";
    return;
  }
  res45.innerText = resultFortyfive.concat(resultFortyfive_2, resultFortyfive_3);
}

function result47() {
  const resultFortyseven = document.getElementById('zelf12').value;
  let str = resultFortyseven.trim(); 
  document.getElementById("res47").textContent = "***" + str + "***";
}

function result49() {
  const resultFortynine = document.getElementById('zelf13').value;
  let str = resultFortynine.trimStart(); 
  document.getElementById("res49").textContent = "***" + str + "***";
}

function result51() {
  const resultFiftyone = document.getElementById('zelf14').value;
  let str = resultFiftyone.trimEnd(); 
  document.getElementById("res51").textContent = "***" + str + "***";
}

function result55() {
  const resultFiftyfive = document.getElementById('zelf15').value;
  const k = document.getElementById('zelf15-2').value;
  const n = document.getElementById('zelf15-3').value;
  let str = resultFiftyfive.padStart(n, k); 
  document.getElementById("res55").textContent = str;
}

function result60() {
  const resultSixty = document.getElementById('zelf16').value;
  const k = document.getElementById('zelf16-2').value;
  const n = document.getElementById('zelf16-3').value;
  let str = resultSixty.padEnd(n, k); 
  document.getElementById("res60").textContent = str;
}

function result62() {
  const resultSixty = document.getElementById('zelf17').value;
  const k = document.getElementById('zelf17-2').value;
  let str = resultSixty.repeat(k); 
  document.getElementById("res62").textContent = str;
}

function result65() {
  const resultSixtyfive = document.getElementById('zelf18').value;
  const zoekStr = document.getElementById('zelf18-2').value;
  const vervangStr = document.getElementById('zelf18-3').value;
  let str = resultSixtyfive.replace(zoekStr, vervangStr);
  document.getElementById("res65").textContent = str;
}

function result68() {
  const textStr = document.getElementById('zelf19').value;
  let searchStr = document.getElementById('zelf19-2').value;
  const replaceStr = document.getElementById('zelf19-3').value;
  let str = textStr.replaceAll(searchStr, replaceStr);
  /*
  try {
    // Try to create a RegExp object. If it fails, assume it's a plain string.
    const regex = new RegExp(searchStr, 'g'); 
    textStr = textStr.replaceAll(regex, replaceStr); // Use replaceAll() only when regex is valid
  } catch (error) {
    // If the user input is not a valid regex, treat it as a literal string
    textStr = textStr.replace(searchStr, replaceStr); // Use replace() for literal string
  }
  */
  document.getElementById("res68").textContent = str;
}

/*
function result68() {
  const textStr = document.getElementById('zelf19').value;
  let searchStr = document.getElementById('zelf19-2').value;
  const replaceStr = document.getElementById('zelf19-3').value;

  try {
    // Try to create a RegExp object. If it fails, assume it's a plain string.
    const regex = new RegExp(searchStr, 'g'); 
    textStr = textStr.replaceAll(regex, replaceStr); // Use replaceAll() only when regex is valid
  } catch (error) {
    // If the user input is not a valid regex, treat it as a literal string
    textStr = textStr.replace(searchStr, replaceStr); // Use replace() for literal string
  }
  document.getElementById("res68").textContent = textStr;
}
*/

function result71() {
  const resultSeventyone = document.getElementById('zelf20').value;
  const splitCharacter = document.getElementById('zelf20-2').value; 
  const result = resultSeventyone.split(splitCharacter); 
  const resultString = JSON.stringify(result);
  document.getElementById("res71").textContent = resultString;
}
