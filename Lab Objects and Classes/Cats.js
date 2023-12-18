function cats(array){
    let cats = []
    class Cat {
        constructor(name, age) {
          this.name = name;
          this.age = age;
        }
        meow(){console.log(`${this.name}, age ${this.age} says Meow`)}
      }

    for (let i = 0; i < array.length; i++) {
        let catData = array[i].split(' ');
        let Name, age;
        [Name,age] = [catData[0], catData[1]];
        cats.push(new Cat(Name, age));
    }
    for (const cat of cats) {
        cat.meow()
    }
}

cats(['Candy 1', 'Poppy 3', 'Nyx 2'])