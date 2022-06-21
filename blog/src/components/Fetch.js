import React, { useEffect, useState } from "react";
import axios from "axios";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

const Fetch = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:1337/api/posts",
    }).then((response) => {
      setData(response.data.data);
    });
    return;
  }, []);
  return (
    <div>
      {data.map((d) => (
        <div className="card" style={{ width: "600px" }}>
          <div className="card-header">
            <div className="card-title h3">{d.attributes.title}</div>
          </div>
          <div className="card-body">
            <ReactMarkdown components={{ p: "div" }}>
              {d.attributes.content}
            </ReactMarkdown>
          </div>
          <div className="card-footer">
            <a href={"post=" + d.id} className="btn btn-primary">
              Läs
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Fetch;
