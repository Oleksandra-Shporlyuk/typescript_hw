
// 1) створити інтерфейс на основі цього объекта:
//     Зверніть увагу там де масиви... в них може бути багато однотипних обїектів
interface ElonMusk {
    mission_name: string,
    launch_date_local: string,
    launch_site: {
        site_name_long: string
    },

    links: {
        article_link: string
        video_link: string
    },
    rocket: {
        rocket_name: string,
        first_stage: {
            cores: [
                {
                    flight: number
                    core: {
                        reuse_count: number
                        status: string
                    }
                }
            ]
        },
        second_stage: {
            payloads: [
                {
                    payload_type: string
                    payload_mass_kg: number
                    payload_mass_lbs: number
                }
            ]
        }
    }
}

// 2) протипізувати функції:

//     ПЕРША:
// const user = {
//     name:"Max",
//     age:18,
//     gender:'male'
// }
    const user = (name:string,age:number,gender:string) => {
    }
    user('Max',18,'male');



    // ДРУГА
// function sum(a,b){
//     return a+b
// }
const sum = (a:number,b:number) => {
    return a+b;
}
console.log(sum(1, 2));



    //////// ТРЕТЯ
//     function showSum(a,b){
//     console.log(a + b);
// }
    const showSum = (a:number,b:number) =>  {
        console.log(a+b);
    }
console.log(showSum(2, 3));


//////////// ЧЕТВЕРТА
// function incAge(someUser, inc){
//     someUser.age+=inc
//     return someUser
// }

// const incAge = (someUSer:string, inc:number) => {
//
//
//     someUSer = {
//         age:18;
//     }
//
//     someUSer.age+=inc;
//     return someUSer;
// }
// incAge('user',2);
