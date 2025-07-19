interface ApiResponse<T>{
    status : number
    data :T
}

const userResponse: ApiResponse<{name:string;age:number}>={
    status:200,
    data: {
        name:"Rajat",
        age:34
    }
}

