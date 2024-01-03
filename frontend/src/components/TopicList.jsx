// frontend/src/components/TopicList.jsx

import React from "react";
import TopicListItem from "./TopicListItem";
import "../styles/TopicList.scss";

const sampleTopics = ["Nature", "Travel", "Food", "Architecture", "People"];

const TopicList = () => {
  return (
    <ul className="topic-list">
      {sampleTopics.map((topic, index) => (
        <TopicListItem key={index} topic={topic} />
      ))}
    </ul>
  );
};

export default TopicList;
