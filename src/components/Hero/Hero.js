const Hero = () => {
  return (
      <section className="hero">
        <div className="hero__expression">
          <h1 className="heading-1">Next generation digital banking</h1>
          <p className="description-1">Take your financial life online. Your Easybank account will be a one-stop shop for
            spending, saving, budgeting, investing and much more.</p>
          <button className="cta">Request Invite</button>
        </div>
        <picture className="hero__mockup">
          <img src="/images/image-mockups.png" alt="Phone mockups"/>
        </picture>
      </section>
  );
};

export default Hero;
