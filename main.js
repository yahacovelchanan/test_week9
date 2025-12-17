import { getAllPeople, getAllTranscriptions, serchByAge, serchByName } from "./function/function.js"
import input from 'analiza-sync'


async function all_menu(){
while(true){
const menu=Number(input(`To get the list of people press 1\n
To get the transcript of the calls press 2\n
To search for a person by name press 3\n
To search for a person by age press 4\n
to exit press 5`))
if(menu===1){
    const all_people=await getAllPeople()
}
if(menu===2){
    const all_Transcriptions=await getAllTranscriptions()
}
if(menu===3){
    const serch_by_name=String(input("enter name"))
    const serch1=await serchByName(serch_by_name)
}
if(menu===4){
    const serch_by_age=Number(input("enter age"))
    const serch2=await serchByAge(serch_by_age)
}
if(menu===5){
    break
}
}
}
all_menu()