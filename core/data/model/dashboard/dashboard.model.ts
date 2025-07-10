export interface HeaderRevenue {
    title: string;
    subtitle: string;
    value: number;
}

export interface Chart{
    lable: string;
    value: number;
}

export interface RecentOrder{
    orderNbr: string;
    orderDate: Date;
    custName: string;
    total: number;
}