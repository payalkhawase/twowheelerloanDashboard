import React, { useState } from 'react';
import { PieChart, Pie, Cell, Legend } from 'recharts';

const EmiCheck = () => {
  const [loan, setLoan] = useState(500000);
  const [rate, setRate] = useState(7.5); // Annual Interest Rate
  const [tenure, setTenure] = useState(5); // In years

  // EMI Calculation
  const monthlyRate = rate / 12 / 100;
  const months = tenure * 12;
  const emi = loan * monthlyRate * Math.pow(1 + monthlyRate, months) / (Math.pow(1 + monthlyRate, months) - 1);
  const totalPayment = emi * months;
  const interest = totalPayment - loan;

  const pieData = [
    { name: 'Principal', value: loan },
    { name: 'Interest', value: interest },
  ];

  const COLORS = ['#0088FE', '#FF8042'];
  return (
    <div className="p-6 max-w-xl mx-auto justify-content-center" >
      <h1 className="text-2xl font-bold mb-4">EMI Calculator</h1>
      <div style={{display:'flex',marginLeft:'25%'}}>
          <div style={{marginTop:'100px'}}>
          <div className="mb-4">
            <label>Loan Amount: ₹{loan}</label>
            <input type="range" min="100000" max="2000000" step="10000"
              value={loan} onChange={(e) => setLoan(Number(e.target.value))} className="w-full" />
          </div>

          <div className="mb-4">
            <label>Interest Rate: {rate}%</label>
            <input type="range" min="1" max="15" step="0.1"
              value={rate} onChange={(e) => setRate(Number(e.target.value))} className="w-full" />
          </div>

          <div className="mb-4">
            <label>Tenure: {tenure} years</label>
            <input type="range" min="1" max="30" step="1"
              value={tenure} onChange={(e) => setTenure(Number(e.target.value))} className="w-full" />
          </div>

          <div className="text-lg font-medium mb-4">
            Monthly EMI: ₹{emi.toFixed(2)}
          </div>
        </div>
        <div style={{marginLeft:'120px'}}>
          <PieChart width={300} height={300}>
            <Pie data={pieData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} label>
              {pieData.map((entry, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Legend />
          </PieChart>
        </div>  
        </div>
    </div>
  );
};

export default EmiCheck;
