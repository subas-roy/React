// import axios from "axios";
import axios from "axios";
import { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';
import { Audio } from 'react-loader-spinner';

const Phones = () => {
  const [phones, setPhones] = useState([]);

  // state for loader / set loading true
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    // fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
    // .then(res => res.json())
    // .then(data => setPhones(data.data))

    axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
    .then(data => {
      const phoneData = data.data.data;
      const phoneWithFakeData = phoneData.map(phone => {
        const obj = {
          name: phone.phone_name,
          price: parseInt(phone.slug.split('-')[1])
        }
        return obj;
      })
      console.log(phoneWithFakeData)
      setPhones(phoneWithFakeData)
      // loading false
      setLoading(false)
    })

  }, [])

  return (
    <div>
        <h2>Loader/Spinner</h2>
        {loading && <Audio
          height="100"
          width="100"
          color="#4fa94d"
          ariaLabel="audio-loading"
          wrapperStyle={{}}
          wrapperClass="wrapper-class"
          visible={true}
        />}
      <h2 className="text-5xl">Phones {phones.length}</h2>
      <BarChart width={1200} height={400} data={phones}>
        <Bar dataKey="price" fill="#8884d8" />
        <XAxis dataKey="name"></XAxis>
        <YAxis></YAxis>
        <Tooltip></Tooltip>
      </BarChart>
    </div>
  );
};

export default Phones;