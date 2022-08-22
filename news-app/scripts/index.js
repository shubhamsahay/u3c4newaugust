/*
Save the user to local storage with key "user", in following format:- 
{
name: "",
image: "",
email: "",
country: "" (store country code "in", "ch", "nz", "us", "uk")
}
*/
import navbar from "../component/navbar.js";
document.querySelector("#navbar").innerHTML=navbar()



function ss(n,i,e,c){
    this.name=n;
    this.image=i;
    this.email=e;
    this.country=c;
}

function savedata(e){
    e.preventDefault();

    let form=document.getElementById("user-form");
    let name=form.name.value;
    let image=form.image.value;
    let email=form.email.value;
    let country=form.country.value;
    let sss=new ss(name,image,email,country);
    let data = JSON.parse(localStorage.getItem("user-form")) ||[];
    data.push(sss);
    localStorage.setItem("user-form",JSON.stringify(data));
    console.log(sss)
    document.getElementById("user-form").reset();

}
