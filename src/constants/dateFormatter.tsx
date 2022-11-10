export const dateFormatter = ( admission:string ) =>{
    const date = new Date(admission).toLocaleDateString('pt-BR', {timeZone: 'UTC'});
    
    return date;
};