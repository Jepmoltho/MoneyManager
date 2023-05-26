import React, { useState } from "react";

function FinancialCalculatorAccordion(props: any) {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (index: number) => {
    setActiveTab(index);
  };

  return (
    <div className="accordion">
      <div className="tabs">
        <div
          className={`tab ${activeTab === 0 ? "active" : ""}`}
          onClick={() => handleTabChange(0)}
        >
          Tab 1
        </div>
        <div
          className={`tab ${activeTab === 1 ? "active" : ""}`}
          onClick={() => handleTabChange(1)}
        >
          Tab 2
        </div>
        <div
          className={`tab ${activeTab === 2 ? "active" : ""}`}
          onClick={() => handleTabChange(2)}
        >
          Tab 3
        </div>
      </div>
      <div className="content">
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
      </div>
    </div>
  );
}

export default FinancialCalculatorAccordion;
