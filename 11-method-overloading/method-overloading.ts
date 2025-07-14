class FormHelper  {

    fillInput(selector:string,value:string):void
    fillInput(selector:string,value:number):void

    fillInput(selector : string , value : string | number) :void{

        if(typeof value==="string"){
            console.log(`Filling input at ${selector} with text: ${value}`)
        }

        else{
            console.log(`Filling input  at ${selector} with number: ${value}`)
        }
    }
}


const form = new FormHelper()

//form.fillInput("username","rajat")
form.fillInput("username",28)