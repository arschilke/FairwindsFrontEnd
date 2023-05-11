export type Customer = {
    customer_number: number,
    first_name: string,
    last_name: string,
    date_birth: string,
    ssn: string,
    email: string,
    primary_address: Address
    mobile_phone_number: string,
    join_date: string
}

export type Address = {
    address_line_1: string,
    city: string,
    state: string,
    zip_code: number
}

export async function request<TResponse>(
    url: string,
    config: RequestInit = { 'method': "GET" }
): Promise<TResponse> {
    return await fetch(url, config)
        .then((response) => response.json())
        .then((data) => data as TResponse);

}

