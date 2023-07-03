export function useGetWeekDate() {
  const today = new Date();

  // Obtener el mes actual (0: enero, 1: febrero, ..., 11: diciembre)
  const currentMonth = today.getMonth();

  // Obtener el año actual
  const currentYear = today.getFullYear();

  // Crear un objeto Date para el primer día del mes actual
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1);

  // Crear un objeto Date para el último día del mes actual
  const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0);

  // Array para almacenar los días del mes
  const daysOfMonth: any = [],
    arrayOfWeeks: any = [];

  // Iterar por cada día del mes
  for (
    let date = firstDayOfMonth;
    date <= lastDayOfMonth;
    date.setDate(date.getDate() + 1)
  ) {
    daysOfMonth.push(date.toString().slice(0, 15));
  }

  const getDayWeek = today.getDay();

  // Imprimir los días del mes
  daysOfMonth.forEach((day: string, i: number) => {
    if (day === today.toString().slice(0, 15)) {
      let index = 0;

      while (getDayWeek - 1 > index) {
        index++;
      }

      for (let j = 0; j < 5; j++) {
        const element = daysOfMonth[i - index + j],
          dayName = element.toString().slice(0, 3),
          dayNumber = element.toString().slice(8, 10);
        arrayOfWeeks.push({ nameDay: dayName, numberDay: dayNumber });
      }
    }
  });

  return arrayOfWeeks;
}
