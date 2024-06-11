let result = false;
let result1 = false;
let result2 = false;
let result3 = false;

function containsMultiCodepointCharacter(str) {
  const chars = Array.from(str);result = chars.some(char => char.length > 1);return result;
}

function containsMultiCodepointCharacter2(str1, str2) {
  const chars1 = Array.from(str1);result1 = chars1.some(char => char.length > 1);
  const chars2 = Array.from(str2);result2 = chars2.some(char => char.length > 1);
  if (result1 || result2) {result = true} else {result = false}
  return result;
}

function containsMultiCodepointCharacter3(str1, str2, str3) {
  const chars1 = Array.from(str1); result1 =  chars1.some(char => char.length > 1);
  const chars2 = Array.from(str2); result2 =  chars2.some(char => char.length > 1);
  const chars3 = Array.from(str3); result3 =  chars3.some(char => char.length > 1);
  if (result1 || result2 || result3) {result = true} else {result = false}
  return result;
}

function string_Length() {
  const str = document.getElementById('grid1_input_1').value;
  containsMultiCodepointCharacter(str);
  result ? grid1_res.innerText = 'Karakters met een breedte van meer dan 1 karakter (zoals emojies) zijn niet toegelaten. (complicaties met de lengte).' : grid1_res.innerText = str.length;
}

function string_charAt() {
  const str = document.getElementById('grid2_input_1').value;
  const charIndex = document.getElementById('grid2_input_2').value;
  containsMultiCodepointCharacter(str);
  result ? grid2_res.innerText = 'Karakters met een breedte van meer dan 1 karakter (zoals emojies) zijn niet toegelaten. (complicaties met de lengte).' : grid2_res.innerText = str.charAt(Number(charIndex));
}

function string_charCodeAt() {
  const str = document.getElementById('grid3_input_1').value;
  const charIndex = document.getElementById('grid3_input_2').value;
  containsMultiCodepointCharacter(str);
  result ? grid3_res.innerText = 'Karakters met een breedte van meer dan 1 karakter (zoals emojies) zijn niet toegelaten. (complicaties met de lengte).' : grid3_res.innerText = str.charCodeAt(charIndex);
}

function string_at() {
  const str = document.getElementById('grid4_input_1').value;
  const charIndex = document.getElementById('grid4_input_2').value;
  containsMultiCodepointCharacter(str);
  result ? grid4_res.innerText = 'Karakters met een breedte van meer dan 1 karakter (zoals emojies) zijn niet toegelaten. (complicaties met de lengte).' : grid4_res.innerText = str.at(charIndex);
}

function string_array() {
  const str = document.getElementById('grid5_input_1').value;
  const charIndex = document.getElementById('grid5_input_2').value;
  containsMultiCodepointCharacter(str);
  result ? grid5_res.innerText = 'Karakters met een breedte van meer dan 1 karakter (zoals emojies) zijn niet toegelaten. (complicaties met de lengte).' : grid5_res.innerText = str[charIndex];
}

function string_slice() {
  const str = document.getElementById('grid6_input_1').value;
  const startIndex = Number(document.getElementById('grid6_input_2').value);
  const eindIndex = Number(document.getElementById('grid6_input_3').value);
  containsMultiCodepointCharacter(str);
  result ? grid6_res.innerText = 'Karakters met een breedte van meer dan 1 karakter (zoals emojies) zijn niet toegelaten. (complicaties met de lengte).' : grid6_res.innerText = str.slice(startIndex, eindIndex);
}

function string_substring() {
  const str = document.getElementById('grid7_input_1').value;
  const startIndex = Number(document.getElementById('grid7_input_2').value);
  const eindIndex = Number(document.getElementById('grid7_input_3').value);
  containsMultiCodepointCharacter(str);
  result ? grid7_res.innerText = 'Karakters met een breedte van meer dan 1 karakter (zoals emojies) zijn niet toegelaten. (complicaties met de lengte).' : grid7_res.innerText = str.substring(startIndex, eindIndex);
}

function string_substr() {
  const str = document.getElementById('grid8_input_1').value;
  const startIndex = Number(document.getElementById('grid8_input_2').value);
  const eindIndex = Number(document.getElementById('grid8_input_3').value);
  containsMultiCodepointCharacter(str);
  result ? grid8_res.innerText = 'Karakters met een breedte van meer dan 1 karakter (zoals emojies) zijn niet toegelaten. (complicaties met de lengte).' : grid8_res.innerText = str.substr(startIndex, eindIndex);
}

function string_toUpperCase() {
  const str = document.getElementById('grid9_input_1').value;
  containsMultiCodepointCharacter(str);
  result ? grid9_res.innerText = 'Karakters met een breedte van meer dan 1 karakter (zoals emojies) zijn niet toegelaten. (complicaties met de lengte).' : grid9_res.innerText = str.toUpperCase();
}

