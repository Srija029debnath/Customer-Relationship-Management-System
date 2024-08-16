import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="navbar">
        <h1>My CRM Website</h1>
        <nav>
          <a href="#home">Home</a>
          <a href="#about-crm">About CRM</a>
          <a href="#crm-functionality">CRM Functionality</a>
        </nav>
      </header>
      
      <section id="home" className="section home-section">
        <h2>Welcome to Our CRM</h2>
        <p>Your ultimate solution for managing customer relationships effectively.</p>
      </section>

      <section id="about-crm" className="section about-section">
        <div className="text-content">
          <h2>What is CRM?</h2>
          <p>
            CRM stands for Customer Relationship Management. It is a technology for managing all your company’s relationships and interactions with customers and potential customers. The goal is simple: Improve business relationships to grow your business.
          </p>
        </div>
        <div className="image-content">
          <img src="https://via.placeholder.com/400" alt="CRM Illustration" />
        </div>
      </section>

      <section id="crm-functionality" className="section functionality-section">
        <div className="text-content">
          <h2>CRM Functionality</h2>
          <p>
            CRM systems help you manage customer relationships across the entire customer lifecycle, spanning marketing, sales, digital commerce, and customer service interactions.
          </p>
        </div>
        <div className="image-content">
          <img src="https://via.placeholder.com/400" alt="CRM Functionality" />
        </div>
      </section>
    </div>
  );
}

export default App;
