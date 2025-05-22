import React, { useState, useEffect } from 'react';
import ParticlesBackground from '../components/layout/ParticlesBackground';
import './PortfolioPage.css';

const PortfolioPage = () => {
  // State for active tool
  const [activeTool, setActiveTool] = useState('data');

  // Scroll to top when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Function to handle tool change
  const handleToolChange = (tool) => {
    setActiveTool(tool);
    console.log('Tool changed to:', tool); // Debug log
  };

  return (
    <>
      <ParticlesBackground />
      
      <div className="portfolio-page">
        {/* Main Content Container */}
        <div className="header-section text-light py-4">
          <div className="container mt-5">
            
            {/* Header Card */}
            <div className="card bg-dark text-white shadow-lg border-0 mb-4">
              <div className="card-body text-center p-4">
                <h2 className="card-title mb-3">Quantitative Investment Platform</h2>
                <p className="card-text">
                  A full-featured platform for financial data analysis, portfolio optimization, and trading strategy backtesting
                </p>
              </div>
            </div>

            {/* Toolbar Section */}
            <div className="toolbar-container mt-4">
              <div className="bg-dark py-3 px-4 rounded shadow-lg">
                <div className="toolbar-buttons">
                  <button
                    className={`btn-tool ${activeTool === 'data' ? 'active' : ''}`}
                    onClick={() => handleToolChange('data')}
                  >
                    <i className="fas fa-database"></i>
                    Data
                  </button>
                  <button
                    className={`btn-tool ${activeTool === 'plots' ? 'active' : ''}`}
                    onClick={() => handleToolChange('plots')}
                  >
                    <i className="fas fa-chart-bar"></i>
                    Plots
                  </button>
                  <button
                    className={`btn-tool ${activeTool === 'statistics' ? 'active' : ''}`}
                    onClick={() => handleToolChange('statistics')}
                  >
                    <i className="fas fa-calculator"></i>
                    Risk Metrics
                  </button>
                  <button
                    className={`btn-tool ${activeTool === 'portfolio' ? 'active' : ''}`}
                    onClick={() => handleToolChange('portfolio')}
                  >
                    <i className="fas fa-briefcase"></i>
                    Portfolio
                  </button>
                  <button
                    className={`btn-tool ${activeTool === 'strategies' ? 'active' : ''}`}
                    onClick={() => handleToolChange('strategies')}
                  >
                    <i className="fas fa-chart-line"></i>
                    Strategies
                  </button>
                </div>
              </div>
            </div>

            {/* Dynamic Content Section */}
            <div className="content-container mt-4 mb-5">
              <div className="bg-dark text-light p-4 rounded shadow-lg">
                
                {/* Data Section (Default) */}
                {activeTool === 'data' && (
                  <div className="welcome-screen py-5">
                    <h4 className="mb-4">Welcome to the Quantitative Investment Platform</h4>
                    <p className="mb-5">Choose from the toolbar above to start analyzing financial data.</p>
                    <div className="upload-zone p-5 mb-4 mx-auto">
                      <i className="fas fa-file-upload mb-3"></i>
                      <p>Drag and drop files here<br />or</p>
                      <button className="btn btn-primary btn-lg mt-2">
                        <i className="fas fa-folder-open mr-2"></i>Browse Files
                      </button>
                    </div>
                    <div className="supported-formats">
                      <p className="small text-muted">Supported formats: CSV, Excel (.xlsx, .xls)</p>
                    </div>
                    <div className="text-center mt-4">
                      <div className="spinner-border" id="loadingSpinner" style={{display: 'none'}}>
                        <span className="sr-only">Loading...</span>
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Plots Section */}
                {activeTool === 'plots' && (
                  <div className="row">
                    <div className="col-md-3">
                      <h4>Plot Options</h4>
                      <div className="form-group">
                        <label>Select Ticker:</label>
                        <select className="form-control bg-dark text-light">
                          <option>AAPL</option>
                          <option>MSFT</option>
                          <option>GOOGL</option>
                          <option>AMZN</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label>Chart Type:</label>
                        <select className="form-control bg-dark text-light">
                          <option>Line Chart</option>
                          <option>Candlestick Chart</option>
                          <option>Bar Chart</option>
                        </select>
                      </div>
                      <button className="btn btn-primary mt-3 w-100">Generate Chart</button>
                    </div>
                    <div className="col-md-9">
                      <div className="chart-placeholder d-flex align-items-center justify-content-center">
                        <div className="text-center">
                          <i className="fas fa-chart-line fa-5x mb-3 text-muted"></i>
                          <p>Select parameters and click "Generate Chart" to visualize data</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Statistics Section */}
                {activeTool === 'statistics' && (
                  <div className="row">
                    <div className="col-md-12">
                      <h4>Risk Metrics</h4>
                      <div className="row mt-4">
                        <div className="col-md-4">
                          <div className="form-group">
                            <label>Select Ticker:</label>
                            <select className="form-control bg-dark text-light" multiple size="5">
                              <option>AAPL</option>
                              <option>MSFT</option>
                              <option>GOOGL</option>
                              <option>AMZN</option>
                              <option>TSLA</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="form-group">
                            <label>Metrics:</label>
                            <div className="custom-control custom-checkbox">
                              <input type="checkbox" className="custom-control-input" id="metricVaR" defaultChecked />
                              <label className="custom-control-label" htmlFor="metricVaR">Value at Risk (95%)</label>
                            </div>
                            <div className="custom-control custom-checkbox">
                              <input type="checkbox" className="custom-control-input" id="metricSharpe" defaultChecked />
                              <label className="custom-control-label" htmlFor="metricSharpe">Sharpe Ratio</label>
                            </div>
                            <div className="custom-control custom-checkbox">
                              <input type="checkbox" className="custom-control-input" id="metricDrawdown" defaultChecked />
                              <label className="custom-control-label" htmlFor="metricDrawdown">Maximum Drawdown</label>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="form-group">
                            <label>Period:</label>
                            <select className="form-control bg-dark text-light">
                              <option>1 Month</option>
                              <option>3 Months</option>
                              <option>6 Months</option>
                              <option defaultValue>1 Year</option>
                              <option>5 Years</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <button className="btn btn-primary mt-3">Calculate Metrics</button>
                    </div>
                  </div>
                )}

                {/* Portfolio Section */}
                {activeTool === 'portfolio' && (
                  <div className="row">
                    <div className="col-md-3">
                      <h4>Portfolio Settings</h4>
                      <div className="form-group">
                        <label>Select Tickers:</label>
                        <select className="form-control bg-dark text-light" multiple size="5">
                          <option>AAPL</option>
                          <option>MSFT</option>
                          <option>GOOGL</option>
                          <option>AMZN</option>
                          <option>TSLA</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label>Risk-Free Rate (%):</label>
                        <input
                          type="number"
                          className="form-control bg-dark text-light"
                          defaultValue="2"
                          min="0"
                          step="0.1"
                        />
                      </div>
                      <div className="form-group">
                        <label>Optimization Method:</label>
                        <select className="form-control bg-dark text-light">
                          <option>Mean-Variance</option>
                          <option>Minimum Volatility</option>
                          <option>Risk Parity</option>
                          <option>Maximum Sharpe Ratio</option>
                        </select>
                      </div>
                      <button className="btn btn-primary w-100 mb-2">Optimize Portfolio</button>
                      <button className="btn btn-secondary w-100">Export Results</button>
                    </div>
                    <div className="col-md-9">
                      <div className="chart-placeholder d-flex align-items-center justify-content-center">
                        <div className="text-center">
                          <i className="fas fa-pie-chart fa-5x mb-3 text-muted"></i>
                          <p>Configure parameters and click "Optimize Portfolio" to see results</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Strategies Section */}
                {activeTool === 'strategies' && (
                  <div className="row">
                    <div className="col-md-3">
                      <h4>Strategy Settings</h4>
                      <div className="form-group">
                        <label>Select Ticker:</label>
                        <select className="form-control bg-dark text-light">
                          <option>AAPL</option>
                          <option>MSFT</option>
                          <option>GOOGL</option>
                          <option>AMZN</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label>Strategy Type:</label>
                        <select className="form-control bg-dark text-light">
                          <option>SMA Crossover</option>
                          <option>MACD</option>
                          <option>RSI</option>
                          <option>Bollinger Bands</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label>Fast Period:</label>
                        <input
                          type="number"
                          className="form-control bg-dark text-light"
                          defaultValue="12"
                          min="1"
                        />
                      </div>
                      <div className="form-group">
                        <label>Slow Period:</label>
                        <input
                          type="number"
                          className="form-control bg-dark text-light"
                          defaultValue="26"
                          min="1"
                        />
                      </div>
                      <div className="form-group">
                        <label>Transaction Cost (%):</label>
                        <input
                          type="number"
                          className="form-control bg-dark text-light"
                          defaultValue="0.1"
                          min="0"
                          step="0.01"
                        />
                      </div>
                      <button className="btn btn-primary w-100">Backtest Strategy</button>
                    </div>
                    <div className="col-md-9">
                      <div className="chart-placeholder d-flex align-items-center justify-content-center">
                        <div className="text-center">
                          <i className="fas fa-chart-line fa-5x mb-3 text-muted"></i>
                          <p>Configure strategy parameters and click "Backtest Strategy"</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioPage;