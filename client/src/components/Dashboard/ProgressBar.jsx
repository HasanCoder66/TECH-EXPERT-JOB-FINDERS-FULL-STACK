import * as React from 'react';
import PropTypes from 'prop-types';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function LinearProgressWithLabel(props) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }} >
      <Box sx={{ width: '100%', mr: 1 }} >
      <LinearProgress
          sx={{
            height: 16,
            borderRadius: 20,
            backgroundColor: '#FEF6F5', // Background color of the progress bar track
            '& .MuiLinearProgress-bar': {
              backgroundColor: '#ec4843', // Color of the progress bar itself
            },
          }}
          variant="determinate"
          {...props}
        />
      </Box>
      {/* <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">{`${Math.round(
          props.value,
        )}%`}</Typography>
      </Box> */}
    </Box>
  );
}

LinearProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate and buffer variants.
   * Value between 0 and 100.
   */
  value: PropTypes.number.isRequired,
};

export default function LinearWithValueLabel({setProgressTop}) {
  const [progress, setProgress] = React.useState(10);

  React.useEffect(() => {
    // const timer1 = setInterval(() => {
    //   setProgress((prevProgress) => (prevProgress >= 100 ? 10 : prevProgress + 10));
    // }, 800);
    // const timer2 = setInterval(() => {
    //     setProgressTop((prevProgress) => (prevProgress >= 100 ? 10 : prevProgress + 10));
    // }, 800);
    return () => {
      // clearInterval(timer1);
      // clearInterval(timer2);
    };
  }, []);

  return (
    <Box sx={{ width: '100%' }} style={{backgroundColor:'white'}} >
      <LinearProgressWithLabel value={progress} />
    </Box>
  );
}
