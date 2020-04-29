/*
* Generally, access keys / api keys should be environment variables
*/
export const API_IPSTACK_ACCESS_KEY="27f35adecc25b4c8a1be49b868884337";
export const AGM_API_KEY="AIzaSyB57izT1wImWEeBHFKrOIk3_b3haMQtU6g";

export interface IpResponse {
    ip: string;
}

export interface LocationResponse {
    ip: string;
    city: string;
    latitude: number;
    longitude: number;
}