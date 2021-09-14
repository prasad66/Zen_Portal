var i=10;
var countdown = document.getElementById("new")
function print(){
    if(i === 0){
        // console.log("Happy Independence Day")
        countdown.innerText="Happy Independence Day!!!!";
    }
    else{
        countdown.innerText=i;
        // console.log(i);
        i--;
    }
    
}

setTimeout(() => {
    print()
    setTimeout(() => {
        print()
        setTimeout(() => {
            print()
            setTimeout(() => {
                print()
                setTimeout(() => {
                    print()
                    setTimeout(() => {
                        print()
                        setTimeout(() => {
                            print()
                            setTimeout(() => {
                                print()
                                setTimeout(() => {
                                    print()
                                    setTimeout(() => {
                                        print()
                                        setTimeout(() => {print() }, 1000)
                                    }, 1000)
                                }, 1000)
                            }, 1000)
                        }, 1000)
                    }, 1000)
                }, 1000)
            }, 1000)
        }, 1000)
    }, 1000)
}, 1000);
