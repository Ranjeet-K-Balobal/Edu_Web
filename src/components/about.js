const About = () => {
    return (
      <>
        <div class="accordion" id="accordionExample">
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                <b> Learnx-</b> About Us
              </button>
            </h2>
            <div
              id="collapseOne"
              class="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <strong>This is the first item's accordion body.</strong> It is
                shown by default, until the collapse plugin adds the appropriate
                classes that we use to style each element. These classes control
                the overall appearance, as well as the showing and hiding via CSS
                transitions. You can modify any of this with custom CSS or
                overriding our default variables. It's also worth noting that just
                about any HTML can go within the <code>.accordion-body</code>,
                though the transition does limit overflow.
              </div>
              
            </div>
            <center>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn9qz1wrhw0syYpXnUAhxWVsbwL4ymE-rrpQ&usqp=CAU" alt=".."></img>
  
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT09Q_aov1UAc9Bt5YqWd5fy3zRju_tqQx5bw&usqp=CAU" alt=".."></img>
  
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2p6T18IfMg7KZxkneJOV39VaQ33G6X1GWBQ&usqp=CAU" alt=".."></img>
  
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn9qz1wrhw0syYpXnUAhxWVsbwL4ymE-rrpQ&usqp=CAU" alt=".."></img>
            </center>
          </div>
         
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                <strong>Address</strong>
              </button>
            </h2>
            <div
              id="collapseTwo"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <strong>
                  old Colony, <br></br>
                  Ring Road,<br></br>
                  Mangalore<br></br>
                </strong>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                <strong>Contact details</strong>
              </button>
            </h2>
            <div
              id="collapseThree"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <strong>Phone: 8050792346</strong>
                <br></br>
                <strong>Gmail: ranjeetb@gmail.com</strong>
                <br></br>
                <strong>instagram: ranjeet_b</strong>
                <br></br>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  
  export default About;