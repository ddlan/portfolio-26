import React, { useState, useRef, useEffect } from 'react';
import './MusicPlayerShowcase.css';
import { MindMap } from '../features/MindMap';

// Placeholder SVG data URIs to replace missing asset imports
const musicPointer =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='13' height='90' viewBox='0 0 13 90'/%3E";
const mask =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='102' height='18' viewBox='0 0 102 18'/%3E";
const musicPointer1 =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='13' height='90' viewBox='0 0 13 90'/%3E";
const mask1 =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='102' height='18' viewBox='0 0 102 18'/%3E";
const musicPointer2 =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='13' height='90' viewBox='0 0 13 90'/%3E";
const mask2 =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='102' height='18' viewBox='0 0 102 18'/%3E";
interface TextProps {
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}
const FancySmancyProjectTitle = ({ className = '', style, children }: TextProps) => (
  <h2
    className={`fancy-smancy-project-title ${className}`}
    style={style}
  >
    {children || 'Fancy smancy project title'}
  </h2>
);
const ProjectDescription = ({ className = '', style, children }: TextProps) => (
  <p
    className={`project-description ${className}`}
    style={style}
  >
    {children ||
      'An ever-present brilliant friend and conversationalist, keeping you informed and organized, helping you be a better version of yourself.'}
  </p>
);
const MusicPlayerButton = ({
  audioName,
  pointerImg,
  maskImg,
  pointerOffset = '-48.66px',
  href,
  linkLabel = 'Live Demo Link',
}: {
  audioName: string;
  pointerImg: string;
  maskImg: string;
  pointerOffset?: string;
  href?: string;
  linkLabel?: string;
}) => {
  const inner = (
    <div
      role={href ? undefined : 'button'}
      tabIndex={href ? undefined : 0}
      className="music-player-button-inner"
    >
      <div className="music-player-audio-row">
        <img
          src={
            'https://storage.googleapis.com/storage.magicpath.ai/user/368065211384610816/figma-assets/9e4e9fb4-b63d-4a63-a731-667d01a792ae.svg'
          }
          alt="Play"
          className="music-player-audio-icon"
        />
        <span className="music-player-audio-label">
          {audioName}
        </span>
      </div>
      <div className="music-player-link-container">
        <span className="music-player-link-text">
          <span className="music-player-link-base">
            {linkLabel}
          </span>
          <span className="music-player-link-hover">
            <span>
              {linkLabel}
            </span>
          </span>
          <span className="music-pointer-hover-container">
            <img
              className="music-pointer-icon"
              src="/music-pointer.svg"
              alt=""
            />
          </span>
        </span>
        <div
          className="music-player-pointer-container"
          style={{ top: pointerOffset }}
        >
          <img
            className="music-player-pointer-icon"
            src={pointerImg}
            alt=""
          />
          <img
            className="music-player-mask-icon"
            src={maskImg}
            alt=""
          />
        </div>
      </div>
    </div>
  );
  return (
    <div className="music-player-button-wrapper">
      {href ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
        >
          {inner}
        </a>
      ) : (
        inner
      )}
    </div>
  );
};
const ExperienceLine = ({
  name,
  date,
  isPresent = false,
}: {
  name: string;
  date?: string;
  isPresent?: boolean;
}) => (
  <div className="experience-line">
    <img
      src="https://storage.googleapis.com/storage.magicpath.ai/user/368065211384610816/figma-assets/e2d8e1c5-eb18-4dbf-8b07-374d2f5906b2.svg"
      alt=""
      className="experience-line-background"
    />
    <span className="experience-line-name">
      {name}
    </span>
    <div className="experience-line-date-group">
      <span className="experience-line-date">
        {isPresent ? 'Present' : date}
      </span>
      {isPresent && (
        <img
          src="https://storage.googleapis.com/storage.magicpath.ai/user/368065211384610816/figma-assets/b33b088a-5e6a-4ada-ab4c-3728833039d0.svg"
          alt=""
          className="experience-line-present-icon"
        />
      )}
    </div>
  </div>
);
export const MusicPlayerShowcase = () => {
  const mainRef = useRef<HTMLElement>(null);
  const [showQuestionMark, setShowQuestionMark] = useState(false);
  let step = 1;

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowQuestionMark(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const main = mainRef.current;
    if (!main) return;
    const els = main.querySelectorAll('.section-animate');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('section-visible');
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    els.forEach((el) => observer.observe(el));
    return () => els.forEach((el) => observer.unobserve(el));
  }, []);

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <div className="music-player-showcase-wrapper">
      <div className="music-player-showcase-flex" />

      <main
        ref={mainRef}
        className="music-player-showcase-main"
      >
        <header className="music-player-header">
          <div className="header-title-wrapper">
            <div className="header-line">
              <h1 className="header-title-main">
                Danny Lan
              </h1>
              <h1 className="header-title-accent">
                bef
              </h1>
            </div>
            <div className="header-line header-line-2">
              <p className="header-subtitle">
                Frontend Engineer
                <span className={`question-mark ${showQuestionMark ? 'question-mark-visible' : ''}`}>
                  ?
                </span>
              </p>
            </div>
          </div>

          <nav className="header-line header-line-3 header-nav">
            <a
              href="https://github.com/ddlan"
              target="_blank"
              rel="noopener noreferrer"
              className="header-nav-link"
            >
              Github
            </a>
            <a
              href="mailto:L.danny18725@gmail.com"
              className="header-nav-link"
            >
              Email
            </a>
            <a
              href="/Danny_Lan_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="header-nav-link"
            >
              Resume
            </a>
          </nav>
        </header>

        <div
          className="guitar-container-animate"
          aria-label="Guitar container"
        >
          <div
            className="guitar-image-container"
            aria-label="Guitar image container"
          >
            <img
              src="/guitar.png"
              alt=""
              draggable={false}
              onContextMenu={(e) => e.preventDefault()}
              className="guitar-image"
            />
          </div>
          <div
            className="rive-container"
            aria-label="Rive container"
          >
            <iframe
              className="rive-iframe"
              src="https://rive.app/s/ecQhN-dvtUyCwG2Za8Qx6w/embed?runtime=rive-renderer"
              title="Rive"
              allowFullScreen
              allow="autoplay"
            />
          </div>
        </div>

        <section
          className="section-animate showcase-section"
        >
          <p className="intro-quote">
            Every day I become less of a code monkey and more of an agent wrangler.
          </p>
          <p className="intro-description">
            See how my brain works:
          </p>
        </section>

        <MindMap />

        <section
          className="section-animate showcase-section"
        >
          <span className="section-number">
            0{step++}
          </span>
          <FancySmancyProjectTitle>Beam</FancySmancyProjectTitle>
          <ProjectDescription>
            Social Media for your real friends. A finsta that feels real. iOS with Ruby backend. YC rejected (we tried).
          </ProjectDescription>
          <div className="incite-wrapper">
            <MusicPlayerButton
              audioName="btn-hover.mp3"
              pointerImg={musicPointer1}
              maskImg={mask1}
              href="https://docs.google.com/presentation/d/1Nhxk3UBKSdHevmk1tuECUGzZJ00nyvNmB1mFkz34lhg/edit?usp=sharing"
              linkLabel="Read the pitch"
            />
            <img
              src="/beam.svg"
              alt=""
              className='logo'
            />
          </div>

        </section>

        <section
          className="section-animate showcase-section"
        >
          <span className="section-number">
            0{step++}
          </span>
          <FancySmancyProjectTitle>LeReddit</FancySmancyProjectTitle>
          <ProjectDescription>
            Doomscrolling but you learn a language, so you're not really wasting your time. Swift.
          </ProjectDescription>
          <div className="incite-wrapper">
            <MusicPlayerButton
              audioName="btn-hover.mp3"
              pointerImg={musicPointer1}
              maskImg={mask1}
              href="https://github.com/ddlan/LeReddit"
              linkLabel="View on Github"
            />
            <img
              src="/lereddit-orange.png"
              alt=""
              className='logo lereddit-logo'
            />
          </div>

        </section>

        <section
          className="section-animate showcase-section"
        >
          <span className="section-number">
            0{step++}
          </span>
          <FancySmancyProjectTitle>Cat's Portfolio</FancySmancyProjectTitle>
          <ProjectDescription>
            Playing around with Typescript and animations. If you've got the vision, I can build it.
          </ProjectDescription>
          <div className="incite-wrapper">
            <MusicPlayerButton
              audioName="btn-hover.mp3"
              pointerImg={musicPointer1}
              maskImg={mask1}
              href="https://catherinehoang44.github.io/"
              linkLabel="Check it out"
            />
            <img
              src="/cat.png"
              alt=""
              className='logo cat-logo'
            />
          </div>

        </section>

        <section
          className="section-animate showcase-section"
        >
          <span className="section-number">
            0{step++}
          </span>
          <FancySmancyProjectTitle>InCite</FancySmancyProjectTitle>
          <ProjectDescription>
            Chrome extension for one-click MLA, APA, Chicago, or Harvard citations.
            save multiple bibliographies and copy to clipboard. React + MobX, microlink metascraper.
          </ProjectDescription>
          <div className="incite-wrapper">
            <MusicPlayerButton
              audioName="btn-hover.mp3"
              pointerImg={musicPointer1}
              maskImg={mask1}
              href="https://github.com/brucejh99/inCite"
              linkLabel="View on GitHub"
            />
            <img
              src="/incite.png"
              alt=""
              className='logo incite-logo'
            />
          </div>

        </section>

        <section
          className="section-animate showcase-section"
        >
          <span className="section-number">
            0{step++}
          </span>
          <FancySmancyProjectTitle>NightBall</FancySmancyProjectTitle>
          <ProjectDescription>
            Colourful iOS/Android arcade game. iOS built
            with Swift, SpriteKit, and StoreKit. Android
            with GameMaker Studio.
          </ProjectDescription>
          <div className='incite-wrapper'>
            <MusicPlayerButton
              audioName="btn-hover.mp3"
              pointerImg={musicPointer2}
              maskImg={mask2}
              pointerOffset="-48.66px"
              href="https://github.com/jeffreysfllo24/NightBall"
              linkLabel="View on GitHub"
            />
            <img
                src="/nightball.png"
                alt=""
                className='logo incite-logo'
            />
          </div>
        </section>

        {/* <section
          className="section-animate showcase-section"
        >
          <span className="section-number">
            0{step++}
          </span>
          <FancySmancyProjectTitle>Altocumulus Industries</FancySmancyProjectTitle>
          <ProjectDescription>
            ML app that identifies people in images by comparing uploads against a trained dataset.
            Python backend with Indico.io for facial localization and recognition, plus a public web
            frontend. Worked with ML APIs for security use cases.
          </ProjectDescription>
          <div className="incite-wrapper">
            <MusicPlayerButton
              audioName="btn-hover.mp3"
              pointerImg={musicPointer}
              maskImg={mask}
              href="https://devpost.com/software/altocumulus-industries"
              linkLabel="View on Devpost"
            />
            <img
              src="/alto.svg"
              alt=""
              className='logo incite-logo'
            />
          </div>
        </section> */}

        <img
          src="https://storage.googleapis.com/storage.magicpath.ai/user/368065211384610816/figma-assets/fd6a7edb-0ee8-48b6-8e22-cc6b6592ab75.svg"
          alt="Divider"
          className="divider-image"
        />

        <section className="section-animate showcase-section">
          <h2 className="experience-section-title">
            Experience
          </h2>
          <ExperienceLine name="Snowflake" isPresent={true} />
          <ExperienceLine name="Instabase" date="Aug 2022 - May 2025" />
          <ExperienceLine name="Coffee Meets Bagel" date="Sep 2021 - Dec 2021" />
          <ExperienceLine name="Apple" date="Jan 2021 - Apr 2021" />
          <ExperienceLine name="Yahoo" date="Jan 2019 - Apr 2019" />
        </section>

        <footer className="section-animate showcase-footer">
          <a
            href="#top"
            onClick={scrollToTop}
            className="footer-link"
          >
            Back to top
          </a>
        </footer>
      </main>

      <div className="music-player-showcase-flex" />
    </div>
  );
};
