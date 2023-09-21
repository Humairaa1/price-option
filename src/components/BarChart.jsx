import { BarChart as Bchart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';

const BarChart = () => {

    const studentData = [
        {
          studentName: "Humaira",
          mathMark: 85,
          chemistryMark: 78,
          biologyMark: 90
        },
        {
          studentName: "Roja",
          mathMark: 75,
          chemistryMark: 82,
          biologyMark: 88
        },
        {
          studentName: "Pavel",
          mathMark: 92,
          chemistryMark: 88,
          biologyMark: 95
        },
        {
          studentName: "Farhan",
          mathMark: 68,
          chemistryMark: 72,
          biologyMark: 78
        },
        {
          studentName: "John",
          mathMark: 72,
          chemistryMark: 76,
          biologyMark: 80
        },
        {
          studentName: "Jack",
          mathMark: 80,
          chemistryMark: 84,
          biologyMark: 89
        },
        {
          studentName: "Student",
          mathMark: 94,
          chemistryMark: 90,
          biologyMark: 97
        },
        {
          studentName: "Student1",
          mathMark: 86,
          chemistryMark: 81,
          biologyMark: 87
        }
      ];
      

    return (
        <div>
            
            <Bchart width={700} height={600}data={studentData} >
                <Bar dataKey={'mathMark'} fill='red'></Bar>
                <Bar dataKey={'chemistryMark'} fill='skyBlue'></Bar>
                <Bar dataKey={'biologyMark'} fill='pink'></Bar>
                <XAxis dataKey="studentName" />
                <YAxis />
                <Tooltip />
                <Legend />
                
            </Bchart>
        </div>
    );
};

export default BarChart;