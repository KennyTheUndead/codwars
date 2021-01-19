function uniqueInOrder (iterable){
  let arr = [];
  let a = ""
  for (let i in iterable) {
    if (!(iterable[i] == a)) {
    arr.push(iterable[i])
    a = iterable[i]
      } else continue
  } return arr;
};


// Возвращает список элементов без каких-либо элементов с одинаковым значением рядом друг с другом и с сохранением исходного порядка элементов.
