import { HeaderRevenue, Chart, RecentOrder } from './dashboard.model';

export const headerRevenueMock: HeaderRevenue = {
    title: 'Total Revenue',
    subtitle: 'September 2017',
    value: 10237500,
};

export const chartMock: Chart[] = [
    { lable: 'JUN', value: 4 },
    { lable: 'JUL', value: 6 },
    { lable: 'AUG', value: 6.5 },
    { lable: 'SEP', value: 20 },
    { lable: 'OCT', value: 8 },
    { lable: 'NOV', value: 9 },
    { lable: 'DEC', value: 10 },
];

export const recentOrderMock: RecentOrder[] = [
    {
        orderNbr: '3547',
        orderDate: new Date('2025-06-12T09:30:00'),
        custName: 'Amelia Marsha',
        total: 175000,
    },
    {
        orderNbr: '3546',
        orderDate: new Date('2025-06-12T08:43:00'),
        custName: 'Vina Caroline',
        total: 243000,
    },
    {
        orderNbr: '3548',
        orderDate: new Date('2025-06-12T08:40:00'),
        custName: 'Vina Caroline',
        total: 243000,
    },
    {
        orderNbr: '3542',
        orderDate: new Date('2025-06-12T08:20:00'),
        custName: 'Vina Caroline',
        total: 243000,
    },
    {
        orderNbr: '3541',
        orderDate: new Date('2025-06-12T08:10:00'),
        custName: 'Vina Caroline',
        total: 243000,
    },
];
