let grade=prompt("enter your grade:")
grade=Number(grade)
if(grade > 85 && grade < 100){
    document.write("Excellent br")
}

else if(grade > 100){
     document.write("Error")
}
else if(grade > 75){
    document.write("Very Good <br>")
}
else if(grade > 65){
    document.write("Very <br>")
}
else if(grade > 50){
    document.write(" Accept <br>")
}
else {
    document.write(" fail <br>")
}
