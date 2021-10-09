import { Input } from 'antd';
// import {Quote} from './Quote'
// import {SwiperQuote} from './SwiperQuote'
import './App.css'
import { useEffect, useState } from 'react';
import axios from 'axios';
// import $ from 'jquery'
const { Search } = Input;


const onSearch = value => {
  window.location.assign('https://www.baidu.com/s?wd=' + value);
}

function App() {
  const [data, setData] = useState([]);

  const santinizeName = (text) => {
      return text.replace(/你/, "李科淇");
  }

  useEffect(() => {
        let loop =1;
        const requestPool = [];
        while (loop--){
            requestPool.push(axios.get(
                'api1/api.php',
            ))
        }
        axios.all(requestPool).then(axios.spread((...arg) => setData(arg.map(e=>santinizeName(e.data)))))
  },[]); 

  return (
    <div className="App">
          {/* <TextFlow></TextFlow> */}
          {/*  <SwiperQuote data={data}></SwiperQuote>*/}
          {/*  {console.log(data)}*/}
            <Search
              className="search"
              placeholder={data?.[0]||''}
              allowClear
              enterButton="Search"
              size="large"
              onSearch={onSearch}
            />
          {/* <Battery></Battery> */}
    </div>
  );
}

export default App;
