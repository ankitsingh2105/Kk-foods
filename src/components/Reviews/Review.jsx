import React from 'react'
import "./Review.css"
import man from "./man.png"
import woman from "./woman.png"
export default function Review(props) {
  const { id } = props;
  return (
    <>
      <div className="review_div" id={id} >
        <h1 className="align main_heading_review  "> REVIEWS</h1>
        <div className="review_div2">
          <div className="review_card">
            <img className="review_class_image" src={man} alt="" />
            <div className="align">
              <div className="name">
              Himanshu Gashyal
              </div>
              <div style={{ "margin-top": "12px" }} className="reviewAlign">
                <div><i class="fa-solid fa-star"></i></div>
                <div><i class="fa-solid fa-star"></i></div>
                <div><i class="fa-solid fa-star"></i></div>
                <div><i class="fa-solid fa-star"></i></div>
                <div><i class="fa-solid fa-star"></i></div>
              </div>
              <div className="review">
              I know Mr. Khushal (Owner) as a person. He is a gentle man and the way he cooks dishes is absolutely dope!
KK Food is a must visit place for quick bites with your friends and family. He has so many dishes and everything is just so yumm to have!
              </div>
            </div>
          </div>

          <div className="review_card">
            <img className="review_class_image" src={woman} alt="" />
            <div className="align">
              <div className="name">
                Sharad Mer
              </div>
              <div style={{ "margin-top": "12px" }} className="reviewAlign">
                <div><i class="fa-solid fa-star"></i></div>
                <div><i class="fa-solid fa-star"></i></div>
                <div><i class="fa-solid fa-star"></i></div>
                <div><i class="fa-solid fa-star"></i></div>
                <div><i class="fa-solid fa-star"></i></div>
              </div>
              <div className="review">
              Tried the non veg momos(mutton) for the first time from this place. The filling had a different taste than regular mutton momos. For a change, the red chutney was full of flavour, unlink the typical super spicy flavour. Keep up the good job!
              </div>
            </div>
          </div>

          <div className="review_card">
            <img className="review_class_image" src={man} alt="" />
            <div className="align">
              <div className="name">
                Saurabh Rawat
              </div>
              <div style={{ "margin-top": "12px" }} className="reviewAlign">
                <div><i class="fa-solid fa-star"></i></div>
                <div><i class="fa-solid fa-star"></i></div>
                <div><i class="fa-solid fa-star"></i></div>
                <div><i class="fa-solid fa-star"></i></div>
                <div><i class="fa-solid fa-star"></i></div>
              </div>
              <div className="review">
                Nice restaurant,
Awesome place, great food with reasonable price.
You can celebrate your special occasions here with friends and family.Staff is nice and the owner is humble.
Love this place...
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
