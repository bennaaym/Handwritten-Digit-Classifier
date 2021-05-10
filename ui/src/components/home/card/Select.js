import {useContext} from 'react';
import {ClassifierContext} from '../../../context/ClassifierContext';


const Select = () => {

    const {data,setData} = useContext(ClassifierContext);

    const options = [
        'CNN',
    ]

    const handleChange = (e) =>{
        const algorithm = e.target.value.trim().toLowerCase();
        setData({...data,algorithm})
    }

    return (
        <>
          <div className="mr-4 flex relative ">
                <select onChange={handleChange} className="appearance-none  bg-transparent  text-lg uppercase font-medium px-4 py-3 pr-8 rounded  focus:outline-none ">
                    {
                        options.map((option,index)=>{
                            return <option key={index} value={option}>{option}</option>
                        })
                    }                    
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                </div>
            </div>
        </>
    );
}
 
export default Select;