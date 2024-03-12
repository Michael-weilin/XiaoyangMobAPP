function task1() {
  const length = 15;
  const width = 25;
  const area = length * width
  console.log("the floor space is ${area} square meters");
}

function task2() {
  const minutes = 197;
  const hours = Math.floor(minutes/60);
  const remainingMinutes = minutes % 60;
  console.log("${minutes} minutes becomes ${hours} hours and ${remainingMinutes} minutes.");
}

function task3() {
  const rates = 20;
  const loads = 75;
  const pay = rates * loads;
  const tax = pay * 0.15;
  const netPay = pay - tax;
  console.log("Gross pay: ${pay} Tax: ${tax} Net pay: ${netPay}.");
}

function task4() {
  const F = 89.6;
  const C = (F - 32) * 5/9;
  console.log("Fahrenheit: ${F} Celsius: ${C}");
}

function task5() {
  const validTicket = (ticketNumber) => {
    const lastDigit = ticketNumber % 10;
    const withoutDigit = Math.floor(ticketNumber / 10);
    const remainder = withoutDigit % 7;
    return remainder === lastDigit;
  };
  
  console.log("123454 is ${validTicket(123454)}");
  console.log("147103 is ${validTicket(147103)}");
  console.log("154123 is ${validTicket(154123)}");
}
