 

let cats = ["Milo", "Otis", "Garfield"];


destructivelyAppendCat= (name)=> cats.push(name);
  
destructivelyPrependCat = (name) => cats.unshift(name);
  
destructivelyRemoveLastCat = () => cats.pop();
  
destructivelyRemoveFirstCat = () => cats.shift();
  
appendCat = (name) => {
    const newCats = [...cats, name];
    return newCats;
  }
  
prependCat = (name) => {
    const newCats = [name, ...cats];
    return newCats;
  }
  
removeLastCat = () => {
    const newCats = cats.slice(0, -1);
    return newCats;
  }
  
removeFirstCat = () => {
    const newCats = cats.slice(1);
    return newCats;
  }
  