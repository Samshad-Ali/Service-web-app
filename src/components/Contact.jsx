import React from "react";

const Contact = () => {
  return (
    <div className="contact">
      <h1>Contact Us</h1>
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" placeholder="Abc" required />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
                      placeholder="Abc123@gmail.com"
                      required
          />
        </div>
        <div>
          <label htmlFor="query">Message</label>
          <input
            type="text"
            name="name"
            id="name"
                      placeholder="tell us your queries...."
                      required
          />
              </div>
              <div>
                  <button type="submit">Send</button>
              </div>
      </form>
    </div>
  );
};

export default Contact;
