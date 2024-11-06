import React from "react";
import { Helmet } from "react-helmet";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="container mx-auto">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Gadget Heaven || Contact Us</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="bg-purple-600 py-8 text-center text-white">
        <h1 className="text-xl md:text-3xl font-bold mb-4">Contact Us</h1>
        <p className="md:w-6/12 mx-auto px-4">
          "We're here to assist with any questions or concerns about your orders
          or our products. Reach out to us anytime, and we'll get back to you as
          soon as possible!"
        </p>
      </div>

      <div className="md:flex items-center justify-center gap-6 mt-10 ">
        <div className="md:w-2/4 h-[500px] p-6">
          <iframe
            className="rounded-3xl"
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d17222.057862152873!2d89.99067225!3d23.39426155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sbd!4v1730904719489!5m2!1sen!2sbd"
            width="100%"
            height="100%"
            style={{ border: "1px" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map"
          ></iframe>
        </div>
        <div>
          <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Full Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Full Name"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Send your massage</span>
                </label>
                <textarea
                  className="textarea textarea-info"
                  placeholder="Write your massage"
                ></textarea>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="w-[80%] md:w-2/3 mx-auto bg-white shadow-md rounded-lg p-8 mt-20">
        <h3 className="text-xl font-semibold text-gray-800 mb-6">
          Contact Information
        </h3>
        <div className="flex items-center text-gray-600 mb-4">
          <FaEnvelope className="text-blue-600 mr-3" />
          <p>
            <strong>Email:</strong> support@ecommerce.com
          </p>
        </div>
        <div className="flex items-center text-gray-600 mb-4">
          <FaPhone className="text-blue-600 mr-3" />
          <p>
            <strong>Phone:</strong> +1 (555) 123-4567
          </p>
        </div>
        <div className="flex items-center text-gray-600 mb-4">
          <FaMapMarkerAlt className="text-blue-600 mr-3" />
          <p>
            <strong>Address:</strong> 123 Commerce St, Business City, Country
          </p>
        </div>
        <div className="flex items-center text-gray-600">
          <FaClock className="text-blue-600 mr-3" />
          <p>
            <strong>Hours:</strong> Mon - Fri, 9 AM - 6 PM
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
