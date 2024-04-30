export function isoDateFormat(date) {
    const dateFormatted = new Date(date)
    const today = new Date()
   
    if (today.getFullYear() - dateFormatted.getFullYear() > 0) {
      console.log(today.getFullYear() - dateFormatted.getFullYear())
      return `${today.getFullYear() - dateFormatted.getFullYear()} years ago`
    } else if (today.getMonth() - dateFormatted.getMonth() > 0) {
      console.log(today.getMonth() - dateFormatted.getMonth() )
      return `${today.getMonth() - dateFormatted.getMonth()} months ago`
    } else if (today.getDate() - dateFormatted.getDate() > 0) {
      console.log(today.getDate() - dateFormatted.getDate()  )
      return `${today.getDate() - dateFormatted.getDay()} days ago`
    } else {
      return 'today'
    }
  }