import React, { useState } from "react";

import Button from "/src/components/ui/Button/Button";

import { TabsListView, TabsItemView, TabsContentView } from "./style";

function Tabs({ tabs, isHtml = true }) {
  const [activeTab, setActiveTab] = useState(0);
  const getContent = () => ({ __html: tabs[activeTab].content });

  return (
    <>
      {tabs && tabs.length ? (
        <TabsListView>
          {tabs.map((item, index) => {
            if (index === activeTab) {
              return (
                <TabsItemView key={index}>
                  <Button variant={"tab"} active type="button">
                    {item.title}
                  </Button>
                </TabsItemView>
              );
            }
            return (
              <TabsItemView key={index}>
                <Button
                  variant={"tab"}
                  type="button"
                  onClick={() => setActiveTab(index)}
                >
                  {item.title}
                </Button>
              </TabsItemView>
            );
          })}
        </TabsListView>
      ) : null}

      {isHtml ? (
        <TabsContentView dangerouslySetInnerHTML={getContent()} />
      ) : (
        <TabsContentView>tabs[activeTab].content</TabsContentView>
      )}
    </>
  );
}

export default Tabs;
