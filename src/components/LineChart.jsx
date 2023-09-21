import { LineChart as Lchart, Line ,XAxis,YAxis, CartesianGrid } from 'recharts';
const LineChart = () => {

    const studentData = [
        {
          studentName: "Student 1",
          mathMark: 85,
          chemistryMark: 78,
          biologyMark: 90
        },
        {
          studentName: "Student 2",
          mathMark: 75,
          chemistryMark: 82,
          biologyMark: 88
        },
        {
          studentName: "Student 3",
          mathMark: 92,
          chemistryMark: 88,
          biologyMark: 95
        },
        {
          studentName: "Student 4",
          mathMark: 68,
          chemistryMark: 72,
          biologyMark: 78
        },
        {
          studentName: "Student 5",
          mathMark: 58,
          chemistryMark: 65,
          biologyMark: 92
        },
        {
          studentName: "Student 6",
          mathMark: 89,
          chemistryMark: 79,
          biologyMark: 91
        },
        {
          studentName: "Student 7",
          mathMark: 72,
          chemistryMark: 76,
          biologyMark: 80
        },
        {
          studentName: "Student 8",
          mathMark: 80,
          chemistryMark: 84,
          biologyMark: 89
        },
        {
          studentName: "Student 9",
          mathMark: 94,
          chemistryMark: 90,
          biologyMark: 97
        },
        {
          studentName: "Student 10",
          mathMark: 86,
          chemistryMark: 81,
          biologyMark: 57
        }
      ];
      

    return (
        <div className='my-10'>
            <Lchart width={1100} height={400} data={studentData}>
                <Line dataKey={"mathMark"} stroke='red'></Line>
                <Line dataKey={'chemistryMark'} stroke='blue'></Line>
                <Line dataKey={'biologyMark'} stroke='yellow'></Line>
                <XAxis dataKey="studentName" />
                <YAxis></YAxis>
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            </Lchart>
        </div>
    );
};

export default LineChart;