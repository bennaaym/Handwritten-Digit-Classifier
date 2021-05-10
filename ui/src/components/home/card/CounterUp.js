import CountUp from 'react-countup';

const CounterUp = ({label,endValue,duration,delay}) => {
    return (
        <>
            <div className="uppercase text-lg font-medium uppercase ">
                <span>{label} :</span>
                <CountUp start={0} end={endValue} duration={duration? duration : 0} delay={delay? delay :0}/>
            </div>
        </>
    );
}
 
export default CounterUp;