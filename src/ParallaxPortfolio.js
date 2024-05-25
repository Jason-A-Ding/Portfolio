// src/ParallaxPortfolio.js
import React from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { useSpring, animated } from 'react-spring';
import './ParallaxPortfolio.css';

const ParallaxPortfolio = () => {
  const cards = [
    {
      title: 'Artela Renaissance',
      description: 'A brief description of Project 1. Highlight key features and technologies used.',
      image: 'https://via.placeholder.com/300x200?text=Project+1',
      link: 'https://github.com/yourusername/project1',
      background: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDE0fHxiYWNrZ3JvdW5kfGVufDB8fHx8MTY1MDk2NzA4OQ&ixlib=rb-1.2.1&q=80&w=1080',
    },
    {
      title: 'Project 2',
      description: 'A brief description of Project 2. Highlight key features and technologies used.',
      image: 'https://via.placeholder.com/300x200?text=Project+2',
      link: 'https://github.com/yourusername/project2',
      background: 'https://images.unsplash.com/photo-1542728928-141b5a4b1b76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDI1fHxwYXR0ZXJufGVufDB8fHx8MTY1MDk2NzA4OQ&ixlib=rb-1.2.1&q=80&w=1080',
    },
    {
        title: 'Project 3',
        description: 'A brief description of Project 2. Highlight key features and technologies used.',
        image: 'https://via.placeholder.com/300x200?text=Project+2',
        link: 'https://github.com/yourusername/project2',
        background: 'https://images.unsplash.com/photo-1542728928-141b5a4b1b76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDI1fHxwYXR0ZXJufGVufDB8fHx8MTY1MDk2NzA4OQ&ixlib=rb-1.2.1&q=80&w=1080',
      },
      {
        title: 'Project 4',
        description: 'A brief description of Project 2. Highlight key features and technologies used.',
        image: 'https://via.placeholder.com/300x200?text=Project+2',
        link: 'https://github.com/yourusername/project2',
        background: 'https://images.unsplash.com/photo-1542728928-141b5a4b1b76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDI1fHxwYXR0ZXJufGVufDB8fHx8MTY1MDk2NzA4OQ&ixlib=rb-1.2.1&q=80&w=1080',
      },
    // Add more projects as needed
  ];

  return (
    <Parallax pages={cards.length + 1}>
      <ParallaxLayer
        offset={0}
        speed={0.5}
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f0f0f0' }}
      >
        <div className="title-section">
          <h1>My Portfolio</h1>
          <h3>Front-End Development Projects</h3>
        </div>
      </ParallaxLayer>

      {cards.map((card, index) => (
        <ParallaxLayer
          key={index}
          offset={index + 1}
          speed={0.5}
          style={{ backgroundImage: `url(${card.background})`, backgroundSize: 'cover' }}
        >
          <div className={`content-section ${index % 2 === 0 ? 'reverse' : ''}`}>
            <CardComponent card={card} />
            <div className="description-container">
            <div className="description">
            <h2>{card.title}</h2>
            <p>{card.description}</p>
            <a href={card.link} className="card-link" target="_blank" rel="noopener noreferrer">View Project</a>
            </div>
        </div>
    
            <div className="divider"></div>
          </div>
        </ParallaxLayer>
      ))}
    </Parallax>
  );
};

const CardComponent = ({ card }) => {
  const [props, set] = useSpring(() => ({
    transform: 'rotate(0deg)',
    config: { mass: 1, tension: 210, friction: 20 },
  }));

  return (
    <animated.div
      className="card-container"
      onMouseMove={() => set({ transform: 'rotate(5deg)' })}
      onMouseLeave={() => set({ transform: 'rotate(0deg)' })}
      style={props}
    >
      <div className="card">
        <img src={card.image} alt={card.title} />
      </div>
    </animated.div>

  );
};

export default ParallaxPortfolio;
