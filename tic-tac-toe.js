$(document).on('ready', function() {

  var game = new TicTacToe();

  function updateMessage() {
    $('#message').text("Your turn, " + game._current_player)
  }

  $('td').click(function() {
    var space = $(this)
    var board = $('#game-board')

    if (game.isSpaceEmpty(space)) {
      if (game._current_player === "red") {
        space.addClass("red")
        if (game.checkIfGameOver(board,game._current_player)) {
          alert(game._current_player + " won!")
        } else { //keep going
        game.changePlayer()
        updateMessage()
        }
      } else {
        space.addClass("blue")
        if (game.checkIfGameOver(board,game._current_player)) {
          alert(game._current_player + " won!")
        } else { //keep going
        game.changePlayer()
        updateMessage()
        }
    }
  }})
})

function TicTacToe() {
  this._current_player = "blue"
  this._message = $('#message').text("Your turn, " + this._current_player)

  this.changePlayer = function() {
    if (this._current_player === "blue") {
      this._current_player = "red"
    } else {
      this._current_player = "blue"
    }
  }

  this.isSpaceEmpty = function(td) {
    if (td.hasClass('red') || td.hasClass('blue')) {
      return false
    } else {
      return true
    }
  }

  this.checkIfGameOver = function(board, color) {
    var won = false
    if(board.find('#space-1').hasClass(color) && board.find('#space-2').hasClass(color) && board.find('#space-3').hasClass(color)) {
      won = true
    } else if (board.find('#space-1').hasClass(color) && board.find('#space-4').hasClass(color) && board.find('#space-7').hasClass(color)) {
      won = true
    } else if (board.find('#space-1').hasClass(color) && board.find('#space-5').hasClass(color) && board.find('#space-9').hasClass(color)) {
      won = true
    } else if (board.find('#space-4').hasClass(color) && board.find('#space-5').hasClass(color) && board.find('#space-6').hasClass(color)) {
      won = true
    } else if (board.find('#space-7').hasClass(color) && board.find('#space-8').hasClass(color) && board.find('#space-9').hasClass(color)) {
      won = true
    } else if (board.find('#space-2').hasClass(color) && board.find('#space-5').hasClass(color) && board.find('#space-8').hasClass(color)) {
      won = true
    } else if (board.find('#space-3').hasClass(color) && board.find('#space-6').hasClass(color) && board.find('#space-9').hasClass(color)) {
      won = true
    } else if (board.find('#space-3').hasClass(color) && board.find('#space-5').hasClass(color) && board.find('#space-7').hasClass(color)) {
      won = true
    }
    return won;
  }
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
