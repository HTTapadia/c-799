array1=[]

function submit(){
    var name_1=document.getElementById("student_1").value;
    var name_2=document.getElementById("student_2").value;
    var name_3=document.getElementById("student_3").value;
    var name_4=document.getElementById("student_4").value;
    var name_5=document.getElementById("student_5").value;


    array1.push(name_1);
    array1.push(name_2);
    array1.push(name_3);
    array1.push(name_4);
    array1.push(name_5);

    document.getElementById("names").innerHTML=array1;
    console.log(array1);
    document.getElementById("button_submit").style.display="none";
    document.getElementById("button_sort").style.display="inline-block";
}

function sort(){
    array1.sort();
    document.getElementById("names").innerHTML=array1;
    console.log(array1);
}