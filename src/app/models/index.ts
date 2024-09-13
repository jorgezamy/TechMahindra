export type Report = {
    requestDate: Date
    type: 'MONTHLY' | 'QUARTERLY',
    dayToProcess: number,
    processingDate: Date
}