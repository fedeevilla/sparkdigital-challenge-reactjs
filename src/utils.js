export function CaesarShift(str, amount) {
  if (amount < 0) return CaesarShift(str, amount + 26);
  var output = "";
  for (var i = 0; i < str.length; i++) {
    var c = str[i];
    if (c.match(/[a-z]/i)) {
      var code = str.charCodeAt(i);
      if (code >= 65 && code <= 90)
        c = String.fromCharCode(((code - 65 + amount) % 26) + 65);
      else if (code >= 97 && code <= 122)
        c = String.fromCharCode(((code - 97 + amount) % 26) + 97);
    }
    output += c;
  }
  return output;
}

export function CaesarDecryption(encryptedString, unshiftAmount) {
  var plainText = "";
  for (var i = 0; i < encryptedString.length; i++) {
    var encryptedCharacter = encryptedString.charCodeAt(i);
    if (encryptedCharacter >= 97 && encryptedCharacter <= 122) {
      plainText += String.fromCharCode(
        ((encryptedCharacter - 97 - unshiftAmount + 26) % 26) + 97
      );
    } else if (encryptedCharacter >= 65 && encryptedCharacter <= 90) {
      plainText += String.fromCharCode(
        ((encryptedCharacter - 65 - unshiftAmount + 26) % 26) + 65
      );
    } else {
      plainText += String.fromCharCode("");
    }
  }
  return plainText;
}
