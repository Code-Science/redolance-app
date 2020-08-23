import React from 'react';
import classes from './VideoHead.css';
import video from '../../assets/video.mp4';

const VideoHead = (props) => (
    <div className={classes.VideoBox}>
        <video className={classes.Video} autoPlay loop>
            <source src={video} type='video/mp4' />
        </video>
    </div>
);

export default VideoHead;