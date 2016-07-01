$(document).on('ready', function() {

  var game = new TicTacToe();

  function updateMessage() {
    $('#message').text("Your turn, " + game._current_player)
  }

  $('td').click(function() {
    var space = $(this)
    var board = $('#game-board')

    if (game.isSpaceEmpty(space)) {
      if (game._current_player === "Player 2") {
        space.addClass("player_2")
        if (game.checkIfWon(board,game._current_player)) {
          alert(game._current_player + " won!")
        } else {
        game.changePlayer()
        updateMessage()
        }
      } else {
        space.addClass("player_1")
        if (game.checkIfWon(board,game._current_player)) {
          alert(game._current_player + " won!")
        } else {
        game.changePlayer()
        updateMessage()
        }
    }
  }})
})

function TicTacToe() {
  this._current_player = "Player 1"
  this._message = $('#message').text("Your turn, " + this._current_player)

  this.changePlayer = function() {
    if (this._current_player === "Player 1") {
      this._current_player = "Player 2"
    } else {
      this._current_player = "Player 1"
    }
  }

  this.isSpaceEmpty = function(td) {
    if (td.hasClass('player_2') || td.hasClass('player_1')) {
      return false
    } else {
      return true
    }
  }

  this.checkIfWon = function(board, player) {
    var won = false
    if(board.find('#space-1').hasClass(player) && board.find('#space-2').hasClass(player) && board.find('#space-3').hasClass(player)) {
      won = true
    } else if (board.find('#space-1').hasClass(player) && board.find('#space-4').hasClass(player) && board.find('#space-7').hasClass(player)) {
      won = true
    } else if (board.find('#space-1').hasClass(player) && board.find('#space-5').hasClass(player) && board.find('#space-9').hasClass(player)) {
      won = true
    } else if (board.find('#space-4').hasClass(player) && board.find('#space-5').hasClass(player) && board.find('#space-6').hasClass(player)) {
      won = true
    } else if (board.find('#space-7').hasClass(player) && board.find('#space-8').hasClass(player) && board.find('#space-9').hasClass(player)) {
      won = true
    } else if (board.find('#space-2').hasClass(player) && board.find('#space-5').hasClass(player) && board.find('#space-8').hasClass(player)) {
      won = true
    } else if (board.find('#space-3').hasClass(player) && board.find('#space-6').hasClass(player) && board.find('#space-9').hasClass(player)) {
      won = true
    } else if (board.find('#space-3').hasClass(player) && board.find('#space-5').hasClass(player) && board.find('#space-7').hasClass(player)) {
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
