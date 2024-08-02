import React from 'react';
import { Box } from '@mui/material';
import { keyframes } from '@mui/system';

const slideLeft = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

const CodeBackground = () => {
  const codeSnippets = [
    'const App = () => { return <div>Hello World</div>; };',
    'function fibonacci(n) { return n <= 1 ? n : fibonacci(n-1) + fibonacci(n-2); }',
    'import React, { useState, useEffect } from "react";',
    'const [data, setData] = useState(null);',
    'useEffect(() => { fetchData(); }, []);',
    'export default function MyComponent() { return <h1>Hello</h1>; }',
    'const sum = (a, b) => a + b;',
    'class Node { constructor(value) { this.value = value; this.next = null; } }',
    'const sortedArray = array.sort((a, b) => a - b);',
    'const promise = new Promise((resolve, reject) => { /* ... */ });',
  ];

  return (
    <Box
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        overflow: 'hidden',
        zIndex: 0,
        opacity: 0.1,
        pointerEvents: 'none',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          animation: `${slideLeft} 50s linear infinite`,
          whiteSpace: 'nowrap',
          height: '100%', // Ensure it covers the full height
        }}
      >
        {[...Array(12)].map((_, i) => ( // Increase the number of repetitions
          <Box key={i} sx={{ display: 'flex', flexWrap: 'nowrap' }}>
            {codeSnippets.map((snippet, index) => (
              <Box
                key={index}
                sx={{
                  padding: 2,
                  fontFamily: 'monospace',
                  fontSize: '0.8rem',
                  color: 'primary.main',
                }}
              >
                {snippet}
              </Box>
            ))}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default CodeBackground;