console.log("Yo")
document.getElementById("body").style.backgroundColor = "rgb(34,34,34)";
console.log("Yo");
    var r = () => {
    var r = 0,
        g = 0,
        b = 0;
    for (b = 0; b <= 3; b++) {
        console.log("b" + b)
        if (b == 3) {
            g++;
            console.log("g" + g);
            b = 0;
        }
        if (g == 3) {
            r++;
            console.log("r" + r);
            g = 0;
        }
        if (r == 3) { return;}
    }
}
r();