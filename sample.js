
monogdb 

methods 

find => 
    find 
    findOne
    populate 
    aggerate
          operators 
                    link
                    group
                    sort 

let user = new shema ({
    userid:{
        type:"string" //monog objectId
    }

})

let section = {
    teacher :id, //objectId
    ref:"user"
}


section.aggerate([
    {
        
    }
])
