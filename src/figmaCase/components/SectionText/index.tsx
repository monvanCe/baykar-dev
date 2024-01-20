import React from 'react';
import './index.css';

interface SectionTextProps {
  alignment?: 'Left' | 'Center' | 'Right';
  color?: string;
  caption?: React.ReactNode;
  headline1?: React.ReactNode;
  headline2?: React.ReactNode;
  text?: string;
  button1?: React.ReactNode;
  button2?: React.ReactNode;
  button3?: React.ReactNode;
}

export const SectionText: React.FC<SectionTextProps> = (props) => {
  const alignment = props?.alignment ?? 'Left';
  const {
    caption,
    headline1,
    headline2,
    text,
    button1,
    button2,
    button3,
    color,
  } = props;

  const alignments: { [key in 'Left' | 'Center' | 'Right']: string } = {
    Left: 'start',
    Center: 'center',
    Right: 'end',
  };

  return (
    <div
      className={`d-flex flex-column align-items-${alignments[alignment]} h-100 justify-content-between`}
    >
      {caption && <div className="caption">{caption}</div>}
      {headline1 && (
        <div style={{ color: color ? color : '#0f172a' }} className="headline1">
          {headline1}
        </div>
      )}
      {headline2 && (
        <div style={{ color: color ? color : '#0f172a' }} className="headline2">
          {headline2}
        </div>
      )}
      {text && (
        <div style={{ color: color ? color : '#0f172a' }} className="text">
          {text}
        </div>
      )}
      <div className="d-flex sectionTextButtonContainer">
        {button1 && <div className="h-100 sectionTextButton">{button1}</div>}
        {button2 && <div className="h-100 sectionTextButton">{button2}</div>}
        {button3 && <div className="h-100 sectionTextButton">{button3}</div>}
      </div>
    </div>
  );
};
