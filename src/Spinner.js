import React from "react";

const Spinner = (props) => {
  return (
    <div className="ui active dimmer">
      <div className="ui big text loader">{props.message || "Loading..."}</div>
      {/* message 가 없는 경우 기본 메세지인 'Loading...'을 출력한다 */}
    </div>
  );
};

export default Spinner;
