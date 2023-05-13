export class Customer {
  customer_number?: number;
  first_name?: string;
  last_name?: string;
  date_birth?: Date | undefined;
  ssn?: string;
  email?: string;
  primary_address?: Address = new Address();
  mobile_phone_number?: string;
  join_date: Date = new Date();

  public constructor(init?: Partial<Customer>) {
    Object.assign(this, init);
    if (init != undefined) {
      if (init.date_birth != undefined) {
        this.date_birth = new Date(init.date_birth);
      }
      if (init.join_date != undefined) {
        this.join_date = new Date(init.join_date);
      }
    }
  }
}

export class Address {
  address_line_1?: string;
  city?: string;
  state?: string;
  zip_code?: number;
  public constructor(init?: Partial<Address>) {
    Object.assign(this, init);
  }
}

export const api = {
  getCustomers: (url: string): Promise<Customer[]> => {
    return fetch(url, { method: "GET" })
      .then((response) => response.json())
      .then((data: any): Customer[] => <Customer[]>data);
  },
  postCustomer: (url: string, body: Customer): Promise<Boolean> => {
    return fetch(url, { method: "POST", body: JSON.stringify(body) }).then(
      (response) => response.ok
    );
  },
};
