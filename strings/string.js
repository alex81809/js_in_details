var text = "I like to watch movies"

var position = text.search("movies")
document.getElementById("result").innerHTML = position

var replace = text.replace("like, hate")
document.getElementById("result2").innerHTML = replace

var x = 10
var y = 20

var result = x + y
document.getElementById("result3").innerHTML = result

var a = 10
var b = 10

var calculation = String(a) + String(b)
document.getElementById("result4").innerHTML = calculation
