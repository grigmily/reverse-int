module.exports = function reverse (n) {
   let array = n.split('');
   array.reverse();
   return array.join().replace(',','');
}
