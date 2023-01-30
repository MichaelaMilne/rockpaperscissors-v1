input.onButtonPressed(Button.A, function () {
	
})
function showScoreboard () {
    OLED.clear()
    OLED.writeStringNewLine("playerA " + playerA)
    OLED.clear()
    OLED.writeStringNewLine("playerB " + playerB)
    OLED.clear()
    OLED.writeStringNewLine("\"tie\"" + tie)
    OLED.clear()
    OLED.writeStringNewLine("\"rounds\"" + rounds)
}
input.onButtonPressed(Button.AB, function () {
	
})
input.onButtonPressed(Button.B, function () {
	
})
let playerA = 0
let playerB = 0
let rounds = 0
let tie = 0
tie = 0
rounds = 0
playerB = 0
playerA = 0
OLED.init(128, 64)
OLED.writeStringNewLine("Would you like to play a game?")
basic.pause(100)
showScoreboard()
