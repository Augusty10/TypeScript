import axios,{type AxiosResponse} from "axios"

interface Todo{
    userId: number;
    id: number;
    title:string;
    completed: boolean
}
const fetchData = async() => {
    try {
        const response: AxiosResponse<Todo> = await axios.get("https://jsonplaceholder.typicode.com/todos/1");
        console.log("Todo",response.data );
        
    } catch (error:any ) {
         if(axios.isAxiosError(error))
            console.log( "axios" , error.message);
        if (  error.response)
        {
            console.log(error.response.status);
            
            
        }
            

    }
}







axios.get('https://dhanrajsahu.com')
.then(response=>{
      console.log(response.data);
      
})

// npm i some-library 
// npm i -D @types/some-library 
// .d.ts

