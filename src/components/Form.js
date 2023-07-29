import "./FormStyles.css";


const Form = () => {
 
  return <div className="form">
      <form method="POST" name="contact" data-netlify="true" onSubmit>
        
        <input type="hidden" name= "form-name" value="contact"/>

        <label>Your Name</label>
        <input type="text" name="name" placeholder="Enter your name" required ></input>
        
        <label>Email</label>
        <input type="email" name="email" placeholder="Enter your email" required></input>
        
        <label>Subject</label>
        <input type="text" name="subject" required  ></input>
        
        <label>Message</label>
        <textarea rows="6" name="message" placeholder="Type Your Message Here" required ></textarea>

        <button className="btn" type="submit">Submit </button>
    </form>
  </div>

}

export default Form