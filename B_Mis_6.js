// # Takes an encrypted string and decrypts it according to the following algorithm
// # 1) Convert to ASCII
// # 2) Adjust ASCII values according to following algorithm:
// #    0 for first char., -1 for second char., -2 for third char.
// # 3) Converts back to text
// # 4) Returns text

function decrypt(encryptedWord) {
	var wordLength  = encryptedWord.length;
	var counter = 0;
	var decrypt_array = [];
	while (counter < wordLength) {
		var charCode = encryptedWord.charCodeAt(counter)
		var newCode = charCode - (counter)
		var newChar = String.fromCharCode(newCode)
		decrypt_array.push(newChar)
		counter += 1;
	}

	return decrypt_array.join()
}