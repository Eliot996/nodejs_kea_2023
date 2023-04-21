new Promise((resolve, reject) => {
    setTimeout(() => {
        try {
            throw Error;
            resolve("yaay");
        } catch {
            reject("naay");
        }
    }, 0);
})
    .then(successMessage => console.log("Success Message:",successMessage))
    .catch(failMessage => console.log("Error message:", failMessage));


function celebrate() {
    return new Promise((resolve, reject) => {
        if (Math.random < 0.5) {
            resolve("yaaay");
        } else {
            reject("naay");
        }
    });
}

// celebrate()
//     .then(  message => console.log("success:", message))
//     .catch( message => console.log("fail:",    message));

function somthingGoodSomethingBad() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random < 0.5) {
                resolve("yaaay");
            } else {
                reject("naay");
            }
        }, 1000);
    });
}
    
somthingGoodSomethingBad()
    .then(  message => console.log("success:", message))
    .catch( message => console.log("fail:",    message));

