import React, { useState } from "react";
import { TitleList, TitleButton, TitleText, Content } from "./styles";

function Tabs({ tabs }) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      <TitleList>
        {tabs &&
          tabs.length &&
          tabs.map((item, index) => {
            if (index === activeTab) {
              return (
                <TitleButton
                  key={index}
                  active
                  onClick={() => setActiveTab(index)}
                >
                  <TitleText small active as="h2">
                    {item.title}
                  </TitleText>
                </TitleButton>
              );
            }
            return (
              <TitleButton key={index} onClick={() => setActiveTab(index)}>
                <TitleText small as="h2">
                  {item.title}
                </TitleText>
              </TitleButton>
            );
          })}
      </TitleList>
      <Content>{tabs[activeTab].content}</Content>
    </div>
  );
}

export default Tabs;
