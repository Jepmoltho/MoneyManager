import React, { useState } from "react";

function FinancialCalculatorAccordion(props: any) {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (index: number) => {
    setActiveTab(index);
  };

  return (
    <div className="tabs">
      <div className="tabs-container">
        <div
          className={`tab ${activeTab === 0 ? "active" : ""}`}
          onClick={() => handleTabChange(0)}
        >
          Retire
        </div>
        <div
          className={`tab ${activeTab === 1 ? "active" : ""}`}
          onClick={() => handleTabChange(1)}
        >
          AI Budget Booster
        </div>
        <div
          className={`tab ${activeTab === 2 ? "active" : ""}`}
          onClick={() => handleTabChange(2)}
        >
          Mortgage
        </div>
        <div
          className={`tab ${activeTab === 3 ? "active" : ""}`}
          onClick={() => handleTabChange(3)}
        >
          Coming Soon...
        </div>
      </div>
      <div className="tab-content">
        {activeTab === 0 && (
          <div>
            {props.fire}
            {/* Financial Calculator 1 */}
            {/* Render the content for the first tab */}
          </div>
        )}
        {activeTab === 1 && (
          <div>
            {props.ai}
            {/* Financial Calculator 2 */}
            {/* Render the content for the second tab */}
          </div>
        )}
        {activeTab === 2 && (
          <div>
            {/* Financial Calculator 3 */}
            {/* Render the content for the third tab */}
          </div>
        )}
        {activeTab === 3 && (
          <div>
            {/* Financial Calculator 3 */}
            {/* Render the content for the third tab */}
          </div>
        )}
      </div>
    </div>
  );
}

export default FinancialCalculatorAccordion;
