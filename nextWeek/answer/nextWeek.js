function nextWeek(date) {
  const mydate = new Date(date);
  mydate.setDate(mydate.getDate() + 7);
  return mydate;
}

console.log(nextWeek(new Date('2010-01-16')));
