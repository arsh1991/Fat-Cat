var Component=require('./Component.js');

module.exports =  class Leaf extends Component {
    constructor(description, price) {
        super()
        this.description = description
        this.price = price
    }

    printDescription (){
        console.log(this.description+" "+this.price);
    }
}