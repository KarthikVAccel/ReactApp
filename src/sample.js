
let arrow1 = async() =>{
    // data1() // intial state
    // .then(response=>{ 
    //     // promise fulfuiled
    // })
    // .catch(e=>{
    //     console.log("error",e) // error
    // })
    // .finally(()=>{

    // })
    try{
        let data = await data1()
        let data2 = await data1()
        let data3 = await data1()
        let data4 = await data1()
    }
    catch(e){
        console.log("error",e)
    }
}

