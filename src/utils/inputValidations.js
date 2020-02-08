// EMAIL VALIDATION RULES
// * exclude anything except letters, numbers, and ( . - ) before the @
// * allow pretty much anything except spaces between the @ and the . (for .com, etc.)
// * length after the . (as in .com) needs to be 2 chars. no numbers, or symbols

// It's important to note that this probably WON'T catch everything,
// but it should catch most bad addresses.

export function validateEmail(value) {
  const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailRegex.test(value);
}
