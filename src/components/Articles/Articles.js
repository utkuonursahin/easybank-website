const Articles = () => {
  return (
      <section className="articles">
        <h2 className="heading-2">Latest Articles</h2>
        <ul className="articles__list">
          <li className="articles__list--item">
            <img src="/images/image-currency.jpg" alt="Currency image" className="articles__list--item-img"/>
            <span>By Claire Robinson</span>
            <h4 className="heading-4">Receive money in any currency with no fees</h4>
            <p className="description-3">
              The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …
            </p>
          </li>
          <li className="articles__list--item">
            <img src="/images/image-restaurant.jpg" alt="Restaurant image" className="articles__list--item-img"/>
            <span>By Wilson Hutton</span>
            <h4 className="heading-4">Treat yourself without worrying about money</h4>
            <p className="description-3">Our simple budgeting feature allows you to separate out your spending and set
              realistic limits each month. That means you …</p>
          </li>
          <li className="articles__list--item">
            <img src="/images/image-plane.jpg" alt="Plane image" className="articles__list--item-img"/>
            <span>By Wilson Hutton</span>
            <h4 className="heading-4">Take your Easybank card wherever you go</h4>
            <p className="description-3">We want you to enjoy your travels. This is why we don’t charge any fees on purchases
              while you’re abroad. We’ll even show you …</p>
          </li>
          <li className="articles__list--item">
            <img src="/images/image-confetti.jpg" alt="Confetti image" className="articles__list--item-img"/>
            <span>By Claire Robinson</span>
            <h4 className="heading-4">Our invite-only Beta accounts are now live!</h4>
            <p className="description-3">After a lot of hard work by the whole team, we’re excited to launch our closed beta.
              It’s easy to request an invite through the site ...</p>
          </li>
        </ul>
      </section>
  );
};

export default Articles;
