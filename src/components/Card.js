import React from 'react';

const Card = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={`rounded-xl border bg-white text-gray-900 shadow ${className}`} {...props} />
));
Card.displayName = "Card";

const CardContent = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={`p-6 pt-2 ${className}`} {...props} />
));
CardContent.displayName = "CardContent";



export { Card,CardContent };
