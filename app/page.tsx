import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main >




      <div className="intro">
    <h1>kishan </h1>
    <p>I am kishan and I love to clean plastic.</p>
    <button>Learn More</button>
  </div>
  <div className="achievements">
    <div className="work">
      
     
      <p className="work-heading">1 Poor Selection</p>
      <p className="work-text">Environment minister Bhupender Yadav said on Twitter on Thursday: “Taking forward the clarion call given by PM Shri @narendramodi ji to eliminate single-use plastics, @moefcc has notified comprehensive Guidelines on Extended Producers Responsibility on plastic packaging.”</p>
    </div>
    <div className="work">
      
      <p className="work-heading"></p>
      <p className="work-text">Selecting the right tree for the right place is also essential. Go to the planting site and look up and around. Remember to consider both the mature height and width of any trees you may plant. Take a look at what is already growing well in your yard or in your neighborhood. Choose varieties suited to your area and those that are the most resistant to common insect and disease pests.</p>
   
    </div>
  </div>
  <div className="achievements">
    <div className="work">
      
      <p className="work-heading">Antiplastic</p>
      <p className="work-text">Environment minister Bhupender Yadav said on Twitter on Thursday: “Taking forward the clarion call given by PM Shri @narendramodi ji to eliminate single-use plastics, @moefcc has notified comprehensive Guidelines on Extended Producers Responsibility on plastic packaging.”</p>
    </div>
    <div className="work">
      
      <p className="work-heading">Antiplastic</p>
      <p className="work-text">Environment minister Bhupender Yadav said on Twitter on Thursday: “Taking forward the clarion call given by PM Shri @narendramodi ji to eliminate single-use plastics, @moefcc has notified comprehensive Guidelines on Extended Producers Responsibility on plastic packaging.”</p>
    </div>
   
  </div>

      <footer className="footer">
  <div className="copy"> mitaya</div>
  <div className="bottom-links">
    <div className="links">
      <span>More Info</span>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
   
    </div>
    <div className="links">
      <span>Social Links</span>
      <a href="#">fb<i className="fab fa-facebook"></i></a>
      <a href="#">twi<i className="fab fa-twitter"></i></a>
      <a href="#">inst<i className="fab fa-instagram"></i></a>
    </div>
  </div>
</footer>
    </main>
  )
}
