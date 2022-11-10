import burningmanimg from "./../img/bm2.jpeg";

const NewsletterSection = () => {
  return (
    <div id="newsletter-container">
      <div id="newsletter-text">
        <h3>Newsletter Signup</h3>
        <p>
          Want to receive the latest updates, news stories and information about
          Kiwiburn? Sign up to our mailing list below!
        </p>
      </div>
      <div id="newsletter-content">
        <img src={burningmanimg} />
        <form
          onSubmit={(event) => {
            event.preventDefault();
          }}
        >
          <div id="newsletter-form">
            <input
              type="text"
              name="firstname"
              required
              placeholder="First Name..."
            />
            <input
              type="text"
              name="lastname"
              required
              placeholder="Last Name..."
            />
            <input
              type="email"
              name="email"
              required
              placeholder="Your Email..."
            />
            <button>Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewsletterSection;
