import {useState,useRef,useEffect} from 'react';
import Canvas from './Canvas';
import Card from './card/Card';

const Home = () => {

    const containerRef = useRef(null);
    const [canvasWidth,setCanvasWidth] = useState(0);

    useEffect(() => {
      if(containerRef)
        setCanvasWidth(containerRef.current.clientWidth);
        
      window.addEventListener('resize',()=>{
          if(containerRef)
            setCanvasWidth(containerRef.current.clientWidth);
      })
    }, [])

    return (
        <>
            <div  className="h-full grid grid-cols-12 bg-gray-900 py-20 overflow-x-hidden overflow-y-auto">
                <div className="col-start-4 col-end-10">
                    <div className="flex flex-row justify-center items-center">
                        <h1 className="text-gray-300 text-3xl font-extrabold tracking-widest">Handwritten Digit Classifier</h1>
                    </div>
                        <div
                            ref={containerRef}
                            className="h-full flex flex-col gap-4 pt-10">
                            <Card/>
                            <Canvas width={canvasWidth}/>
                        </div>
                </div>
            </div>


        </>
    );
}
 
export default Home;