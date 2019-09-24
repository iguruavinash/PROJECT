export interface ICustomer {
    'id': 'Number';
    'firstName': 'String';
    'lastName': 'String';
    'gender': 'String';
    'address': 'String';
    'city': 'String';
    'state': {
        'abbreviation': 'String';
        'name': 'String'
    };
    'latitude'?: 'Number';
    'longitude'?: 'Number';
}

export interface IOrder {
    productName: string;
    itemCost: number;
}
