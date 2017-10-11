var Component=require( "./Component.js");


module.exports = class Composite extends Component {
    constructor(description) {
        super()
        this.description = description
        this.components = []
    }

    printDescription (){
        console.log(this.description)
        for(var i in this.components)
            this.components[i].printDescription()
    }

    addChild (Component){
        this.components.push(Component)
    }

    removeChild (Component){
        for(var i in this.children)
            if(this.components[i] === Component)
                this.components.splice(i, 1)
    }

    getChild (key){
        return this.components[key]
    }
}



	