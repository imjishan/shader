import React from 'react';

const GridOverlay: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-50 flex flex-col justify-between">
      {/* Center Vertical Line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-swiss-red transform -translate-x-1/2 opacity-70"></div>
      
      {/* Header Horizontal Line - Positioned to match the header height */}
      <div className="absolute top-24 left-0 right-0 h-px bg-swiss-red opacity-70"></div>

      {/* Top Center Square Marker */}
      <div className="absolute top-2 left-1/2 w-3 h-3 bg-swiss-red transform -translate-x-1/2 translate-y-8"></div>
    </div>
  );
};

export default GridOverlay;