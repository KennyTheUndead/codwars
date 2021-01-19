function isValidWalk(walk) {
  if (walk.length > 10 || walk.length < 4) {
    return false
  }
  
  let coor = {
    n: 0,
    s: 0,
    w: 0,
    e: 0
  };

  for (let i = 0; i < walk.length; i++) {
    coor[walk[i]] += 1;
  }
  if (((coor['n'] - coor['s']) == 0) && ((coor['w'] - coor['e']) == 0)) {
     return true
  } else return false 
}
