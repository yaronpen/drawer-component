const Trash = ({ callback, user }) => {

  // console.log(user)
  return (
    <svg onClick={() => callback(user)} width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg"> 
      <path d="M6.40013 0.800003C5.74195 0.800003 5.20013 1.34182 5.20013 2V2.8H2.06185C2.03939 2.79625 2.01665 2.79442 1.99388 2.79453C1.9745 2.79495 1.95518 2.79678 1.93607 2.8H1.20013C1.14713 2.79925 1.0945 2.80905 1.04531 2.82881C0.996126 2.84858 0.951358 2.87792 0.91361 2.91514C0.875862 2.95236 0.845887 2.99671 0.825428 3.04561C0.804969 3.09451 0.794434 3.14699 0.794434 3.2C0.794434 3.25301 0.804969 3.30549 0.825428 3.3544C0.845887 3.4033 0.875862 3.44765 0.91361 3.48487C0.951358 3.52208 0.996126 3.55143 1.04531 3.57119C1.0945 3.59096 1.14713 3.60075 1.20013 3.6H1.60013V18C1.60013 18.6582 2.14195 19.2 2.80013 19.2H13.2001C13.8583 19.2 14.4001 18.6582 14.4001 18V3.6H14.8001C14.8531 3.60075 14.9058 3.59096 14.9549 3.57119C15.0041 3.55143 15.0489 3.52208 15.0866 3.48487C15.1244 3.44765 15.1544 3.4033 15.1748 3.3544C15.1953 3.30549 15.2058 3.25301 15.2058 3.2C15.2058 3.14699 15.1953 3.09451 15.1748 3.04561C15.1544 2.99671 15.1244 2.95236 15.0866 2.91514C15.0489 2.87792 15.0041 2.84858 14.9549 2.82881C14.9058 2.80905 14.8531 2.79925 14.8001 2.8H14.0673C14.0241 2.79286 13.98 2.79286 13.9368 2.8H10.8001V2C10.8001 1.34182 10.2583 0.800003 9.60013 0.800003H6.40013ZM6.40013 1.6H9.60013C9.82195 1.6 10.0001 1.77818 10.0001 2V2.8H6.00013V2C6.00013 1.77818 6.17831 1.6 6.40013 1.6ZM2.40013 3.6H5.53294C5.57614 3.60714 5.62021 3.60714 5.66341 3.6H10.3329C10.3761 3.60714 10.4202 3.60714 10.4634 3.6H13.6001V18C13.6001 18.2218 13.4219 18.4 13.2001 18.4H2.80013C2.57831 18.4 2.40013 18.2218 2.40013 18V3.6ZM5.59388 5.59453C5.48793 5.59619 5.38697 5.63981 5.31314 5.71583C5.23932 5.79185 5.19868 5.89405 5.20013 6V16C5.19938 16.053 5.20917 16.1056 5.22894 16.1548C5.2487 16.204 5.27805 16.2488 5.31527 16.2865C5.35248 16.3243 5.39683 16.3542 5.44574 16.3747C5.49464 16.3952 5.54712 16.4057 5.60013 16.4057C5.65314 16.4057 5.70562 16.3952 5.75452 16.3747C5.80343 16.3542 5.84778 16.3243 5.88499 16.2865C5.92221 16.2488 5.95156 16.204 5.97132 16.1548C5.99109 16.1056 6.00088 16.053 6.00013 16V6C6.00086 5.94649 5.99085 5.89337 5.97068 5.84379C5.95052 5.79422 5.92061 5.74919 5.88273 5.71138C5.84484 5.67357 5.79976 5.64375 5.75015 5.62368C5.70053 5.60361 5.64739 5.5937 5.59388 5.59453ZM7.99388 5.59453C7.88793 5.59619 7.78696 5.63981 7.71314 5.71583C7.63932 5.79185 7.59868 5.89405 7.60013 6V16C7.59938 16.053 7.60917 16.1056 7.62894 16.1548C7.6487 16.204 7.67805 16.2488 7.71527 16.2865C7.75248 16.3243 7.79683 16.3542 7.84574 16.3747C7.89464 16.3952 7.94712 16.4057 8.00013 16.4057C8.05314 16.4057 8.10562 16.3952 8.15452 16.3747C8.20343 16.3542 8.24778 16.3243 8.28499 16.2865C8.32221 16.2488 8.35156 16.204 8.37132 16.1548C8.39109 16.1056 8.40088 16.053 8.40013 16V6C8.40086 5.94649 8.39085 5.89337 8.37068 5.84379C8.35052 5.79422 8.32061 5.74919 8.28273 5.71138C8.24484 5.67357 8.19976 5.64375 8.15015 5.62368C8.10053 5.60361 8.04739 5.5937 7.99388 5.59453ZM10.3939 5.59453C10.2879 5.59619 10.187 5.63981 10.1131 5.71583C10.0393 5.79185 9.99868 5.89405 10.0001 6V16C9.99938 16.053 10.0092 16.1056 10.0289 16.1548C10.0487 16.204 10.078 16.2488 10.1153 16.2865C10.1525 16.3243 10.1968 16.3542 10.2457 16.3747C10.2946 16.3952 10.3471 16.4057 10.4001 16.4057C10.4531 16.4057 10.5056 16.3952 10.5545 16.3747C10.6034 16.3542 10.6478 16.3243 10.685 16.2865C10.7222 16.2488 10.7516 16.204 10.7713 16.1548C10.7911 16.1056 10.8009 16.053 10.8001 16V6C10.8009 5.94649 10.7908 5.89337 10.7707 5.84379C10.7505 5.79422 10.7206 5.74919 10.6827 5.71138C10.6448 5.67357 10.5998 5.64375 10.5501 5.62368C10.5005 5.60361 10.4474 5.5937 10.3939 5.59453Z" fill="#FF0B37" />
    </svg>

  )
}

export default Trash