import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', score: 65 },
  { name: 'Feb', score: 68 },
  { name: 'Mar', score: 72 },
  { name: 'Apr', score: 75 },
  { name: 'May', score: 78 },
  { name: 'Jun', score: 82 },
];

export const DataVisualization = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">ESG Performance Trends</h2>
        <div className="h-[400px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <defs>
                <linearGradient id="scoreGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#0EA5E9" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#0EA5E9" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="score"
                stroke="#0EA5E9"
                fillOpacity={1}
                fill="url(#scoreGradient)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
};