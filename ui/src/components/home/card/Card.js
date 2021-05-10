import {useContext} from 'react';
import CounterUp from "./CounterUp";
import Select from "./Select";
import {ClassifierContext} from '../../../context/ClassifierContext';

const Card = () => {

   
    const {digit,accuracy} = useContext(ClassifierContext);

    return (
        <>
            <div className="flex md:flex-row sm:flex-col items-center justify-between text-gray-900 bg-gray-200 py-2 p-4 rounded-t-lg ">
                        <Select/>
                        <CounterUp label={'digit'} endValue={digit.current} duration={0.5} delay={0.5}/>
                        <CounterUp label={'accuracy'} endValue={accuracy.current} duration={0.5} delay={1}/>
            </div>
        </>
    );
}
 
export default Card;