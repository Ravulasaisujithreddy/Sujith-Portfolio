import React from 'react';

const Section = React.forwardRef(({ title, children, className, ...props }, ref) => (
  <section ref={ref} className={`mb-16 mx-4 ${className}`} {...props}>
    <h3 className="text-2xl font-semibold mb-6 text-center">{title}</h3>
    {children}
  </section>
));
Section.displayName = "Section";

export default Section;
