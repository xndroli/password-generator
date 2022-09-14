// Assignment code here
// Creating password object.
var pwdCriteria = {
	// Property for length of password
	pwdLength: 0,

	// Array of lowercase letters
	pwdLowerCase: [
		'a',
		'b',
		'c',
		'd',
		'e',
		'f',
		'g',
		'h',
		'i',
		'j',
		'k',
		'l',
		'm',
		'n',
		'o',
		'p',
		'q',
		'r',
		's',
		't',
		'u',
		'v',
		'w',
		'x',
		'y',
		'z',
	],

	// Array of uppercase letters
	pwdUpperCase: [
		'A',
		'B',
		'C',
		'D',
		'E',
		'F',
		'G',
		'H',
		'I',
		'J',
		'K',
		'L',
		'M',
		'N',
		'O',
		'P',
		'Q',
		'R',
		'S',
		'T',
		'U',
		'V',
		'W',
		'X',
		'Y',
		'Z',
	],

	// Array of integers
	pwdNumber: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],

	// Array of special characters
	pwdCharacter: [
		'!',
		'"',
		'#',
		'$',
		'%',
		'&',
		"'",
		'(',
		')',
		'*',
		'+',
		',',
		'-',
		'.',
		'/',
		'\\',
		':',
		';',
		'<',
		'>',
		'=',
		'?',
		'@',
		'[',
		']',
		'^',
		'_',
		'`',
		'{',
		'}',
		'|',
		'~',
	], //32
};

// Function that handles the operations to generate a new password
function generatePassword() {
	// Holds the password to be generated and returned
	var result = '';

	// Variables to collect input from user prompts
	var passwordLength = 0;
	var upperCase;
	var lowerCase;
	var numbers;
	var specialChar;

	// Initialize characters
	passwordLength = 0;
	pwdCriteria.pwdLength = 0;
	result = '';

	// Check password length
	while (passwordLength < 8 || passwordLength > 128) {
		passwordLength = prompt(
			'How many characters do you want your password to be? \nPassword must be between 8 and 128 characters.'
		);

		// If user presses cancel
		if (passwordLength === null) {
			return 'Your secure password';
		} else {
			// Checking user enters an integer
			if (!isFinite(passwordLength)) {
				alert('You did not enter a number');
				return 'Your secure password';
			} else {
				// Check password meets length criteria
				if (passwordLength < 8 || passwordLength > 128) {
					alert('Password must be between 8 and 128 characters.');
					return 'Your secure password';
				} else {
					// Call the internal function to show prompts for criteria
					showPrompts();

					// Keep adding characters based on criteria until pwdLength is = to the length the user set
					while (pwdCriteria.pwdLength < passwordLength) {
						// If statement to make sure the user selects at least one of the criteria
						if (
							lowerCase === false &&
							upperCase === false &&
							numbers === false &&
							specialChar === false
						) {
							alert(
								'You must select at least one criteria of lowercase, uppercase, numbers or special characters'
							);
							showPrompts();
						} else {
							// If the user selected lowercase and there is still room to add characters then
							// Randomly grab a lowercase letter from the array and add it to the end of result
							// Update pwdLength by 1
							if (
								lowerCase === true &&
								pwdCriteria.pwdLength < passwordLength
							) {
								var lc =
									pwdCriteria.pwdLowerCase[Math.floor(Math.random() * 26)];
								result = result + lc;
								pwdCriteria.pwdLength++;
							}

							// If the user selected a special character and there is still room to add characters then
							// Randomly grab a apecial character from the array and add it to the end of result
							// Update pwdLength by 1
							if (
								specialChar === true &&
								pwdCriteria.pwdLength < passwordLength
							) {
								var sc =
									pwdCriteria.pwdCharacter[Math.floor(Math.random() * 32)];
								result = result + sc;
								pwdCriteria.pwdLength++;
							}

							// If the user selected an uppercase letter and there is still room to add characters then
							// Randomly grab an uppercase letter from the array and add it to the end of result
							// Update pwdLength by 1
							if (
								upperCase === true &&
								pwdCriteria.pwdLength < passwordLength
							) {
								var uc =
									pwdCriteria.pwdUpperCase[Math.floor(Math.random() * 26)];
								result = result + uc;
								pwdCriteria.pwdLength++;
							}

							// If the user selected a number and there is still room to add characters then
							// Randomly grab a number from the array and add it to the end of result
							// Update pwdLength by 1
							if (numbers === true && pwdCriteria.pwdLength < passwordLength) {
								var num = pwdCriteria.pwdNumber[Math.floor(Math.random() * 10)];
								result = result + num;
								pwdCriteria.pwdLength++;
							}
						}
					}
				}
			}
		}

		// Return the generated password back to the calling function
		return result;

		// Internal function to prompt the user for criteria
		function showPrompts() {
			lowerCase = confirm('Do you want to use lower case letters?');
			upperCase = confirm('Do you want to use upper case letters?');
			numbers = confirm('Do you want to use numbers?');
			specialChar = confirm('Do you want to use any special characters?');
		}
	}
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
	//call generatePassword function
	var password = generatePassword();
	// Set passwordText = to the textArea on index.html witht he ID of password
	var passwordText = document.querySelector('#password');
	// Update the textArea with the new password
	passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
