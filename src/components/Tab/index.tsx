"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import * as S from "./styles";
import classNames from "classnames";

type TabItem = {
  id: string;
  title: string;
  icon?: React.ReactNode;
  content: React.ReactNode;
};

interface TabsProps {
  tabs: TabItem[];
}

const Tab = ({ tabs }: TabsProps) => {
  const [activeTab, setActiveTab] = useState<string>(tabs[0].id);

  const handleTabClick = (id: string) => {
    setActiveTab(id);
  };

  const activeTabContent = tabs.find((tab) => tab.id === activeTab)?.content;

  return (
    <S.TabsContainer>
      <S.TabsHeaderWrapper>
        <S.SelectedTabTitle>
          {tabs.find((tab) => tab.id === activeTab)?.title}
        </S.SelectedTabTitle>

        <S.TabsHeader>
          {tabs.map((tab) => (
            <S.TabButton
              key={tab.id}
              onClick={() => handleTabClick(tab.id)}
              className={classNames({ isActive: tab.id === activeTab })}
            >
              {tab.icon && tab.icon} {tab.title}
            </S.TabButton>
          ))}
        </S.TabsHeader>
      </S.TabsHeaderWrapper>

      <S.TabsContent>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {activeTabContent}
          </motion.div>
        </AnimatePresence>
      </S.TabsContent>
    </S.TabsContainer>
  );
};

export default Tab;
