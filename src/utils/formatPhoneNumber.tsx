export const formatPhoneNumber = (str:any) => {
    //Filter only numbers from the input
    let cleaned = ('' + str).replace(/\D/g, '');
    
    //Check if the input is of correct
    let match = cleaned.match(/^(234|)?(\d{3})(\d{3})(\d{4})$/);
    
    if (match) {
      //Remove the matched extension code
      //Change this to format for any country code.
      let intlCode = (match[1] ? '+234 ' : '')
      return [intlCode, '(', match[2], ') ', match[3], '-', match[4]].join('')
    }
    
    return null;
  }