class Hero {
    constructor(name, age, type) {
        this.name = name;
        this.age = age;
        this.type = type;
    }
    atack() {

        let atk = ""
        if (this.type === "ninja") {
            atk = "shuriken"
        } else if (this.type === "guerreiro") {
            atk = "espada"
        } else if (this.type === "mago") {
            atk = "magia"
        } else if (this.type === "monge") {
            atk = "artes marciais"
        }

        console.log(`O ${this.type} atacou usando ${atk}`)
    }
}

const myHero = new Hero("Tina", 34, "guerreiro");
console.log(myHero.atack())