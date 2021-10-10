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
    var test_txt = ["世间你是最美丽", "你是最美丽的风景", "我爱世间的一切，尤其是你", "今早天气很好，你也很美", "就算有天没音乐，我只见见你也好", "你出现在我诗的每一页", "就算大雨让整座城市颠倒，我会给你怀抱", "我的心里只有你没有她"];
    var index = Math.ceil(Math.random() * test_txt.length) - 1
    //return text.replace(/你/, "李柯淇");
    return test_txt[index].replace(/你/, "李柯淇");
    //  return text.replace(/你/, "李柯淇");
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
