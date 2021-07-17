import {useState,useRef,useEffect,createContext} from 'react';
import axios from 'axios' 


export const ClassifierContext = createContext();

const ClassifierContextProvider = ({children}) => {


    const ENDPOINT = process.env.REACT_APP_API;

    const [data,setData] = useState({
        imgB64Encode:null,
        algorithm:'cnn',
    })

    const predictions = useRef([0,0,0,0,0,0,0,0,0,0])
    const digit = useRef(0);
    const accuracy = useRef(0);

    useEffect(() => {
       axios.post(ENDPOINT,{"input": JSON.stringify(data)})
       .then((res)=>{
           const data = res.data
           let  pred = data['predictions']
           pred = pred.substring(1,pred.length).split(" ")
           pred = pred.map(elem => parseFloat(elem) * 100)
           pred = pred.filter(elem=> !Number.isNaN(elem))

           const max_acc = pred.reduce((x,y) => Math.max(x,y));
           
           accuracy.current = max_acc

           const pred_digit = pred.indexOf(max_acc);

           digit.current = pred_digit

           predictions.current = pred

        })
       .catch(e =>{
           console.log(e)
       })
    }, [data,ENDPOINT])


    return (
        <ClassifierContext.Provider value={{
            data,
            setData,
            predictions,
            digit,
            accuracy
        }}>
            {children}
        </ClassifierContext.Provider>
    );
}
 
export default ClassifierContextProvider;