import ForceGraph3D from 'react-force-graph-3d';
import { useEffect, useRef } from 'react';
import { UnrealBloomPass } from 'https://esm.sh/three/examples/jsm/postprocessing/UnrealBloomPass.js';

import './MindMap.css';

const graphData = {
  nodes: [
    { id: 'Music', group: 1, isBig: true },
    { id: 'Guitar', group: 1 },
    { id: 'Bass Guitar', group: 1 },
    { id: 'Youtube Covers', group: 1 },
    { id: 'Portfolio', group: 1, isBig: true},

    { id: 'Projects', group: 2, isBig: true },
    { id: 'Beam', group: 2 },
    { id: 'LeReddit', group: 2 },
    { id: 'Cat\'s Portfolio', group: 2 },
    { id: 'CyberArena', group: 2 },
    { id: 'InCite', group: 2 },
    { id: 'NightBall', group: 2 },

    { id: 'Startup', group: 3 },
    { id: 'YC Interview', group: 3 },

    { id: 'Technologies', group: 4, isBig: true },
    { id: 'React', group: 4 },
    { id: 'Typescript', group: 4 },
    { id: 'Swift', group: 4 },
    { id: 'iOS', group: 4 },
    { id: 'Android', group: 4 },
    { id: 'GameMaker Studio', group: 4 },
    { id: 'Game Dev', group: 4 },
    { id: 'Chrome Extension', group: 4 },

    { id: 'University of Waterloo', group: 5 },
    { id: 'Wilfrid Laurier University', group: 5 },
    { id: 'CS/BBA', group: 5 },
    { id: 'Entrepreneurship Society', group: 5 },
    { id: 'Entrepreneurship Specialization', group: 5 },
  ],
  links: [
    { source: 'Music', target: 'Guitar' },
    { source: 'Music', target: 'Bass Guitar' },
    { source: 'Music', target: 'Youtube Covers' },
    { source: 'Guitar', target: 'Youtube Covers' },
    { source: 'Bass Guitar', target: 'Youtube Covers' },
    { source: 'Music', target: 'Portfolio' },
    { source: 'Projects', target: 'Portfolio' },

    { source: 'Projects', target: 'Beam' },
    { source: 'Projects', target: 'LeReddit' },
    { source: 'Projects', target: 'Cat\'s Portfolio' },
    { source: 'Projects', target: 'CyberArena' },
    { source: 'Projects', target: 'InCite' },
    { source: 'Projects', target: 'NightBall' },

    { source: 'Startup', target: 'Beam' },
    { source: 'Startup', target: 'YC Interview' },
    { source: 'Startup', target: 'Entrepreneurship Specialization' },
    { source: 'Startup', target: 'Entrepreneurship Society' },
    { source: 'Beam', target: 'YC Interview' },

    { source: 'Game Dev', target: 'CyberArena' },
    { source: 'Game Dev', target: 'NightBall' },
    { source: 'Game Dev', target: 'GameMaker Studio' },

    { source: 'Technologies', target: 'React' },
    { source: 'Technologies', target: 'Typescript' },
    { source: 'Technologies', target: 'Swift' },
    { source: 'Technologies', target: 'Android' },
    { source: 'React', target: 'Typescript' },
    { source: 'React', target: 'InCite' },
    { source: 'Chrome Extension', target: 'InCite' },
    { source: 'Swift', target: 'iOS' },
    { source: 'iOS', target: 'NightBall'  },
    { source: 'iOS', target: 'Beam'  },
    { source: 'iOS', target: 'LeReddit'  },
    { source: 'Android', target: 'NightBall' },

    { source: 'University of Waterloo', target: 'Wilfrid Laurier University' },
    { source: 'Wilfrid Laurier University', target: 'Entrepreneurship Specialization' },
    { source: 'University of Waterloo', target: 'CS/BBA' },
    { source: 'Wilfrid Laurier University', target: 'CS/BBA' },
    { source: 'Entrepreneurship Specialization', target: 'CS/BBA' },
    { source: 'University of Waterloo', target: 'Entrepreneurship Society' },
  ],
}

export const MindMap = () => {
  const fgRef = useRef<any>(null);

  useEffect(() => {
    if (fgRef.current) {
      fgRef.current.controls().noZoom = true; 
      fgRef.current.d3Force('link').distance((link: any) => 
        link.source.group !== link.target.group ? 100 : 50
      );
      const bloomPass = new UnrealBloomPass();
      bloomPass.strength = 0.8;
      bloomPass.radius = 0.1;
      bloomPass.threshold = 0.1;
      fgRef.current.postProcessingComposer().addPass(bloomPass);
    }
   
  }, []);

  return (
    <div className="mindmap-container">
      <ForceGraph3D
        graphData={graphData}
        nodeAutoColorBy="group"
        nodeLabel="id"
        nodeVal={node => node.isBig ? 20 : 5}
        width={960}
        ref={fgRef}
      />
    </div>
  )
}