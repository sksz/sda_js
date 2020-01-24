const growJSskill = function () {
    this.JSskill = this.JSskill + 1
}

const makePerson = function (name, initalSkill) {
    return {
        name: name,
        JSskill: initalSkill,
        growJSskill: growJSskill
    }
}

const me = makePerson('Norbert', 100)

const brothers = []

for (let i = 0; i < 100; i++) {
    brothers[i] = makePerson(i, 0)
}
console.log(brothers)