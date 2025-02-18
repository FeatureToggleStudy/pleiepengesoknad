import * as React from 'react';
import bemHelper from '../../utils/bemUtils';
import './counsellor.less';

interface CounsellorProps {
    theme: 'light' | 'dark';
}

const bem = bemHelper('counsellor');
const Counsellor: React.FunctionComponent<CounsellorProps> = ({ theme }) => (
    <div className={`${bem.block} ${bem.modifier(theme)}`}>
        <svg version="1.1" x="0px" y="0px" viewBox="0 0 51.9 88.3" xmlSpace="preserve">
            <g>
                <path
                    className="st0"
                    fillRule="evenodd"
                    clipRule="evenOdd"
                    fill="#e7e5e2"
                    d="M25.7,59.9c4.7,0,8.6-4.2,8.9-8.3l0-2.2c3.9-2.8,7-6.4,8.5-12h0.3c1,0,1.8-1,1.8-2.2v-6.7c0-0.9-0.4-1.6-1.1-2
		C43.3,14.2,35.3,4.5,25.6,4.5C15.8,4.5,7.9,14.3,7,26.8c-0.5,0.4-0.9,1.1-0.9,1.9v6.7c0,1.2,0.8,2.2,1.8,2.2h0.2
		c1.6,5.6,4.7,9.6,8.8,11.9l-0.1,1.9c0,0,0,0,0,0C16.8,55.5,20.8,59.9,25.7,59.9z"
                />
            </g>
            <path
                className="st1"
                fillRule="evenodd"
                clipRule="evenOdd"
                fill="#8c6026"
                d="M16.1,48.9c-3.5,0.3-5.5,0.7-7.3,1.2c0,0-5.8-8-5.2-23c0,0,2.1-25.1,22-24.9c19.9,0.2,21.6,21.3,21.6,21.3
	c1.5,6.5,0.1,18.1-3.9,26.8c-1.8-0.8-4.2-2.4-7.1-2c-0.2,0-0.3-0.2-0.1-0.3c2.7-1.9,5.7-7.2,7-11.8c0.2,0.1,0.4,0.2,0.6,0.2
	c0.8,0,1.4-0.7,1.4-1.5v-6.2c0-0.7-0.5-1.3-1.1-1.5c-0.2-3.5-3.6-3.8-5.3-3.8c-0.6,0-26.5,0.1-26.8,0.1c0,0-4.3-0.7-4.6,3.8
	c-0.5,0.2-0.9,0.8-0.9,1.4v6.2c0,0.8,0.6,1.5,1.4,1.5c0.2,0,0.3,0,0.5-0.1C9.7,41.7,12,46.3,16.1,48.9L16.1,48.9"
            />
            <path
                className="st2"
                fillRule="evenodd"
                clipRule="evenOdd"
                fill="#127a39"
                d="M49.7,67.5c0-3.6-2.5-8.3-5.6-11.4c-3.1-3.1-6.9-5-9.5-5.7c-0.1,4.3-4,8.6-8.9,8.6c-4.9,0-8.8-4.4-8.9-8.7
	c-2.5,0.6-6.4,2.6-9.6,5.8c-3.1,3.1-5.5,7.8-5.5,11.4v12.4c7.1,4.1,15.3,6.4,24,6.4s16.9-2.4,24-6.4V67.5z"
            />
            <path
                className="st3"
                fillRule="evenodd"
                clipRule="evenOdd"
                fill="#645f5a"
                d="M18.3,33.4c-1.3,0.1-1.6-1.8-1.2-3.1c0.1-0.2,0.5-1.3,1.2-1.3c0.7,0,1.1,0.6,1.1,0.7
	C19.9,30.9,19.7,33.3,18.3,33.4"
            />
            <path
                className="st3"
                fillRule="evenodd"
                clipRule="evenOdd"
                fill="#645f5a"
                d="M32.5,33.4c1.3,0.1,1.6-1.8,1.2-3.1C33.7,30,33.3,29,32.5,29c-0.7,0-1.1,0.6-1.1,0.7
	C30.8,30.9,31.1,33.3,32.5,33.4"
            />
            <path
                className="st4"
                fill="#5a524c"
                d="M25.8,35.6c0.7-0.1,1.2,0,1.4,0.2c0.7,0.8,0.4,1.7-0.7,2.4c-0.6,0.4-1.4,0.5-1.8,0.3c-0.2-0.1-0.5,0-0.6,0.2
	c-0.1,0.2,0,0.5,0.2,0.6c0.7,0.3,1.8,0.1,2.6-0.4c1.5-1,1.9-2.4,0.9-3.7c-0.4-0.5-1.2-0.6-2.2-0.5c-0.2,0-0.4,0.3-0.4,0.5
	C25.4,35.5,25.6,35.7,25.8,35.6z"
            />
            <path
                className="st4"
                fill="#5a524c"
                d="M30.8,42.2c0,0.1-0.1,0.3-0.3,0.5c-0.2,0.4-0.5,0.8-0.9,1.1c-1.1,1.1-2.5,1.7-4.2,1.6c-1.7-0.1-3.1-0.7-4.2-1.6
	c-0.4-0.4-0.7-0.7-1-1.1c-0.2-0.2-0.3-0.4-0.3-0.5c-0.1-0.2-0.4-0.3-0.6-0.2c-0.2,0.1-0.3,0.4-0.2,0.6c0.1,0.1,0.2,0.3,0.4,0.6
	c0.3,0.4,0.7,0.9,1.1,1.3c1.2,1.1,2.8,1.8,4.7,1.8c2,0.1,3.6-0.6,4.8-1.8c0.4-0.4,0.7-0.8,1-1.3c0.2-0.3,0.3-0.5,0.3-0.6
	c0.1-0.2,0-0.5-0.2-0.6C31.2,41.9,30.9,42,30.8,42.2z"
            />
        </svg>
    </div>
);

export default Counsellor;
