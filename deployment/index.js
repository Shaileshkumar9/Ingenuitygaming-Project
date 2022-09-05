let message="this is module";
let display=(name)=>{
    reurn `welcome to InGENUITY`;
};
class employ{
    constructor(name,id,designation)
    {
        this.name=name;
        this.id=id;
        this.designation=designation;
    }
    displayDetails()
    {
        console.log(`employname ${this.name}`);
        console.log("");
}
}
export {message,employ};
