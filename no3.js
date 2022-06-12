// // 1
// const availableShop = (shop) =>{
//     return new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             const shopStore = ['clothes', 'vape', 'gaming', 'cosmetic', 'food'];
//             let findShopStore = shopStore.find((item)=>{
//                 return item === shop;
//             });
//             if(findShopStore){
//                 resolve(`${findShopStore}`); //terpenuhi 
//             }else{
//                 reject(new Error('this shop is unavailable')); //gagal
//             }
//         }, 5000);
//     });
// };


//then catch
// availableShop("gaming").then((findShopStore) => {
//     console.log(`${findShopStore} store is available at mall`);
// }).catch((err)=>{
//     console.log(`${err}`);
// }).finally(() => {
//     console.log("program done, thankyou");
// })



//try catch
// const tokoShopping = async (findShopStore) => {
//     try {
//         const result = await availableShop(findShopStore);
//         console.log(`${result} store is available at mall`);
//     } catch (error) {
//         console.log(`${error}`);
//     }
// }
// tokoShopping("food");

// 2 
const mainColor = (checkColor) =>{
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            const color = ['red', 'green', 'blue'];
            let findMainColor = color.find((item)=>{
                return item === checkColor;
            });
            if(findMainColor){
                resolve(`${findMainColor}`); //terpenuhi 
            }else{
                reject(new Error('this is not the main color')); //gagal
            }
        }, 5000);
    });
};

// mainColor('red').then((findMainColor) => {
//     console.log(`${findMainColor} is the main color`);
// }).catch((err)=>{
//     console.log(`${err}`);
// }).finally(() => {
//     console.log("program done, thankyou");
// })

const importantColor = async (findMainColor) => {
    try {
        const result = await mainColor(findMainColor);
        console.log(`${result} is the main color`);
    } catch (error) {
        console.log(`${error}`);
    }
}
importantColor("red");
