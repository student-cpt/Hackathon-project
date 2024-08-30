// import React from "react";
// import { useState } from "react";
// import axios from "axios";

// import './app.css'

// function TicketB() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [date, setDate] = useState("");
//   const [seat, setSeat] = useState("");
//   const [submitted, setSubmitted] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setSubmitted(true);
//   };

//   return (
//     <div className="app">
//       <h1>Ticket Booking</h1>
//       {submitted ? (
//         <div className="confirmation">
//           <h2>Booking Confirmation</h2>
//           <p><strong>Name:</strong> {name}</p>
//           <p><strong>Email:</strong> {email}</p>
//           <p><strong>Date:</strong> {date}</p>
//           <p><strong>Seat:</strong> {seat}</p>
//           <p>Your booking has been confirmed. Enjoy your event!</p>
//         </div>
//       ) : (
//         <form onSubmit={handleSubmit} className="booking-form">
//           <label>
//             Name:
//             <input 
//               type="text" 
//               value={name} 
//               onChange={(e) => setName(e.target.value)} 
//               required 
//             />
//           </label>
//           <label>
//             Email:
//             <input 
//               type="email" 
//               value={email} 
//               onChange={(e) => setEmail(e.target.value)} 
//               required 
//             />
//           </label>
//           <label>
//             Date:
//             <input 
//               type="date" 
//               value={date} 
//               onChange={(e) => setDate(e.target.value)} 
//               required 
//             />
//           </label>
//           <label>
//             Seat:
//             <select value={seat} onChange={(e) => setSeat(e.target.value)} required>
//               <option value="">Select a seat</option>
//               <option value="A1">A1</option>
//               <option value="A2">A2</option>
//               <option value="A3">A3</option>
//               <option value="B1">B1</option>
//               <option value="B2">B2</option>
//               <option value="B3">B3</option>
//             </select>
//           </label>
//           <button type="submit">Book Ticket</button>
//         </form>
//       )}
//     </div>
//   );
// }

// export default TicketB;


// New code
// src/Component/TicketB.jsx
import React, { useState } from "react";
import axios from "axios";
import "../App.css"; // Make sure the path is correct

function TicketB() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [seat, setSeat] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/api/bookings", {
        name,
        email,
        date,
        seat,
      });
      console.log(response.data);
      setSubmitted(true);
    } catch (error) {
      console.error("There was an error submitting the form!", error);
    }
  };

  return (
    <div className="app">
      <h1>Ticket Booking</h1>
      {submitted ? (
        <div className="confirmation">
          <h2>Booking Confirmation</h2>
          <p><strong>Name:</strong> {name}</p>
          <p><strong>Email:</strong> {email}</p>
          <p><strong>Date:</strong> {date}</p>
          <p><strong>Seat:</strong> {seat}</p>
          <h1> DONE </h1>
          <p>Your booking has been confirmed. Enjoy your event!</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="booking-form">
          <label>
            Name:
            <input 
              type="text" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              required 
            />
          </label>
          <label>
            Email:
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
          </label>
          <label>
            Date:
            <input 
              type="date" 
              value={date} 
              onChange={(e) => setDate(e.target.value)} 
              required 
            />
          </label>
          <label>
            Seat:
            <select value={seat} onChange={(e) => setSeat(e.target.value)} required>
              <option value="">Select a seat</option>
              <option value="A1">A1</option>
              <option value="A2">A2</option>
              <option value="A3">A3</option>
              <option value="B1">B1</option>
              <option value="B2">B2</option>
              <option value="B3">B3</option>
            </select>
          </label>
          <button type="submit">Book Ticket</button>
        </form>
      )}
    </div>
  );
}

export default TicketB;

