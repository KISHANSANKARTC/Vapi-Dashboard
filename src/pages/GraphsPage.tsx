import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, AreaChart, Area, RadarChart, Radar, ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';
import { ResponsiveSankey } from '@nivo/sankey';
import { ArrowLeft } from 'lucide-react';

const data = [
  { name: 'Jan', value: 400, value2: 240 },
  { name: 'Feb', value: 300, value2: 139 },
  { name: 'Mar', value: 600, value2: 980 },
  { name: 'Apr', value: 800, value2: 390 },
  { name: 'May', value: 500, value2: 480 }
];

const sankeyData = {
  nodes: [
    { id: 'Calls' },
    { id: 'Inbound' },
    { id: 'Outbound' },
    { id: 'Resolved' },
    { id: 'Escalated' },
    { id: 'Customer Service' },
    { id: 'Technical Support' }
  ],
  links: [
    { source: 'Calls', target: 'Inbound', value: 150 },
    { source: 'Calls', target: 'Outbound', value: 100 },
    { source: 'Inbound', target: 'Resolved', value: 90 },
    { source: 'Inbound', target: 'Escalated', value: 60 },
    { source: 'Outbound', target: 'Resolved', value: 70 },
    { source: 'Outbound', target: 'Escalated', value: 30 },
    { source: 'Escalated', target: 'Customer Service', value: 45 },
    { source: 'Escalated', target: 'Technical Support', value: 45 }
  ]
};

function GraphsPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <button
        onClick={() => navigate('/')}
        className="mb-8 flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors"
      >
        <ArrowLeft className="w-5 h-5" />
        <span>Back to Dashboard</span>
      </button>

      <h1 className="text-3xl font-bold mb-8">Advanced Analytics</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Line Chart */}
        <div className="bg-gray-800/50 backdrop-blur-md p-6 rounded-2xl">
          <h3 className="text-xl font-semibold mb-4">Trend Analysis</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="name" stroke="#9CA3AF" />
              <YAxis stroke="#9CA3AF" />
              <Tooltip />
              <Line type="monotone" dataKey="value" stroke="#60A5FA" />
              <Line type="monotone" dataKey="value2" stroke="#34D399" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Bar Chart */}
        <div className="bg-gray-800/50 backdrop-blur-md p-6 rounded-2xl">
          <h3 className="text-xl font-semibold mb-4">Comparison Data</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="name" stroke="#9CA3AF" />
              <YAxis stroke="#9CA3AF" />
              <Tooltip />
              <Bar dataKey="value" fill="#8B5CF6" />
              <Bar dataKey="value2" fill="#F59E0B" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Area Chart */}
        <div className="bg-gray-800/50 backdrop-blur-md p-6 rounded-2xl">
          <h3 className="text-xl font-semibold mb-4">Volume Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="name" stroke="#9CA3AF" />
              <YAxis stroke="#9CA3AF" />
              <Tooltip />
              <Area type="monotone" dataKey="value" fill="#EC4899" stroke="#BE185D" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Radar Chart */}
        <div className="bg-gray-800/50 backdrop-blur-md p-6 rounded-2xl">
          <h3 className="text-xl font-semibold mb-4">Performance Metrics</h3>
          <ResponsiveContainer width="100%" height={300}>
            <RadarChart data={data}>
              <PolarGrid stroke="#374151" />
              <PolarAngleAxis dataKey="name" stroke="#9CA3AF" />
              <PolarRadiusAxis stroke="#9CA3AF" />
              <Radar dataKey="value" stroke="#60A5FA" fill="#60A5FA" fillOpacity={0.6} />
              <Tooltip />
            </RadarChart>
          </ResponsiveContainer>
        </div>

        {/* Scatter Chart */}
        <div className="bg-gray-800/50 backdrop-blur-md p-6 rounded-2xl">
          <h3 className="text-xl font-semibold mb-4">Correlation Analysis</h3>
          <ResponsiveContainer width="100%" height={300}>
            <ScatterChart>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis type="number" dataKey="value" stroke="#9CA3AF" />
              <YAxis type="number" dataKey="value2" stroke="#9CA3AF" />
              <Tooltip />
              <Scatter data={data} fill="#34D399" />
            </ScatterChart>
          </ResponsiveContainer>
        </div>

        {/* Pie Chart */}
        <div className="bg-gray-800/50 backdrop-blur-md p-6 rounded-2xl">
          <h3 className="text-xl font-semibold mb-4">Distribution Overview</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={[
                  { name: 'A', value: 400 },
                  { name: 'B', value: 300 },
                  { name: 'C', value: 300 },
                  { name: 'D', value: 200 }
                ]}
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="#8B5CF6"
                dataKey="value"
              />
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Sankey Chart */}
        <div className="bg-gray-800/50 backdrop-blur-md p-6 rounded-2xl lg:col-span-3">
          <h3 className="text-xl font-semibold mb-4">Call Flow Analysis</h3>
          <div className="h-[400px]">
            <ResponsiveSankey
              data={sankeyData}
              margin={{ top: 40, right: 160, bottom: 40, left: 50 }}
              align="justify"
              colors={{ scheme: 'category10' }}
              nodeOpacity={1}
              nodeThickness={18}
              nodeInnerPadding={3}
              nodeSpacing={24}
              nodeBorderWidth={0}
              linkOpacity={0.5}
              linkHoverOthersOpacity={0.1}
              enableLinkGradient={true}
              labelPosition="outside"
              labelOrientation="horizontal"
              labelPadding={16}
              labelTextColor={{ from: 'color', modifiers: [['darker', 1]] }}
              theme={{
                background: 'transparent',
                textColor: '#fff',
                fontSize: 12,
                axis: {
                  domain: {
                    line: {
                      stroke: '#777777',
                      strokeWidth: 1
                    }
                  },
                  ticks: {
                    line: {
                      stroke: '#777777',
                      strokeWidth: 1
                    }
                  }
                },
                grid: {
                  line: {
                    stroke: '#dddddd',
                    strokeWidth: 1
                  }
                }
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default GraphsPage;