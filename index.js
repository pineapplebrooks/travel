function createDates(month, numDays, counter) {

    const cont = document.getElementById(month);

    let count = counter;

    for (let x = 2; x <= numDays; x++) {

        let date = document.createElement("p");
        date.setAttribute("class", "day");
        date.setAttribute("style", "grid-area: " + count + " / 1");
        date.textContent = "" + x + "";

        cont.appendChild(date);
        count++;
    }
}

createDates("may", 31, 7);
createDates("june", 30, 2);
createDates("july", 31, 2);
createDates("august", 31, 2);
