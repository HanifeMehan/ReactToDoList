import React, { useEffect, useState } from "react";
import Footer from "./footer";
import Header from "./header";
import Section from "./section";

const Components = () => {
  const [contents, setContents] = useState([
    { todoName: "Taste JavaScript", todoActive: true },
    { todoName: "Code furiously ", todoActive: false },
    { todoName: "Promote Mavo ", todoActive: false },
    { todoName: "Give talks ", todoActive: false },
    { todoName: "Have a life! ", todoActive: false },
    { todoName: "Write tutorials", todoActive: true },
  ]);
  const [data, setData] = useState(contents);

  return (
    <div>
      <div className="todoapp">
        <Header setContents={setContents} contacts={contents} />
        <Section
          data={data}
          setData={setData}
          setContents={setContents}
          contents={contents}
        />
      </div>
      <Footer />
    </div>
  );
};
export default Components;
