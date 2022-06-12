const getMonth = (callback) => {
    setTimeout(()=>{
        let error = false
        let month = ['January', 'Febuary', 'March', 'April', 'May', 'Juni', 'July', 
        'August', 'September', 'October', 'November', 'Desember'];
        if(!error){
            callback(null, month);
        }else{
            callback(new Error('Sorry Data Not Found'));
        }
    }, 4000);
};

function showMonth(parameterKosong, parameter2) {
    let result = parameter2.map((item,i)=> {return `Bulan ke-${i+1} : ${item} `}).join("\n");
    console.log(result);  
}
getMonth(showMonth);
