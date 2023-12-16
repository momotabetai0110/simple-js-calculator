function calculateSalary() {
  // フォームから値を取得
  const workHours = parseFloat(document.getElementById('workHours').value);
  const monthlySalary = parseFloat(document.getElementById('monthlySalary').value);
  const bathroomTime = parseFloat(document.getElementById('bathroomTime').value);

  let result = document.getElementById("result");

  if (!isNaN(workHours) && !isNaN(monthlySalary) && !isNaN(bathroomTime)) {
    let daySalary = Math.round(monthlySalary * 10000 / 20);
    let minutesSalary = Math.round(daySalary / workHours / 60);
    let minutes_bathroom = Math.round(minutesSalary * bathroomTime);
    let monthly_bathroom = minutes_bathroom * 20;

    result.innerHTML = `あなたがトイレで稼ぐ月給は${monthly_bathroom}円です。`;
  } else {
    result.innerHTML = `真面目に入力しろや`;
  }
}