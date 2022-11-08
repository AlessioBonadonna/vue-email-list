const {createApp} = Vue;
createApp({
data(){
    return{
         a :[]
    }
    
},
computed:{
 
} ,
methods:{
creaArrayRandom(array){
    axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((element)=>{
        array.push(element.data.response)
    })
},
pulisciArray(){
    this.a.splice(0);
    for (let i = 0; i < 10; i++) {
        this.creaArrayRandom(this.a);
        
}
  
}
},
mounted(){
     for (let i = 0; i < 10; i++) {
        this.creaArrayRandom(this.a);
        
}

}}).mount('#app')