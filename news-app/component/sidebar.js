function sidebar(){
    return `function append (){
        let data= json.parse(localStorege.getItem("user-form"))||[];
        let allnews=document.getElementById("show_news");
        allnews.innerHTML=null;

        data.forEach(function(el,index){
            let div=document.createElement("div");
            let img=document.createElement("img");
            img.src=el.image;
            let p=document.createElement("p");
            p.innerText=el.name;
            let p1=document.createElement("p");
            p1.innerText=el.email;
            let p2=document.createElement("p");
            p2.innerText=el.country;
            div.append(img,p,p1,p2);
            show_news.append(div)

        });
    }
    append()`
}
export default sidebar

