function thecss() {
    document.querySelector("head").innerHTML += `
    <style>
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
    .baat{
        width: 80vw;
        margin: auto;
        margin-bottom: 20px;
        border-radius: 30px;
        background: rgba(20, 40, 230,0.3);
        padding: 20px;
        font-size: 20px;
        box-shadow: 2px 2px 12px rgb(178, 178, 178);
        font-weight: bold;
        text-align: center;
    }
    .heading{
        text-align: center;
        font-size: 20px;
        width: 90vw;
        margin: auto;
    }
    </style>
    `
}
function get_heading(heading, paragraph) {
    document.querySelector("body").innerHTML += `
    <br>
    <div class="heading">
        <h1>${heading}</h1>
        <p>${paragraph}</p>
    </div>
    `
}
function get_content(a) {
    document.querySelector("body").innerHTML += `
    <br>
    <div class="mainmain">
        
    </div>
    <br>`
    thecss()
    for(item in a){
        a1 = Math.floor(Math.random()*100)
        a2 = Math.floor(Math.random()*100)
        a3 = Math.floor(Math.random()*100)
        console.log(a1,a2,a3)
        document.querySelector(".mainmain").innerHTML += `
        <div style="background: rgba(${a1},${a2},${a3},0.5)" class="baat">
            ${parseInt(item)+1}. ${a[item]}
        </div>`
    }
}