// frontend/src/components/TopicList.jsx

import React from "react";
import TopicListItem from "./TopicListItem";
import "../styles/TopicList.scss";

const sampleTopics = ["Nature", "Travel", "Food", "Architecture", "People"];

const TopicList = (props) => {

  const parsedTopicList = props.topics.map((item,index)=>{
    return <TopicListItem key={item.id} item={item} />
  })
  return (
    <div className="top-nav-bar__topic-list">
      {parsedTopicList}
    </div>
  );
};

export default TopicList;
