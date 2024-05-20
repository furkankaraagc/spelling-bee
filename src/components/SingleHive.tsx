'use client';
import {useState} from 'react';

interface Props {
  style: React.CSSProperties;
  text: string;
  fill: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  inputRef: React.RefObject<HTMLInputElement>;
}

const SingleHive = ({style, text, fill, setInputValue, inputRef}: Props) => {
  const [active, setActive] = useState(false);
  const onClickHandler = (e: React.MouseEvent<SVGPolygonElement>) => {
    console.log(e.currentTarget);
    // inputRef.current?.focus();
    setInputValue((prev) => prev + e.target.id);
  };
  return (
    <svg
      style={style}
      className={`w-[100px]   h-[86px] absolute`}
      viewBox='0 0 120 103.92304845413263'
      data-testid='hive-cell-outer'
    >
      <polygon
        id={text}
        onClick={onClickHandler}
        onMouseDown={(e) => {
          e.stopPropagation();
          setActive(true);
        }}
        onMouseUp={() => setActive(false)}
        className={`cursor-pointer transition-all`}
        points='0,51.96152422706631 30,0 90,0 120,51.96152422706631 90,103.92304845413263 30,103.92304845413263'
        stroke='white'
        strokeWidth={`${active ? 14 : 10}`}
        style={{fill: fill}}
      ></polygon>
      <text
        onMouseDown={(e) => {
          e.stopPropagation();
          setActive(true);
        }}
        onMouseUp={() => setActive(false)}
        className='text-white text-2xl font-medium cursor-pointer select-none'
        x='55'
        y='60'
        // d60'0.10em'
      >
        {text}
      </text>
    </svg>
  );
};

export default SingleHive;
