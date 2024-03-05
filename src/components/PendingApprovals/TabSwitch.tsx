import React, { useState } from 'react';
import { Tabs, Table } from 'antd';

const { TabPane } = Tabs;

const TabSwitch = () => {
  const [activeKey, setActiveKey] = useState<string>('1');

  const handleTabChange = (key: string) => {
    setActiveKey(key);
  };

  // Define data sources for each tab
  const tabDataSources: { [key: string]: any[] } = {
    '1': [
      { id: 1, name: 'John', age: 30 },
      { id: 2, name: 'Alice', age: 25 },
    ],
    '2': [
      { id: 3, name: 'Bob', age: 35 },
      { id: 4, name: 'Emma', age: 28 },
    ],
    '3': [
      { id: 5, name: 'Mike', age: 40 },
      { id: 6, name: 'Sara', age: 32 },
    ],
  };

  // Define columns for the table
  const columns = [
    { title: 'ID', dataIndex: 'id', key: 'id' },
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Age', dataIndex: 'age', key: 'age' },
  ];

  return (
    <div>
      <Tabs activeKey={activeKey} onChange={handleTabChange}>
        <TabPane tab="Tab 1" key="1">
          <Table dataSource={tabDataSources['1']} columns={columns} />
        </TabPane>
        <TabPane tab="Tab 2" key="2">
          <Table dataSource={tabDataSources['2']} columns={columns} />
        </TabPane>
        <TabPane tab="Tab 3" key="3">
          <Table dataSource={tabDataSources['3']} columns={columns} />
        </TabPane>
      </Tabs>
    </div>
  );
};

export default TabSwitch;
