var stroke = true

function init(){
	var board = document.getElementById("board")
	board.addEventListener("click", 
      function (e) {
        var target = (e || window.event).target
        if (target.tagName in {TD:1, TH:1})
          target.setAttribute('class', stroke ? 'X' : 'O')
          stroke = !stroke
		}
	, false)
}

window.addEventListener('load',init,false) 