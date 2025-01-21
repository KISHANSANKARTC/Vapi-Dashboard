import React, { useState } from 'react';
import { Move } from 'lucide-react';

interface DraggableGraphProps {
  title: string;
  children: React.ReactNode;
  onExpand?: () => void;
}

export function DraggableGraph({ title, children, onExpand }: DraggableGraphProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStart({
      x: e.clientX - position.x,
      y: e.clientY - position.y
    });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div
      className="absolute bg-gray-800/50 backdrop-blur-md p-6 rounded-2xl shadow-lg cursor-move"
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
        zIndex: isDragging ? 10 : 1,
        transition: isDragging ? 'none' : 'transform 0.1s ease-out'
      }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <div className="flex items-center space-x-2">
          {onExpand && (
            <button
              onClick={onExpand}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Move className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>
      {children}
    </div>
  );
}