function SelectedWork() {
  return (
    <section>
      
      {/* SECTION HEADER */}
      <div>
        {/* Eyebrow */}
        <span>SELECTED WORK</span>

        {/* Heading */}
        <h2>Selected Work.</h2>

        {/* Description */}
        <p>
          A selection of portraits and personal-brand stories
          created for people building something worth being seen.
        </p>
      </div>


      {/* PORTFOLIO GRID */}
      <div>

        {/* PROJECT 1 */}
        <article>
          <div>
            <img
              src="/images/work-01.jpg"
              alt=""
            />
          </div>

          <div>
            <h3>AMARA</h3>
            <p>Creative Director</p>
            <p>Personal Brand · Lagos</p>
          </div>
        </article>


        {/* PROJECT 2 */}
        <article>
          <div>
            <img
              src="/images/work-02.jpg"
              alt=""
            />
          </div>

          <div>
            <h3>DAVID</h3>
            <p>Product Designer</p>
            <p>Professional Portrait · Lagos</p>
          </div>
        </article>


        {/* PROJECT 3 */}
        <article>
          <div>
            <img
              src="/images/work-03.jpg"
              alt=""
            />
          </div>

          <div>
            <h3>CHIOMA</h3>
            <p>Founder</p>
            <p>Personal Brand · Lagos</p>
          </div>
        </article>

      </div>

    </section>
  )
}

export default SelectedWork