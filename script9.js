//parse the data to becomes a Javascript objects
var peopleObj = JSON.parse(data);

var pObjFL = [];
var pObj;
var ctMajor = [];
var dsMajor = [];
var mkMajor = [];
var pgMajor = [];
var listMorning = "";
var listAfternoon = "";

//push obj of all major in each array allow each major
for(var i = 0; i < peopleObj.length; i++){
    if(peopleObj[i].major == "content"){
        ctMajor.push(peopleObj[i]);
    }
    if(peopleObj[i].major == "design"){
        dsMajor.push(peopleObj[i]);
    }
    if(peopleObj[i].major == "marketing"){
        mkMajor.push(peopleObj[i]);
    }
    if(peopleObj[i].major == "programming"){
        pgMajor.push(peopleObj[i]);
    }
}

//Sorting all major in ascending order
ctMajor.sort(function(a, b) {return parseInt(a.interviewRef.substring(2,4)) - parseInt(b.interviewRef.substring(2,4));});
dsMajor.sort(function(a, b) {return parseInt(a.interviewRef.substring(2,4)) - parseInt(b.interviewRef.substring(2,4));});
mkMajor.sort(function(a, b) {return parseInt(a.interviewRef.substring(2,4)) - parseInt(b.interviewRef.substring(2,4));});
pgMajor.sort(function(a, b) {return parseInt(a.interviewRef.substring(2,4)) - parseInt(b.interviewRef.substring(2,4));});

document.getElementById("nameInput").addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("search").click();
    }
});

function toTopOfPage(){
    $('html, body').animate({ scrollTop: 0 }, 'slow');
}
function ctShow(){
    clearShow();
    for(var i = 0; i < 25; i++){
        listMorning += "<p>" + ctMajor[i].interviewRef + " " + ctMajor[i].firstName + " " + ctMajor[i].lastName + "</p>";
    }
    for(var i = 25; i < ctMajor.length; i++){
        listAfternoon += "<p>" + ctMajor[i].interviewRef + " " + ctMajor[i].firstName + " " + ctMajor[i].lastName + "</p>";
    }
    document.getElementById("list-name-morning").innerHTML = listMorning;
    document.getElementById("list-name-afternoon").innerHTML = listAfternoon;
    document.getElementById("list-box").style.height = "1500px";
    document.getElementById("list-box-morning").style.height = "79%";
    document.getElementById("list-box-afternoon").style.height = "91%";
    document.getElementById("ct-text").style.background = '#F24C27';
    document.getElementById("ct-text-inside").style.color = "white";
}

function dsShow(){
    clearShow();
    for(var i = 0; i < 20; i++){
        listMorning += "<p>" + dsMajor[i].interviewRef + " " + dsMajor[i].firstName + " " + dsMajor[i].lastName + "</p>";
    }
    for(var i = 20; i < dsMajor.length; i++){
        listAfternoon += "<p>" + dsMajor[i].interviewRef + " " + dsMajor[i].firstName + " " + dsMajor[i].lastName + "</p>";
    }
    document.getElementById("list-name-morning").innerHTML = listMorning;
    document.getElementById("list-name-afternoon").innerHTML = listAfternoon;
    document.getElementById("list-box").style.height = "1600px";
    document.getElementById("list-box-morning").style.height = "61%";
    document.getElementById("list-box-afternoon").style.height = "91%";
    document.getElementById("ds-text").style.background = '#F24C27';
    document.getElementById("ds-text-inside").style.color = "white";
}

function mkShow(){
    clearShow();
    for(var i = 0; i < 18; i++){
        listMorning += "<p>" + mkMajor[i].interviewRef + " " + mkMajor[i].firstName + " " + mkMajor[i].lastName + "</p>";
    }
    for(var i = 18; i < mkMajor.length; i++){
        listAfternoon += "<p>" + mkMajor[i].interviewRef + " " + mkMajor[i].firstName + " " + mkMajor[i].lastName + "</p>";
    }
    document.getElementById("list-name-morning").innerHTML = listMorning;
    document.getElementById("list-name-afternoon").innerHTML = listAfternoon;
    document.getElementById("list-box").style.height = "1600px";
    document.getElementById("list-box-morning").style.height = "55%";
    document.getElementById("list-box-afternoon").style.height = "93%";
    document.getElementById("mk-text").style.background = '#F24C27';
    document.getElementById("mk-text-inside").style.color = "white";
}

