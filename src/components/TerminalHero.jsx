import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const TerminalHero = () => {
  const [currentCommand, setCurrentCommand] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  const commands = [
    { 
      command: 'whoami', 
      output: 'Vinay Naik V - Computer Science Student & Developer' 
    },
    { 
      command: 'ls skills/', 
      output: 'React.js  Python  JavaScript  Node.js  Machine-Learning  Blockchain' 
    },
    { 
      command: 'cat projects.txt', 
      output: 'AI-Ambulance-System  Evidence-Chaining-Blockchain  Plant-Disease-Detection' 
    },
    { 
      command: 'echo $PASSION', 
      output: 'Building innovative solutions with cutting-edge technology' 
    },
    { 
      command: 'git status', 
      output: 'On branch main - Ready to collaborate on exciting projects!' 
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const typeCommand = async () => {
      const current = commands[currentCommand];
      
      // Type command
      for (let i = 0; i <= current.command.length; i++) {
        setDisplayText(`$ ${current.command.slice(0, i)}`);
        await new Promise(resolve => setTimeout(resolve, 100));
      }
      
      // Wait a bit
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Show output
      setDisplayText(`$ ${current.command}\n${current.output}`);
      
      // Wait before next command
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Move to next command
      setCurrentCommand((prev) => (prev + 1) % commands.length);
    };

    typeCommand();
  }, [currentCommand]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-gray-900 rounded-lg p-6 font-mono text-sm max-w-2xl mx-auto shadow-2xl border border-secondary/20"
    >
      {/* Terminal Header */}
      <div className="flex items-center mb-4 pb-2 border-b border-gray-700">
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <div className="flex-1 text-center text-gray-400 text-xs">
          vinay@portfolio:~
        </div>
      </div>

      {/* Terminal Content */}
      <div className="text-green-400 min-h-[120px]">
        <pre className="whitespace-pre-wrap">
          {displayText}
          {showCursor && <span className="bg-green-400 text-gray-900">█</span>}
        </pre>
      </div>

      {/* Command Indicators */}
      <div className="flex justify-center mt-4 space-x-2">
        {commands.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentCommand ? 'bg-secondary' : 'bg-gray-600'
            }`}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default TerminalHero;
