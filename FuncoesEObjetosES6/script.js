function main() {
  const array = [1, 2, 3, 4, 5, 6, 7, 9, 10];

  const newArray = array.map((item, index) => {
    console.log("index", index);
    //percorre o array
    return item * 2;
  });
  console.log(newArray);

  const reduce = array.reduce((total, next) => {
    return total + next;
  });
  console.log(reduce);

  const filter = array.filter((item) => {
    //só mostra o item se for true
    return item % 2 === 0;
  });

  console.log(filter);

  const find = array.find((item) => {
    //retorna apenas se for true
    return item === 5;
  });
  console.log(find);
}
