import { LineChart as LChart, Line, XAxis, YAxis } from 'recharts';

const LineChart = () => {

    const mathMarkData = [
        { id: 1, name: "Alice", math: 78, physics: 82, chemistry: 74 },
        { id: 2, name: "Bob", math: 85, physics: 80, chemistry: 79 },
        { id: 3, name: "Charlie", math: 92, physics: 88, chemistry: 85 },
        { id: 4, name: "David", math: 88, physics: 84, chemistry: 80 },
        { id: 5, name: "Eve", math: 76, physics: 78, chemistry: 72 },
        { id: 6, name: "Frank", math: 95, physics: 92, chemistry: 89 },
        { id: 7, name: "Grace", math: 89, physics: 86, chemistry: 83 },
        { id: 8, name: "Hannah", math: 84, physics: 81, chemistry: 77 },
        { id: 9, name: "Ivy", math: 91, physics: 89, chemistry: 84 },
        { id: 10, name: "Jack", math: 87, physics: 85, chemistry: 80 },
      ];
    return (
        <div>
            <LChart width={800 } height ={400} data ={ mathMarkData}>
            <XAxis dataKey="name" />
            <YAxis></YAxis>

                <Line dataKey={"math"} stroke='yellow'></Line>
                <Line dataKey={"physics"} stroke="#e51805"></Line>
                
            </LChart>
        </div>
    );
};

export default LineChart;