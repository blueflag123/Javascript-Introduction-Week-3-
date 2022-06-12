const cekHariKerja = (day) =>{
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            const dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat'];
            let cek = dataDay.find((item)=>{
                return item === day;
            });
            if(cek){
                resolve(cek); //terpenuhi 
            }else{
                reject(new Error('Hari ini bukan hari kerja')); //gagal
            }
        }, 3000);
    });
};


// then catch = Promise memiliki metode/ fungsi then dan 
//              catch yang masing-masing memiliki fungsi untuk mengolah 
//              hasil sukses dan gagal. then jika program sukses dan 
//              catch jika program tersebut error

// cekHariKerja("senin").then((cek) => {
//     console.log(`${cek} adalah hari kerja`);
// }).catch((err)=>{
//     console.log(`${err}`);
// }).finally(() => {
//     console.log(`program telah selesai dijalankan`)
// })


// try catch = Merupakan metode/ fungsi yang tersedia di versi terbaru JS
//             sama dengan then catch hanya saja di async await menggunakan
//             try catch yaitu try jika program sukses dan catch ketika 
//             program gagal. Dan finally yang men cek ketika program selesai
//             entah itu gagal atau sukses

// const getHariKerja = async (cek) => {
//     try {
//         const result = await cekHariKerja(cek);
//         console.log(`${result} adalah hari kerja`);
//     } catch (error) {
//         console.log(`${error}`);
//     }
// }
// getHariKerja("kamis");


