const Features = () => {
  return (
      <section className="features">
        <h2 className="heading-2">Why choose Easybank?</h2>
        <p className="description-1">We leverage Open Banking to turn your bank account into your financial hub.
        Control your finances like never before</p>
        <ul className="features__list">
          <li className="features__list--item">
            <img src="/images/icon-online.svg" alt="Online banking icon" className="features__list--item-img"/>
            <h3 className="heading-3">Online Banking</h3>
            <p className="description-2">
              Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world
            </p>
          </li>
          <li className="features__list--item">
            <img src="/images/icon-budgeting.svg" alt="Simple budgeting icon" className="features__list--item-img"/>
            <h3 className="heading-3">Simple Budgeting</h3>
            <p className="description-2">
              See exactly where your money goes each month. Receive notifications when you're close to hitting your limits
            </p>
          </li>
          <li className="features__list--item">
            <img src="/images/icon-onboarding.svg" alt="Fast onboarding icon" className="features__list--item-img"/>
            <h3 className="heading-3">Fast Onboarding</h3>
            <p className="description-2">
              We don't do branches. Open your account in minutes online and start taking control of your finances right away.
            </p>
          </li>
          <li className="features__list--item">
            <img src="/images/icon-api.svg" alt="Open API icon" className="features__list--item-img"/>
            <h3 className="heading-3">Open API</h3>
            <p className="description-2">
              Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.
            </p>
          </li>
        </ul>
      </section>
  );
};

export default Features;
