import React from "react";

const NewsItem =(props)=> {

    let { description, imgurl, newsurl, publishedAt } = props;
    return (
      <div>
        <div
          className="card"
          // style={{
          //   width: "18rem",
          // }}
        >
           <span className="position-absolute translate-middle p-1 text-white bg-danger rounded-pill" style={{right:"0px"}}>
    <span className="visually-hidden">{props.source}</span>
  </span>
          <img
            alt="..."
            className="card-img-top"
            height={"209px"}
            width={"287px"}
            src={
              imgurl === null
                ? "https://cdn.siasat.com/wp-content/uploads/2023/05/moon-lunar-eclipse.jpg"
                : imgurl
            }
          />
          <div className="card-body">
            <h5 className="card-title">
              {props.title}...
             
            </h5>

            <p className="card-text">{description}...</p>
            <p className="card-text">
              <small className=" text-danger">
                By {props.author} to {new Date(publishedAt).toGMTString()}{" "}
              </small>
            </p>
            <a
              className="btn btn-sm btn-primary"
              href={newsurl}
              target="_black"
            >
              Read more
            </a>
          </div>
        </div>
      </div>
    );
}

export default NewsItem;
