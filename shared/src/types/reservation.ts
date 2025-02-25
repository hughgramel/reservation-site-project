export interface Reservation {
    id: number,
    name: string,
    email: string,
    phone: number,
    date: string,
    time: string,
    specialRequests: string
}
  
// This exports the CreateReservationDto type
export type CreateReservationDto = Omit<Reservation, 'id'>;

// This exports the UpdateReservationDto type
export type UpdateReservationDto = Partial<Omit<Reservation, 'id'>>;
  