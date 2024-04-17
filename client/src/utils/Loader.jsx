import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { PuffLoader } from 'react-spinners';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    height: '150px',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function Dialog() {
    const [open, setOpen] = React.useState(true);

    React.useEffect(() => {
        const timer = setTimeout(() => {
            setOpen(false);
            window.location.href = '/profile';
        }, 2000);

        // Clear the timer when the component unmounts or the modal is closed
        return () => clearTimeout(timer);
    }, []); // Empty dependency array ensures that this effect runs only once after initial render

    return (
        <div>
            <Modal
                open={open}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                id="modal-modal"
            >
                <Box sx={style}>
                    <div className='flex justify-center items-center m-auto'>
                        <PuffLoader color="#36d7b7" />
                    </div>
                </Box>
            </Modal>
        </div>
    );
}
