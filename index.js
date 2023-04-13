function receivesAFunction(parameterCallback){
    return parameterCallback()
}

function returnsANamedFunction(){
    return function Second(){
        console.log ("Monica Rocks")
}
    }

function returnsAnAnonymousFunction(){
    return function(){
    
    }

}