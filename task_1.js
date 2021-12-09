function objectOwnKeys (obj) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log(`key: ${key}; value: ${obj[key]}`)
        }
    }
}


const person = {
    city: "Moscow",
}

const student = Object.create(person);
student.ownCity = "Piter";

objectOwnKeys(student);
