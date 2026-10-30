function bingo(ticket, win){
  let miniWins = 0;

  for (let i = 0; i < ticket.length; i++) {
    let str = ticket[i][0];
    let code = ticket[i][1];
    let hasWin = false;

    for (let j = 0; j < str.length; j++) {
      if (str.charCodeAt(j) === code) {
        hasWin = true;
        break;
      }
    }

    if (hasWin) {
      miniWins++;
    }
  }

  if (miniWins >= win) {
    return 'Winner!';
  } else {
    return 'Loser!';
  }
}
