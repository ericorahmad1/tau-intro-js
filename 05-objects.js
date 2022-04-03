const cookie = {
    name: "Chocolate chip",
    isGlutenFree: false,
    eatCookie: function (){
        console.log("I am eating "+ this.name);
    }
};

cookie.name = "Chip Chocolate";
cookie.isGlutenFree = true;

class Cookie{
    constructor(name, isGlutenFree){
        this.name = name;
        this.isGlutenFree = isGlutenFree;
    }

    eatCookie(){
        console.log("I am eating " + this.name);
    }
}
const myCookie = new Cookie("Iced Oatmeal", false);

myCookie.eatCookie();

