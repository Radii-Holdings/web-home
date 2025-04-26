"use client";
import React, { useEffect, useState } from "react";

const ViewCounter = ({ slug }) => {
  const [views, setViews] = useState(0);

  useEffect(() => {
    const fetchViews = async () => {
      try {
        const response = await fetch(`/api/views?slug=${slug}`);
        const data = await response.json();

        if (response.ok) {
          setViews(data.views);
        } else {
          console.error('Error fetching views:', data.error);
        }
      } catch (error) {
        console.error('Error fetching views:', error);
      }
    };

    const incrementViews = async () => {
      try {
        const response = await fetch('/api/views', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ slug }),
        });

        const data = await response.json();

        if (!response.ok) {
          console.error('Error incrementing views:', data.error);
        }
      } catch (error) {
        console.error('Error incrementing views:', error);
      }
    };

    fetchViews();
    incrementViews();
  }, [slug]);

  return <div>{views} views</div>;
};

export default ViewCounter;
