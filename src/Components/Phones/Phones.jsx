import axios from "axios";
import { useEffect, useState } from "react";
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import { Audio } from 'react-loader-spinner'



const Phones = () => {
    const [phones, setPhones] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        // fetch("https://openapi.programming-hero.com/api/phones?search=iphone")
        // .then(res => res.json())
        // .then(data => setPhones(data.data))
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
            .then(data => {
                const phoneData = data.data.data;
                const phonesWithFakeData = phoneData.map(phone => {
                    const obj = {
                        name: phone.phone_name,
                        price: parseInt(phone.slug.split('-')[1])
                    }
                    return obj
                })
                console.log(phonesWithFakeData)
                setPhones(phonesWithFakeData);
                setLoading(false)
            })
    }, [])
    return (
        <div>
           { loading && <Audio
                height="80"
                width="80"
                radius="9"
                color="green"
                ariaLabel="three-dots-loading"
                wrapperStyle
                wrapperClass
            />}
            <h2 className="text-5xl">Phones: {phones.length}</h2>
            <BarChart width={1000} height={400} data={phones}>
                <XAxis dataKey="name" />
                <YAxis></YAxis>
                <Bar dataKey="price" fill="#ebebeb" />
            </BarChart>
        </div>
    );
};

export default Phones;