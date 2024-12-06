
import React from "react";
import { CdInputLabel } from "../../atoms";



type PageTitleProps = {
tiltleText:string;
subTiltleText?:string;
}
const CdPageTitle:  React.FC<PageTitleProps> = ({tiltleText, subTiltleText}) => {
    
      return (
        <div className="pagetitle">
          <h1>
          {tiltleText}
          </h1>
          <h6>
          {subTiltleText}
          </h6>
        </div>
      )
    }

    export default CdPageTitle;