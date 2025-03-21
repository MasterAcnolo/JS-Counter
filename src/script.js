function countToTen(){
    var count = 0;
    const NUMBER = 100; // Number of repetitions, change it to write more INT Number

    while (count < NUMBER ){ 
        document.getElementById("theCount").innerHTML += count + "<br>"; 
    }
}