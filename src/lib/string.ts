export const getGreetingsNow = () => {
  const currentHour = new Date().getHours()
  if (currentHour >= 5 && currentHour < 12) {
    return "Good morning"
  }
  if (currentHour >= 12 && currentHour < 18) {
    return "Good afternoon"
  }
  return "Good evening"
}

export const firstLetterToUpperCase = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}
