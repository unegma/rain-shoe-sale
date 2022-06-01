import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Modal as ModalMaterial } from '@mui/material';

declare var process : {
  env: {
    REACT_APP_REDEEMABLE_ERC20_DECIMALS: string
  }
}
const REDEEMABLE_ERC20_DECIMALS = parseInt(process.env.REACT_APP_REDEEMABLE_ERC20_DECIMALS); // See here for more info: https://docs.openzeppelin.com/contracts/3.x/erc20#a-note-on-decimals

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function Modal({modalOpen, setModalOpen, initiateBuy}: {modalOpen: boolean, setModalOpen: any, initiateBuy: any}) {

  return (
    <div>
      <ModalMaterial
        open={modalOpen}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box component="div" sx={style}>
          {/*<img className="modalImage" src={displayedImage} alt="#" /><br/>*/}
          {/*<Typography className="modalText">Demo, see console for data.</Typography>*/}

          <div className="buttons-box">
            <Button className="fifty-percent-button" variant="outlined" onClick={() => {setModalOpen(false)}}>Close</Button>
            <Button className="fifty-percent-button" variant="contained" onClick={initiateBuy}>Buy a Shoe!</Button><br/>
          </div>

        </Box>
      </ModalMaterial>
    </div>
  );
}
