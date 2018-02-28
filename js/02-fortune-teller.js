/*eslint-env browser*/

//----------- The Fortune Teller -----------------


function tellFortune(jobTitle, geoLocation, partnerName, children) {
    window.document.write("You will be a " + jobTitle + " in " + geoLocation + ", and married to " + partnerName + " with " + children + " kids.<br>");
}

tellFortune("mr.Putin", "Kremlin, Moscow", "mr.Medvedev", 2);
tellFortune("mr.Tequila", "Brooklin", "miss Vodka", 123);
tellFortune("Rich man", "La Jolla", "\"Give me more money\"", 3);