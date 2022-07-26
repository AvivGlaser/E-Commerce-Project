import  React, {useContext, useState} from 'react';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import { TimeContext } from '../../Context/TimeContext';
import { Button, Popover, Typography } from '@mui/material';

export default function ClockDisplay() {
  const clock: string = useContext(TimeContext)
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  return (
    <>
      <Button aria-describedby={id} className="clock-btn" onClick={handleClick} children={<WatchLaterIcon/>}/>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Typography sx={{ p: 1, fontSize: "14px", lineHeight: "2.5" }}>{clock}</Typography>
      </Popover>
    </>
  );
}