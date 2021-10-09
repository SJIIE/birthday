
import { useEffect, useState } from 'react';
import axios from 'axios';
import './TextFlow.css'


function TextFlow() {
    const [data, setData] = useState('');

    const santinizeName = (text) => {
        return text.replace(/你/, "李柯淇");
    }

    useEffect(() => {
        const fetchData = async()=>{
            const result1 = await axios.get(
            'api1/api.php',
          );
          const result2 = await axios.get(
            'api2/caihongpi',
          );
          const result3  = await axios.get(
            'api3/chp.php',
          )
         //   const res = result1.data.indexof('频繁') > 0? result2.data.comment : result1.data;
         const res1 = result1.data;
         const res2 = result2.data.comment;
         const res3 = result3.data;
         const resDefault = '';
          setData(santinizeName(res3));
        }
       fetchData();
    },[]); 

  return (
    <div className="TextFlow">
        <div className="box">
            <div className="track">
                <div className="child child-1">{data}</div>
            </div>
            <div className="track">
                <div className="child child-2">{data}</div>
            </div>
            <div className="track">
                <div className="child child-3">{data}</div>
            </div>
        </div>
    </div>
  );
}

export default TextFlow;
