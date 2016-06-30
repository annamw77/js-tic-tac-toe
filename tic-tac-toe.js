$(document).on('ready', function() {
  console.log('create and begin the game here!');

  var game = new TicTacToe();

  $('td').click(function() {
    var td = $(this)
    
    if (game._current_player === "red") {
      td.addClass("red")
      game.change_player()
    } else {
      td.addClass("blue")
      game.change_player()
    }
  })
})

function TicTacToe() {
  this._current_player = "blue"
  this._message = "Your turn, " + this._current_player

  this.change_player = function() { //adds time to the counter
    if (this._current_player === "blue") {
      this._current_player = "red"
    } else {
      this._current_player = "blue"
    }
  }
}


TicTacToe.prototype.checkCurrentPlayer = {
  // return current_player
}

TicTacToe.prototype.checkIfEmpty = {
  //if the td does NOT have a class
  //return true
  //if the td DOES have a class
  //return false
}

TicTacToe.prototype.makeMove = {
  //if checkIfEmpty is true
  //change class of TD to "x" or "o"
  //update display of TD to "x" or "o"
}

TicTacToe.prototype.checkForWin = {
  //assess if certain line-ups have the same class
  //if true, return true
  //if false, return false
  //assess for draw if all spaces are filled
}

TicTacToe.prototype.nextPlayer = {
  //if current_player = "X"
      //current_player = "O"
  //etc
}

TicTacToe.prototype.updateMessage = {
  // if won

  // or current player message
}
