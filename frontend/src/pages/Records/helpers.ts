import moment from  'moment';

export function formatDate(date: string){
  return moment(date).format("DD/MM/YYYY HH:mm");
}