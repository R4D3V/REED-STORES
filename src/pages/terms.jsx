import { Link } from "react-router-dom";

function Terms() {
  return (
    <div className="container mx-auto p-8 mt-[88px]">
    <h2 className="text-3xl font-bold mb-4">Terms and Conditions</h2>
    <p className="mb-4">
      These terms and conditions outline the rules and regulations for the use of our Gadgets
      Stores Website, located at www.gadgetsstore.com.
    </p>

    <section>
      <h3 className="text-xl font-bold mb-2">1. Acceptance of Terms</h3>
      <p className="mb-4">
        By accessing this website, we assume you accept these terms and conditions. Do not
        continue to use our Gadgets Store if you do not agree to take all of the terms and
        conditions stated on this page.
      </p>
    </section>

    <section>
      <h3 className="text-xl font-bold mb-2">2. Use of Website</h3>
      <p className="mb-4">
        You must be at least 18 years of age to use this website. By using this website and by
        agreeing to these terms and conditions, you warrant and represent that you are at least 18
        years of age.
      </p>
      <p className="mb-4">
        You are granted a limited license only for purposes of viewing the material contained on
        this website.
      </p>
      {/* Add more content */}
    </section>

    <section>
      <h3 className="text-xl font-bold mb-2">3. Intellectual Property</h3>
      <p className="mb-4">
        The content, design, and logos on this website are the intellectual property of Gadgets
        Store. You may not use, reproduce, or redistribute the content without our written
        permission.
      </p>
      {/* Add more content */}
    </section>

    <section>
      <h3 className="text-xl font-bold mb-2">4. User Accounts</h3>
      <p className="mb-4">
        When you create an account with us, you must provide accurate and complete information.
        You are responsible for maintaining the confidentiality of your account and password.
      </p>
      <p className="mb-4">
        We reserve the right to refuse service, terminate accounts, remove or edit content, or
        cancel orders at our sole discretion.
      </p>
    </section>
    <section className="mb-4">
        <p>
          Feel free to talk to us anytime, we are here for you.
        </p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
        <Link to='/about'>Submit your request here</Link>
        </button>
      </section>

     </div>
  )
}

export default Terms;