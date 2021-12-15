const res = document.querySelector(".result");
const key = document.querySelectorAll(".key");

let oper = (x,y) => {
    cha = true
    lestChar = res.innerText[res.innerText.length -1];
    if (x.includes(y) && x.includes(lestChar)){

        cha = false;
        console.log(x.includes(y))

    }
    if (res.innerText.length === 16){
        cha = false;
    }
}

let handle = (x,y) => {
    momo = true;
    if (x.includes(lestChar)){
        momo = false
    }
    if (res.innerText === ""){
        momo = false;
        res.innerText = 0
    }
}

let contronSize = () => {
    let main = res.innerText.length
    if (main === 6){
        res.classList.add("six")
    }
    else if (main === 8 ){
        res.classList.remove("six");
        res.classList.add("seven")
    }
    else if (main === 10 ){
        res.classList.remove("seven");
        res.classList.add("eight")
    }else if(main === 12){
        res.classList.remove("eight");
        res.classList.add("nine")
    }
}

let countDele = () => {
    let deleSystem = res.innerText.length
    con = true;
    if (deleSystem === 0 || deleSystem === 1){
        con = false;
        console.log("i am in")
        res.innerText = 0
    };
}

let lom = (x,y) => {
    if(y.includes(x.innerHTML)){
        return
    }
    if(res.innerText === "0" && x.innerHTML != "."){
        res.innerHTML = ""
    };
}


/*Main SysTem*/
key.forEach(el => {
    el.addEventListener(("click"),e=> {
        let tool = ["÷","×","−","+","%"];
        let rTool = ["/","*","-","+","%"];

        lom(el,tool);

        oper(tool,el.innerHTML);

        if(el.innerHTML === "AC"){
            res.innerText = "0"
        }
        else if(el.innerHTML === "C"){
            countDele()
            if (con){
                let b = res.innerHTML.substr(0,res.innerHTML.length - 1)
                res.innerHTML = b;
            }
        }
        else if (el.innerHTML === "="){
            handle(tool,rTool);
            if (momo){
                for (let x in res.innerText) {
                    let char = res.innerText[x];
                    tool.map((el,i) => {
                        if (char == el){
                            res.innerText = res.innerText.replace(char,rTool[i]);
                        }
                    })
                }
                res.innerText = eval(res.innerText);
                console.log("hello");
            }
        }
        else if(cha){
            res.innerHTML += el.innerHTML
        };

        contronSize()
    })
})


