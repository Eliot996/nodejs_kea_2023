const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };


function calculateBirthdays() {
    const birthday = document.getElementById("birthday").valueAsDate;
    
    const formatter = new Intl.DateTimeFormat("en-US", options);
    const list = document.getElementById("birthdayslist");

    for (let i = 1; i <= 100; i++) {
        const date = birthday.addYear(i);
        const element = document.createElement("li");
        element.innerHTML = formatter.format(date);
        list.appendChild(element);
    }
}

Date.prototype.addYear = function(years) {
    const date = new Date(this.valueOf());
    date.setFullYear(date.getFullYear() + years);
    return date;
}