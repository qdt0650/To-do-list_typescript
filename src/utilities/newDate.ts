export const newDate = () => {
   // 현재 날짜를 구합니다
   const currentDate = new Date()

   const year = currentDate.getFullYear()
   const month = (currentDate.getMonth() + 1).toString()
   const day = currentDate.getDate().toString()
   const hours = currentDate.getHours().toString()
   const minutes = currentDate.getMinutes().toString()
   const seconds = currentDate.getSeconds().toString()

   return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')} ${hours.padStart(2, '0')}:${minutes.padStart(2, '0')}:${seconds.padStart(2, '0')}`
}
