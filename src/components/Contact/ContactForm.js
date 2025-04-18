"use client";
import React from "react";
import { useForm } from "react-hook-form";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // const [status, setStatus] = useState('');
  // const onSubmit = async (data) => {
  //   try {
  //     const response = await fetch('/api/contact', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(data),
  //     });

  //     const result = await response.json();

  //     if (response.ok) {
  //       console.log('Message sent successfully:', result);
  //       alert('Your message has been sent successfully!');
  //       // Optionally, reset the form or redirect the user
  //       // reset();
  //     } else {
  //       console.error('Failed to send message:', result.error || 'Unknown error');
  //       alert('Failed to send your message. Please try again.');
  //     }
  //   } catch (error) {
  //     console.error('Error submitting form:', error);
  //     alert('An error occurred. Please try again.');
  //   }
  // };
  const onSubmit = async (data) => {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        console.log('Message sent successfully:', result);
        alert('Your message has been sent successfully!');
        // Optionally, reset the form or redirect the user
        // reset();
      } else {
        console.error('Failed to send message:', result.error || 'Unknown error');
        alert('Failed to send your message. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred. Please try again.');
    }
  };
  console.log(errors);


  

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mt-12 text-base xs:text-lg sm:text-xl font-medium leading-relaxed font-in"
    >
      Hello! My name is{" "}
      <input
        type="text"
        placeholder="your name"
        {...register("name", { required: true, maxLength: 80 })}
        className="outline-none border-0 p-0 mx-2 focus:ring-0 placeholder:text-center placeholder:text-lg border-b border-gray 
        focus:border-gray bg-transparent"
      />
      and I want to discuss a potential project. You can email me at
      <input type="email" placeholder="your@email" {...register("email", {})}  className="outline-none border-0 p-0 mx-2 focus:ring-0 placeholder:text-center placeholder:text-lg border-b border-gray 
        focus:border-gray bg-transparent"/>
      or reach out to me on
      <input
        type="tel"
        placeholder="your phone"
        {...register("phone_number", {})}
        className="outline-none border-0 p-0 mx-2 focus:ring-0 placeholder:text-center placeholder:text-lg border-b border-gray 
        focus:border-gray bg-transparent"
      />
      Here are some details about my work: <br />
      <textarea {...register("project_details", {})} 
      placeholder="My project is about..."
      rows={3}
      className="w-full outline-none border-0 p-0 mx-0 focus:ring-0  placeholder:text-lg border-b border-gray 
        focus:border-gray bg-transparent" />
      <input type="submit" value="send request" className="mt-8 font-medium inline-block capitalize text-lg sm:text-xl py-2 sm:py-3 px-6 sm:px-8 border-2 border-solid border-dark dark:border-light rounded cursor-pointer" />
    </form>
  );
}
