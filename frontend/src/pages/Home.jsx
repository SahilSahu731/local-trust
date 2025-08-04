import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
  const [serverStatus, setServerStatus] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Test connection to backend
    const testConnection = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/test');
        setServerStatus(response.data);
      } catch (error) {
        setServerStatus({ success: false, message: 'Failed to connect to server' });
      } finally {
        setLoading(false);
      }
    };

    testConnection();
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gray-100 dark:bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Find Local Services Near You
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Connect with trusted service providers in your area. From home repairs to personal services, 
            we've got you covered.
          </p>
          <button className="bg-white text-black px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
            Get Started
          </button>
        </div>
      </section>

      {/* Server Status Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">System Status</h2>
          
          <div className="max-w-md mx-auto bg-gray-50 rounded-lg p-6">
            {loading ? (
              <div className="text-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-500 mx-auto"></div>
                <p className="mt-4 text-gray-600">Checking server connection...</p>
              </div>
            ) : (
              <div className="text-center">
                <div className={`inline-block w-4 h-4 rounded-full mr-2 ${
                  serverStatus?.success ? 'bg-green-500' : 'bg-red-500'
                }`}></div>
                <span className={`font-semibold ${
                  serverStatus?.success ? 'text-green-600' : 'text-red-600'
                }`}>
                  {serverStatus?.success ? 'Backend Connected' : 'Backend Disconnected'}
                </span>
                <p className="mt-2 text-gray-600">{serverStatus?.message}</p>
                {serverStatus?.timestamp && (
                  <p className="mt-1 text-sm text-gray-500">
                    Last checked: {new Date(serverStatus.timestamp).toLocaleTimeString()}
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us?</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔍</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Easy Search</h3>
              <p className="text-gray-600">Find services quickly with our smart search and filters</p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⭐</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Trusted Providers</h3>
              <p className="text-gray-600">All service providers are verified and rated by customers</p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💳</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Secure Payments</h3>
              <p className="text-gray-600">Safe and secure payment processing with escrow protection</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;