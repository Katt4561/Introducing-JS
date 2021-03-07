function list(a) {
    for (let i = 0; i < a; i++){
        if (i==13) {
            console.log('Тринадцать')
        }
        else if (i==5){
            console.log('Пять')
        }
        else if (i == 22) {
            
            console.log('Двадцать два')
        }
        else if (i==35){
            console.log('Тридцать пять')
        }
        else if (i==98){
            console.log('Девяносто восемь')
        }
        else {
            console.log(i)
        }
    }

}

list(100)