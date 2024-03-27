
function createcard(title, cName, views, duration, dateold, img) {
    let viewsStr;
    if (views < 1000000) {
        viewsStr = views / 1000 + "K"
    }
    else if (views > 1000000) {
        viewsStr = views / 1000000 + "M"
    }
    else {
        viewsStr = views / 1000 + "K"
    }
    let html = ` 
<div class="container">
<div class="card">
<img src="${img}"
 alt="" srcset="">
 <div class="time">
              ${duration} 
          </div>
 <div class="text">
     <h3>${title}</h3>
     <p>${cName} . ${viewsStr} views . ${dateold} months ago</p>

 </div>
</div>
</div> `

    document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html
}


createcard("Building a Stunning Website from Scratch with HTML, CSS, and JavaScript", "uk", 3300, "12:36", 5, "https://i.ytimg.com/vi/08X_IDggCog/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCMnE1O5gbvAVlpQYgWLEafdyECaQ")