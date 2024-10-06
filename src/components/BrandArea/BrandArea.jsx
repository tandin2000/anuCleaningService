import React from "react";
import cn from "classnames";

const BrandArea = ({ className }) => {
 
  return (
    <div className={cn(className ? className : "brand-area pb-130 pt-100" )}>
      <div className="container">
       <div className="row">
        <div className="col-md-2 alc">
<img src="/img/images/satisfaction.png" className="satimg" />
        </div>
        <div className="col-md-8">
          <center>
        <h2 className="title tg-element-title">
        Satisfaction Guaranteed!
                </h2>
                <p>
                Your satisfaction is 100% guaranteed at Anu Building Services. If you are not happy with our service, just let us know and we’ll work to make it right. This makes hiring Cleaning Company virtually risk free. Our Employees are thoroughly screened through our rigorous recruitment process, and every one of them goes through hand in training process.
                </p>
                </center>
          </div>
          <div className="col-md-2 alc">
          <img src="/img/images/stamp.png" className="satimg" />
          </div>
       </div>
      </div>
    </div>
  );
};

export default BrandArea;
