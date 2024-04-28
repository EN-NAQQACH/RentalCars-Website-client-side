import React, { useState } from 'react';

function tabs() {
  const [activeTab, setActiveTab] = useState('tab1');

  const tabs = [
    { id: 'tab1', label: 'Tab 1', content: 'Content of Tab 1' },
    { id: 'tab2', label: 'Tab 2', content: 'Content of Tab 2' },
    { id: 'tab3', label: 'Tab 3', content: 'Content of Tab 3' },
  ];

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div>
      <div className="tabs">
        {tabs.map(tab => (
          <button
            key={tab.id}
            className={activeTab === tab.id ? 'active' : ''}
            onClick={() => handleTabClick(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="tab-content h-32">
        {tabs.map(tab => (
          activeTab === tab.id && <div key={tab.id}>{tab.content}</div>
        ))}
      </div>
    </div>
  );
}

export default tabs;
