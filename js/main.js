const unames= ["Abheesht","Tanya","Neekita"];
const passes= ["Fshot11","Anshi53","FoodBurgerSleep"];

function login()
{

var f=0;
var pos=0;
for(let i=0;i<3;i++)
{
if(document.getElementById("uname").value==unames[i])
{
f=1;
pos=i;
break;
}
}

if(f==0)
{
document.getElementById("error").innerHTML= "Username doesn't exist";
}

if(f==1)
{
if(document.getElementById("pass").value==passes[pos])
{
location.href="html/logins.html";
}
else
{
document.getElementById("error").innerHTML= "Password isn't correct";
}
}

}






















