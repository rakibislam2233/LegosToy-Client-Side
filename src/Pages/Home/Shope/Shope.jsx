import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Shope = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const handelClick = (e)=>{
        console.log(e.target);
    }
    return (
        <div className="w-full max-w-6xl mx-auto py-5">
        <h3 className="text-4xl text-center font-semibold ">
          Our Shope
        </h3>
        {
             <Tabs>
             <TabList>
               <Tab onClick={handelClick}>Title 1</Tab>
               <Tab>Title 2</Tab>
             </TabList>
         
             <TabPanel>
               <h2>Any content 1</h2>
             </TabPanel>
             <TabPanel>
               <h2>Any content 2</h2>
             </TabPanel>
           </Tabs>
        }
      </div>
    );
};

export default Shope;