//Чтобы узнать тип объекта
(function getClass(obj) {
  return {}.toString.call(obj).slice(8, -1);
  
}());
