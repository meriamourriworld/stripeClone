let solution_submenu = document.querySelector(".submenu-solutions");
let solution = document.querySelector("#solutions");

solution.addEventListener("mouseover", ()=>
{
    solution_submenu.style = "visibility: visible; opacity: 1;";
});

solution.addEventListener("mouseout", ()=>
{
    solution_submenu.style = "visibility: hidden";
});


/**************Services Animation**********************/

let services_text = document.querySelector(".services-text");
let services_illustration = document.querySelector(".services-path");
window.addEventListener("scroll", ()=>
{
    
    var distInView = services_text.getBoundingClientRect().top - window.innerHeight + 20;
        if (distInView < 0) {
            services_text.classList.add("fade-left");
            services_illustration.classList.add("fade-right");
            const elements = document.querySelectorAll(".path");
            elements.forEach((el)=>el.style="background-color:white;opacity:.6;transform:scale(.9)");


          
            /*********---------Animation Show off--------------- */            
            setInterval(()=>{
                let col1 = `rgba(${Math.floor(Math.random()* (255-1) +1)},${Math.floor(Math.random()* (255-1) +1)},${Math.floor(Math.random()* (255-1) +1)},78)`;
                //Setting All services in white

                const element1 = document.querySelector(`.path${Math.floor(Math.random()* (12-1) +1)}`);
                //Changing colors and scaling of Selected paths
                element1.style = `color: ${col1};transform:scale(1.2);opacity:1;`;
            } ,5000)


        } else {
           
            services_text.classList.remove("fade-left");
            services_illustration.classList.remove("fade-right");
        }
});
/**************Hover on chevron right**********************/
let btnDoc = document.querySelector(".btn-doc");
let btnHamConnexion = document.querySelector(".ham-submenu-connexion");
let btnDemarrer = document.querySelector(".description a:first-of-type");
let rightArr = document.createElement("i");
let chevron = document.createElement("i");
rightArr.classList.add("fa-solid","fa-arrow-right");
chevron.classList.add("fa-solid","fa-chevron-right");
btnDoc.addEventListener("mouseover", ()=>
{
    btnDoc.children[0].remove();
    btnDoc.appendChild(rightArr);
});
btnDemarrer.addEventListener("mouseover", ()=>
{
    btnDemarrer.children[0].remove();
    btnDemarrer.appendChild(rightArr);
});
btnHamConnexion.addEventListener("mouseover", ()=>
{
    btnHamConnexion.children[0].remove();
    btnHamConnexion.appendChild(rightArr);
});
btnDoc.addEventListener("mouseout", ()=>
{
    btnDoc.children[0].remove();
    btnDoc.appendChild(chevron);
});
btnDemarrer.addEventListener("mouseout", ()=>
{
    btnDemarrer.children[0].remove();
    btnDemarrer.appendChild(chevron);
});
btnHamConnexion.addEventListener("mouseout", ()=>
{
    btnHamConnexion.children[0].remove();
    btnHamConnexion.appendChild(chevron);
});
/**************Show ham submenu**********************/
let ham_menu = document.querySelector(".ham-menu");
let close_ham = document.querySelector(".ham-btn-close");
let ham_submenu = document.querySelector(".ham-submenu");
close_ham.addEventListener("click", ()=>
{
    ham_submenu.style = "display: none;"
});
ham_menu.addEventListener("click", ()=>
{
    ham_submenu.style = "display: block;"
});