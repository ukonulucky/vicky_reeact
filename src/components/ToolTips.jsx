import React, { Component } from "react";
import { OverlayTrigger, Button, Tooltip } from "react-bootstrap"
import "../styles/ToolTip.css";
function ToolTipDisplay({ word,heading }) {
  const RenderTooltip = (props) => (
    <Tooltip id="button-tooltip" className="my-tooltip"  {...props}>
      <div className={word}>
      { word }
      </div>
    </Tooltip>
  )
  return(
    <OverlayTrigger
      placement="bottom"
      delay={{ show: 250, hide: 400 }}
      overlay={RenderTooltip}
    >
      <Button variant="success" className={"button"}>{ heading }</Button>
    </OverlayTrigger>
  )

}
export default ToolTipDisplay