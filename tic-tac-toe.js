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
        if (game.checkIfWon(board,"player_2")) {
          alert(game._current_player + " won!")
        } else {
          if (game.checkIfDraw(board)) {
            alert("It's a draw!")
          }
        game.changePlayer()
        updateMessage()
        }
      } else {
        space.addClass("player_1")
        if (game.checkIfWon(board,"player_1")) {
          alert(game._current_player + " won!")
        } else {
          if (game.checkIfDraw(board)) {
            alert("It's a draw!")
          }
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

  this.checkIfDraw = function(board) {
    var draw = false
    if(board.find('#space-1').is(".player_1,.player_2") && board.find('#space-2').is(".player_1,.player_2") && board.find('#space-3').is(".player_1,.player_2")) {
      if(board.find('#space-4').is(".player_1,.player_2") && board.find('#space-5').is(".player_1,.player_2") && board.find('#space-6').is(".player_1,.player_2")) {
        if(board.find('#space-7').is(".player_1,.player_2") && board.find('#space-8').is(".player_1,.player_2") && board.find('#space-9').is(".player_1,.player_2")) {
          var draw = true
        }
      }
    }
    return draw
  } //end draw function

} //end entire thing
