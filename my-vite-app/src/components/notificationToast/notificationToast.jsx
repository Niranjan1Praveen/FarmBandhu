import React from 'react';
import './notificationToast.css'
import toast from '../../assets/images/icons/toast.svg'
const Notificationtoast = () => {
    const toastMessages = [
        "We will support more than 10 regional languages!",
        "Precision of models is to be enhanced",
        "We will implement object crop detection model using yolov8!"
    ]
    const [currentText, setCurrentText] = React.useState(toastMessages[0]);
    React.useEffect(() => {
        const intervalId = setInterval(() => {
          setTimeout(() => {
            const currentIndex = toastMessages.indexOf(currentText);
            const nextIndex = (currentIndex + 1) % toastMessages.length;
            setCurrentText(toastMessages[nextIndex]);
          }); 
    
        }, 10000);
    
        return () => clearInterval(intervalId);
      }, [currentText, toastMessages]);
    return (
        <div className='notification-toast'>
            <img src={toast} alt="notification-toast-icon" className='icon'/>
            <p className="toast-message">{currentText}</p>
        </div>
    );
}

export default Notificationtoast;