function pgShow(){
    clearShow();
    for(var i = 0; i < 23; i++){
        listMorning += "<p>" + pgMajor[i].interviewRef + " " + pgMajor[i].firstName + " " + pgMajor[i].lastName + "</p>";
    }
    for(var i = 23; i < pgMajor.length; i++){
        listAfternoon += "<p>" + pgMajor[i].interviewRef + " " + pgMajor[i].firstName + " " + pgMajor[i].lastName + "</p>";
    }
    document.getElementById("list-name-morning").innerHTML = listMorning;
    document.getElementById("list-name-afternoon").innerHTML = listAfternoon;
    document.getElementById("list-box").style.height = "2000px";
    document.getElementById("list-box-morning").style.height = "55%";
    document.getElementById("list-box-afternoon").style.height = "93%";
    document.getElementById("pg-text").style.background = '#F24C27';
    document.getElementById("pg-text-inside").style.color = "white";
}
ctShow();
//clear all function when click on another major
function clearShow(){
    listMorning = "";
    listAfternoon = "";
    document.getElementById("ct-text").style.background = 'rgb(243, 243, 243)';
    document.getElementById("ct-text-inside").style.color = "#0f0f0f";
    document.getElementById("ds-text").style.background = 'rgb(243, 243, 243)';
    document.getElementById("ds-text-inside").style.color = "#0f0f0f";
    document.getElementById("mk-text").style.background = 'rgb(243, 243, 243)';
    document.getElementById("mk-text-inside").style.color = "#0f0f0f";
    document.getElementById("pg-text").style.background = 'rgb(243, 243, 243)';
    document.getElementById("pg-text-inside").style.color = "#0f0f0f";
}


function searchName(){
    var results = [];
    var input = document.getElementById("nameInput").value;
    var resultName = "<h5>ไม่พบรายชื่อที่ค้นหา</h5>";
    var english = /^[A-Za-z0-9]*$/;
    var boxHeight = 0;
    var resultHeight = 0;
    if(input.length > 0){
        if(!(english.test(input))){
            for(var i = 0; i < peopleObj.length; i++) {
                for(key in peopleObj[i]) {
                    if(peopleObj[i][key].indexOf(input)!=-1) {
                        results.push(peopleObj[i]);
                        resultName = "";
                    }
                }
            }
            if(results.length >= 1){
                for(var j = 0; j < results.length; j++){
                    resultName += "<h5>" + results[j].firstName + " " + results[j].lastName + " สาขา " + results[j].major + "</h5>";
                }
                boxHeight = 145 + (40 * (results.length - 1)) - (3.9 * (results.length - 1));
                resultHeight = (40 * results.length) - (3.9 * (results.length - 1));
                document.getElementById("search-box").style.height = boxHeight + "px";
                document.getElementById("search-result").style.height = resultHeight + "px";
                document.getElementById("search-result").style.background = "white";
                document.getElementById("search-result-text").innerHTML = resultName;
            }
            else{
                document.getElementById("search-box").style.height = "145px";
                document.getElementById("search-result").style.height = "40px";
                document.getElementById("search-result").style.background = "white";
                document.getElementById("search-result-text").innerHTML = resultName;
            }
        }
        else if(english.test(input)){
            document.getElementById("search-box").style.height = "145px";
            document.getElementById("search-result").style.height = "40px";
            document.getElementById("search-result").style.background = "white";
            document.getElementById("search-result-text").innerHTML = resultName;
        }
    }
    else{
        document.getElementById("search-box").style.height = "100px";
        document.getElementById("search-result").style.height = "0";
        document.getElementById("search-result-text").innerHTML = "";
    }
}
function clearName(){
    document.getElementById("search-box").style.height = "100px";
    document.getElementById("search-result").style.height = "0";
    document.getElementById("nameInput").value = "";
    document.getElementById("search-result-text").innerHTML = "";
}