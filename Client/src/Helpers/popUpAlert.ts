import Swal from 'sweetalert2'
import { IAlert } from '../utils/interfaces';

export default function popUpAlert(props: IAlert){    
    const {icon,title,width} = props;
    return Swal.fire({
    toast: true,
    position: 'top-end',
    icon: icon,
    title: title,
    showConfirmButton: false,
    timer: 2000,
    width: width,
  })}