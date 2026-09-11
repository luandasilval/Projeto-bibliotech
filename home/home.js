const menu = document.getElementById("menu");  //pegando o elemneto pelo ID

//estamos pegando o elemento de forma gernerica, pode ser classe (precisa trazer o ponto) ou pode ser id(precisa trazer a hashtag)
const navMenu = document.querySelector(".navegacao"); 

menu.addEventListener("click", function() {
    if(navMenu.className =="navegacao")
    {
        navMenu.className = "navegacao ativo"
    }

    else
    {
        navMenu.className = "navegacao"
    }
})

//opção igual, arrow function=> função lambda
//menu.addEventListener("click",() => {})
