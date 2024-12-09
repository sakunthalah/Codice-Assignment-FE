export const ProjectStatus = [
    { key: '1', value: 'Not Started' },
    { key: '2', value: 'Pending Approval' },
    { key: '3', value: 'Completed' },
    { key: '3', value: 'In Progress' }

];

export const StatusColors = (status: string): string => {
    switch (status) {
        case 'Completed':
            return 'success';
        case 'Pending Approval':
            return 'secondary';
        case 'In Progress':
            return 'warning';
        default:
            return 'info';
    }
};


