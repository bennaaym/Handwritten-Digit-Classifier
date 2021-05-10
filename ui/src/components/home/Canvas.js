import {useState,useRef,useEffect,useContext} from 'react';
import {ClassifierContext} from '../../context/ClassifierContext';

const Canvas = ({width}) => {

    const {data,setData} = useContext(ClassifierContext);

    const canvasRef = useRef(null);
    const contextRef = useRef(null);
    const [isDrawing,setIsDrawing] = useState(false);

    useEffect(() => {
       const canvas = canvasRef.current;
       const context = canvas.getContext('2d');
       context.lineCap='round';
       context.strokeStyle = '#E5E7EB';
       context.lineWidth = 20;
       contextRef.current = context;
       
    },[data])

    const handleMouseDown = ({nativeEvent}) =>{
        const {layerX,layerY} = nativeEvent; 
        contextRef.current.beginPath();
        contextRef.current.moveTo(layerX,layerY);
        setIsDrawing(true);
    }

    const handleMouseUp = () =>
    {
        contextRef.current.closePath();
        const imgB64Encode = canvasRef.current.toDataURL("image/jpeg").split(";base64,")[1];
        setData({...data,imgB64Encode});
        contextRef.current.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
        setIsDrawing(false);
    }

    const draw = ({nativeEvent}) =>{
        
        if(!isDrawing) return ;

        const {layerX,layerY} = nativeEvent; 

        contextRef.current.lineTo(layerX,layerY);
        contextRef.current.stroke();

    }
    return (
        <>  
            <div className="relative h-full">
                <canvas
                    className="bg-gray-700 absolute rounded-b-lg"
                    width={width}
                    height='300'
                    onMouseDown={handleMouseDown}
                    onMouseUp={handleMouseUp}
                    onMouseMove={draw}
                    ref = {canvasRef}
                />
            </div>
        </>
    );
}
 
export default Canvas;