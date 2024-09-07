import { LineChart as LChart, Line, XAxis, YAxis } from 'recharts';

const LineChart = () => {

  const subjectMarksData = [
    { id: 1, name: "Alice Johnson", math: 88, physics: 92, chemistry: 85 },
    { id: 2, name: "Bob Smith", math: 72, physics: 78, chemistry: 69 },
    { id: 3, name: "Charlie Brown", math: 95, physics: 94, chemistry: 91 },
    { id: 4, name: "Daisy Miller", math: 64, physics: 70, chemistry: 66 },
    { id: 5, name: "Evan Davis", math: 77, physics: 79, chemistry: 73 },
    { id: 6, name: "Fiona Garcia", math: 82, physics: 88, chemistry: 80 },
    { id: 7, name: "George Wilson", math: 91, physics: 89, chemistry: 92 },
    { id: 8, name: "Hannah Lee", math: 85, physics: 86, chemistry: 84 },
    { id: 9, name: "Isaac Martin", math: 68, physics: 75, chemistry: 71 },
    { id: 10, name: "Julia Clark", math: 79, physics: 82, chemistry: 77 }
  ];

  return (
    <div>
      <LChart width={1200} height={500} data={subjectMarksData}>
        <XAxis dataKey={'name'}></XAxis>
        <YAxis ></YAxis>
        <Line dataKey="math"></Line>
        <Line dataKey="physics"></Line>
      </LChart>
    </div>
  );
};

export default LineChart;