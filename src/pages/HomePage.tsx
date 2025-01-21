import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, AreaChart, Area, RadarChart, Radar, ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';
import { BarChart3, Menu } from 'lucide-react';
import { Footer } from '../components/Footer';

const data = [
  { name: 'Jan', value: 400, value2: 240 },
  { name: 'Feb', value: 300, value2: 139 },
  { name: 'Mar', value: 600, value2: 980 },
  { name: 'Apr', value: 800, value2: 390 },
  { name: 'May', value: 500, value2: 480 }
];

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      {/* Navigation Button */}
      <button
        onClick={() => navigate('/graphs')}
        className="fixed top-4 right-4 z-50 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full flex items-center space-x-2 transition-all"
      >
        <BarChart3 className="w-5 h-5" />
        <span>Graphs</span>
      </button>

      {/* Header & Navigation */}
      <header className="bg-gray-800/50 backdrop-blur-md fixed w-full z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Msquare AI Voice Analyzer
            </h1>
            <nav className="hidden md:flex space-x-6">
              <button className="hover:text-blue-400 transition-colors">About Us</button>
              <button className="hover:text-blue-400 transition-colors">Contact</button>
              <button className="hover:text-blue-400 transition-colors">Graphs</button>
              <button className="hover:text-blue-400 transition-colors">Form</button>
            </nav>
            <button className="md:hidden">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="relative h-[70vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-gray-900 z-10"></div>
          <div 
            className="absolute inset-0 bg-cover bg-center z-0"
            style={{ backgroundImage: `url(https://images.unsplash.com/photo-1639322537228-f710d846310a)` }}
          ></div>
        </div>
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            Next-Gen Voice Analytics
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Unlock the power of AI-driven voice analysis with our cutting-edge platform
          </p>
          <button
            onClick={() => navigate('/graphs')}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full flex items-center space-x-2 mx-auto transition-all transform hover:scale-105"
          >
            <span>Explore Now</span>
          </button>
        </div>
      </div>

      {/* Welcome Message */}
      <div className="container mx-auto px-4 py-12">
        <div className="bg-gray-800/50 backdrop-blur-md rounded-2xl p-6 mb-12">
          <h3 className="text-2xl font-semibold mb-4">Hi User, Welcome Back! 👋</h3>
          <p className="text-gray-300">
            Msquare AI Analyzer will help you visualize all your call data and more. Let's explore the insights!
          </p>
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Line Chart */}
          <div className="bg-gray-800/50 backdrop-blur-md p-6 rounded-2xl">
            <h3 className="text-xl font-semibold mb-4">Call Volume Trends</h3>
            <div className="h-[200px]">
              <ResponsiveContainer>
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
          </div>

          {/* Bar Chart */}
          <div className="bg-gray-800/50 backdrop-blur-md p-6 rounded-2xl">
            <h3 className="text-xl font-semibold mb-4">User Activity Comparison</h3>
            <div className="h-[200px]">
              <ResponsiveContainer>
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
          </div>

          {/* Area Chart */}
          <div className="bg-gray-800/50 backdrop-blur-md p-6 rounded-2xl">
            <h3 className="text-xl font-semibold mb-4">Volume Distribution</h3>
            <div className="h-[200px]">
              <ResponsiveContainer>
                <AreaChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="name" stroke="#9CA3AF" />
                  <YAxis stroke="#9CA3AF" />
                  <Tooltip />
                  <Area type="monotone" dataKey="value" fill="#EC4899" stroke="#BE185D" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Radar Chart */}
          <div className="bg-gray-800/50 backdrop-blur-md p-6 rounded-2xl">
            <h3 className="text-xl font-semibold mb-4">Performance Metrics</h3>
            <div className="h-[200px]">
              <ResponsiveContainer>
                <RadarChart data={data}>
                  <PolarGrid stroke="#374151" />
                  <PolarAngleAxis dataKey="name" stroke="#9CA3AF" />
                  <PolarRadiusAxis stroke="#9CA3AF" />
                  <Radar dataKey="value" stroke="#60A5FA" fill="#60A5FA" fillOpacity={0.6} />
                  <Tooltip />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Scatter Chart */}
          <div className="bg-gray-800/50 backdrop-blur-md p-6 rounded-2xl">
            <h3 className="text-xl font-semibold mb-4">Correlation Analysis</h3>
            <div className="h-[200px]">
              <ResponsiveContainer>
                <ScatterChart>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis type="number" dataKey="value" stroke="#9CA3AF" />
                  <YAxis type="number" dataKey="value2" stroke="#9CA3AF" />
                  <Tooltip />
                  <Scatter data={data} fill="#34D399" />
                </ScatterChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Pie Chart */}
          <div className="bg-gray-800/50 backdrop-blur-md p-6 rounded-2xl">
            <h3 className="text-xl font-semibold mb-4">Distribution Overview</h3>
            <div className="h-[200px]">
              <ResponsiveContainer>
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
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default HomePage;