function string_toLowerCase() {
  const str = document.getElementById('grid10_input_1').value;
  containsMultiCodepointCharacter(str);
  result ? grid10_res.innerText = 'Karakters met een breedte van meer dan 1 karakter (zoals emojies) zijn niet toegelaten. (complicaties met de lengte).' : grid10_res.innerText = str.toLowerCase();
}

function string_concat() {
  const str1 = document.getElementById('grid11_input_1').value;
  const str2 = document.getElementById('grid11_input_2').value;
  const str3 = document.getElementById('grid11_input_3').value;
  containsMultiCodepointCharacter3(str1, str2, str3);
  result ? grid11_res.innerText = 'Karakters met een breedte van meer dan 1 karakter (zoals emojies) zijn niet toegelaten. (complicaties met de lengte).' : grid11_res.innerText = str1.concat(str2, str3);
}

function string_trim() {
  const str = document.getElementById('grid12_input_1').value;
  containsMultiCodepointCharacter(str);
  result ? grid12_res.innerText = 'Karakters met een breedte van meer dan 1 karakter (zoals emojies) zijn niet toegelaten. (complicaties met de lengte).' : grid12_res.innerText = "***" + str.trim(str) + "***";
}

function trimStart() {
  const str = document.getElementById('grid13_input_1').value;
  containsMultiCodepointCharacter(str);
  result ? grid13_res.innerText = 'Karakters met een breedte van meer dan 1 karakter (zoals emojies) zijn niet toegelaten. (complicaties met de lengte).' : grid13_res.innerText = "***" + str.trimStart() +"***";
}

function trimEnd() {
  const str = document.getElementById('grid14_input_1').value;
  containsMultiCodepointCharacter(str);
  result ? grid14_res.innerText = 'Karakters met een breedte van meer dan 1 karakter (zoals emojies) zijn niet toegelaten. (complicaties met de lengte).' : grid14_res.innerText = "***" + str.trimEnd() +"***";
}

function padStart() {
  const str1 = document.getElementById('grid15_input_1').value;
  const str2 = document.getElementById('grid15_input_2').value;
  const str3 = document.getElementById('grid15_input_3').value;
  const n = Number(str3);
  containsMultiCodepointCharacter2(str1, str2);
  result ? grid15_res.innerText = 'Karakters met een breedte van meer dan 1 karakter (zoals emojies) zijn niet toegelaten. (complicaties met de lengte).' : grid15_res.innerText = str1.padStart(n, str2);
}

function padEnd() {
  const str1 = document.getElementById('grid16_input_1').value;
  const str2 = document.getElementById('grid16_input_2').value;
  const str3 = document.getElementById('grid16_input_3').value;
  const n = Number(str3);
  containsMultiCodepointCharacter2(str1, str2);
  result ? grid16_res.innerText = 'Karakters met een breedte van meer dan 1 karakter (zoals emojies) zijn niet toegelaten. (complicaties met de lengte).' : grid16_res.innerText = str1.padEnd(n, str2);
}

function repeat() {
  const str = document.getElementById('grid17_input_1').value;
  const str2 = document.getElementById('grid17_input_2').value;
  const n = Number(str2);
  containsMultiCodepointCharacter(str);
  result ? grid17_res.innerText = 'Karakters met een breedte van meer dan 1 karakter (zoals emojies) zijn niet toegelaten. (complicaties met de lengte).' : grid17_res.innerText = str.repeat(n);
}

function replace() {
  const str1 = document.getElementById('grid18_input_1').value;
  const str2 = document.getElementById('grid18_input_2').value;
  const str3 = document.getElementById('grid18_input_3').value;
  containsMultiCodepointCharacter3(str1, str2, str3);
  result ? grid18_res.innerText = 'Karakters met een breedte van meer dan 1 karakter (zoals emojies) zijn niet toegelaten. (complicaties met de lengte).' : grid18_res.innerText = str1.replace(str2, str3);  
}

function replaceAll() {
  const str1 = document.getElementById('grid19_input_1').value;
  const str2 = document.getElementById('grid19_input_2').value;
  const str3 = document.getElementById('grid19_input_3').value;
  containsMultiCodepointCharacter3(str1, str2, str3);
  result ? grid19_res.innerText = 'Karakters met een breedte van meer dan 1 karakter (zoals emojies) zijn niet toegelaten. (complicaties met de lengte).' : grid19_res.innerText = str1.replaceAll(str2, str3);  
}

function split() {
  const str1 = document.getElementById('grid20_input_1').value;
  const str2 = document.getElementById('grid20_input_2').value;
  let str3 = str1.split(str2);
  const resultString = JSON.stringify(str3);
  containsMultiCodepointCharacter2(str1, str2);
  result ? grid20_res.innerText = 'Karakters met een breedte van meer dan 1 karakter (zoals emojies) zijn niet toegelaten. (complicaties met de lengte).' : grid20_res.innerText = resultString;   
}
