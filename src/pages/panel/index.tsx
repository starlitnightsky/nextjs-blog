import React from "react";

const UserPanel = () => {

  const clickHandler = async (type: string) => {
    let response;
    let data;

    try {
      response = await fetch("/api/blog-post/handle", {
        method: type,
        body: JSON.stringify({
          oof: "oof",
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const json = await response.json();

      if (!response.ok) {
        console.log("error", json.error);
      }

      if (response.ok) {
        console.log("success", json);
        data = json;
      }
    } catch (error) {
      console.log("error", error);
    }

    console.log(data, "put");
  };

  return (
    <div>
      <button onClick={() => clickHandler("PUT")}>PUT</button>
      <button onClick={() => clickHandler("DELETE")}>DELETE</button>
    </div>
  );
};

export default UserPanel;
