export async function getAllPeople(){
   const res=await fetch("https://spiestestserver-onjv.onrender.com/people")
   const data=await res.json()
   const list_of_people=[]
   list_of_people.push(data)
   console.log(list_of_people)
   return list_of_people
}
export async function getAllTranscriptions(){
   const res=await fetch("https://spiestestserver-onjv.onrender.com/transcriptions")
   const data=await res.json()
   const list_of_transcriptions=[]
   list_of_transcriptions.push(data)
   console.log(list_of_transcriptions)
   return list_of_transcriptions
}
export async function serchByName(serch_name){
   const res=await fetch("https://spiestestserver-onjv.onrender.com/people")
   const data=await res.json()
   for(let i=0;i<data.length;i++)
    if(data[i].name.toLowerCase()===serch_name)
        console.log(data[i])
   
}
export async function serchByAge(serch_age){
   const res=await fetch("https://spiestestserver-onjv.onrender.com/people")
   const data=await res.json()
   for(let i=0;i<data.length;i++)
    if(data[i].age===serch_age)
        console.log(data[i])
   
}
export async function SearchDangerousPeople() {
    const res=await fetch("https://spiestestserver-onjv.onrender.com/transcriptions")
   const data=await res.json()
   const list_of_1=[]
   const list_of_2=[]
   const list_of_3=[]
   const list_of_4=[]
   for(let i=0;i<data.length;i++){
    if(data[i].content.toLowerCase().includes("knife")||data[i].content.toLowerCase().includes("death")||data[i].content.toLowerCase().includes("bomb")||data[i].content.toLowerCase().includes("attack")){
        list_of_1.push(data[i])
    }
    if(data[i].content.toLowerCase().includes("death")&&data[i].content.toLowerCase().includes("bomb")||
       data[i].content.toLowerCase().includes("attack")&&data[i].content.toLowerCase().includes("death")||
       data[i].content.toLowerCase().includes("attack")&&data[i].content.toLowerCase().includes("bomb")||
       data[i].content.toLowerCase().includes("knife")&&data[i].content.toLowerCase().includes("death")||
       data[i].content.toLowerCase().includes("knife")&&data[i].content.toLowerCase().includes("attack")||
       data[i].content.toLowerCase().includes("knife")&&data[i].content.toLowerCase().includes("bomb")){
        list_of_2.push(data[i])
    }
    if(data[i].content.toLowerCase().includes("knife")&&data[i].content.toLowerCase().includes("death")&&data[i].content.toLowerCase().includes("attack")||
       data[i].content.toLowerCase().includes("knife")&&data[i].content.toLowerCase().includes("death")&&data[i].content.toLowerCase().includes("bomb")||
       data[i].content.toLowerCase().includes("knife")&&data[i].content.toLowerCase().includes("attack")&&data[i].content.toLowerCase().includes("bomb")||
       data[i].content.toLowerCase().includes("bomb")&&data[i].content.toLowerCase().includes("death")&&data[i].content.toLowerCase().includes("attack")){
        list_of_3.push(data[i])
    }
    if(data[i].content.toLowerCase().includes("attack")&&data[i].content.toLowerCase().includes("knife")&&data[i].content.toLowerCase().includes("death")&&data[i].content.toLowerCase().includes("bomb")){
        list_of_4.push(data[i])
    }}
    
}


