function add(a, b) {
    return a + b;
}

let result = add(20, 40);

alert("Addtion 20 + 40 = " + result);

function product(x, y) {
    return x * y;
}

let final = product(5, 5);

console.log(Notification.permission);
if (Notification.permission === "granted") {
    alert("Notification: Product: 5 * 5 = " + final);
} else if (Notification.permission !== "denied") {
    Notification.requestPermission().then(permission => {
        console.log(permission);
    });
}